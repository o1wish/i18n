import React, { useReducer, useEffect, useRef } from 'react';
import NeuronsPanel from './components/neuronsPanel';
import homeReducer, { homeContext, defaultState } from './store/index';
import * as constants from './store/actionType';
import { Divider } from 'antd';
import {
  ContainerWrapper,
  ContainerHeader,
  HeaderLeft,
  HeaderCommonDescWrapper,
  HeadeCommonDesc,
  HeaderCenter,
  HeaderRight,
  CommonButton
} from './style';

const BACKGROUND_COLOR = '#bcbcbc';
const BUTTON_COLOR = '#009966';

/* 
传入的数据格式为：[
[{ name: '年龄' }, { name: '收入' }, { name: 'scor1' }, { name: '数学' }, { name: '等级' }],
'5,3,2,1,2'
]
*/
const Home = props => {
  const [homeState, homeDispatch] = useReducer(homeReducer, defaultState);
  const addRef = useRef('addRef');
  const minusRef = useRef('minusRef');

  useEffect(() => {
    homeDispatch({
      type: constants.GET_PROPS_DATA,
      data: props
    });
  }, []);

  const { params, neuronsNode } = homeState;

  return (
    <ContainerWrapper bgColor={BACKGROUND_COLOR}>
      <ContainerHeader>
        <HeaderLeft>
          <HeaderCommonDescWrapper>
            <Divider orientation='left' className='divider-style'>
              Features
            </Divider>
            <HeadeCommonDesc>输入数据集特征</HeadeCommonDesc>
          </HeaderCommonDescWrapper>
        </HeaderLeft>

        <HeaderCenter>
          <HeaderCommonDescWrapper>
            <Divider orientation='left' className='divider-style'>
              Hidden Layers
            </Divider>
            <HeadeCommonDesc>{params.length ? params[1].split(',').length - 2 : ''}</HeadeCommonDesc>
            <HeadeCommonDesc>隐含层</HeadeCommonDesc>
            <CommonButton
              left='13%'
              top='60px'
              ref={addRef}
              bgColor={BUTTON_COLOR}
              onClick={() => addNeuronsNode({ homeState, homeDispatch, maxNum: 8, defaultNum: 1 })}>
              +
            </CommonButton>
            <CommonButton
              right='13%'
              top='60px'
              ref={minusRef}
              bgColor={BUTTON_COLOR}
              onClick={() => minusNeuronsNode({ homeState, homeDispatch, minusRef })}>
              -
            </CommonButton>
          </HeaderCommonDescWrapper>
        </HeaderCenter>

        <HeaderRight>
          <HeaderCommonDescWrapper>
            <Divider orientation='left' className='divider-style'>
              Output
            </Divider>
            <HeadeCommonDesc>输出结果</HeadeCommonDesc>
          </HeaderCommonDescWrapper>
        </HeaderRight>
      </ContainerHeader>

      <homeContext.Provider value={{ params: homeState.params, homeDispatch, neuronsNode }}>
        <NeuronsPanel />
      </homeContext.Provider>
    </ContainerWrapper>
  );
};

/**
 * @desc 面板隐含层数增加
 * @param {Object} obj
 */
const addNeuronsNode = obj => {
  const { params } = obj.homeState;
  const { maxNum, defaultNum } = obj;
  const arr = params[1].split(',');
  if (arr.length - 2 < maxNum) {
    arr.splice(arr.length - 1, 0, defaultNum + '');
    const str = arr.join(',');
    params[1] = str;
    obj.homeDispatch({
      type: constants.RESET_HIDDEN_LAYERS,
      data: params
    });
  }
};

/**
 * @desc 面板隐含层数减少
 * @param {Object} obj
 */
const minusNeuronsNode = obj => {
  const { params } = obj.homeState;
  const arr = params[1].split(',');
  if (arr.length - 2 > 1) {
    arr.splice(arr.length - 1, 1);
    const str = arr.join(',');
    params[1] = str;
    obj.homeDispatch({
      type: constants.RESET_HIDDEN_LAYERS,
      data: params
    });
  }
};

export default Home;
