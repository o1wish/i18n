import React, { useContext, useEffect } from 'react';
import { homeContext } from '../../store/index';
import * as constants from '../../store/actionType';
import SvgPath from './svgPath/index';
import {
  NeuronsPanelWrapper,
  BodyLeft,
  BodyCenter,
  BodyRight,
  FeaturesNodeWrapper,
  FeaturesNodeDesc,
  CommonNeurons,
  NeuronsGroupWrapper,
  NeuronsGroupButton,
  NeuronsGroupDesc,
  CommonNeuronsWrapper,
  OutputValue
} from './style';

const BUTTON_COLOR = '#009966';
const BOX_COLOR = [
  'linear-gradient(45deg, #e66465, #9198e5)',
  'linear-gradient(45deg, orange, cyan)',
  'linear-gradient(45deg, #F0FFF0, #FA8072)',
  'linear-gradient(45deg, #8A2BE2, #7FFFD4)',
  'linear-gradient(45deg, #EE82EE, #FF7F50)',
  'linear-gradient(45deg, #FFFFE0, #8B658B)'
];

const NeuronsPanel = props => {
  const localContext = useContext(homeContext);
  const { params, homeDispatch } = localContext;
  let dependStr = params.length ? params[1] : ''; // 第二个参数值，形如 '5,3,2,1,2'，只要改变 useEffect 重新调用

  useEffect(() => {
    if (params.length) {
      const length = params[1].split(',').length;
      const neuronsNode = {};
      for (let i = 0; i < length; i++) {
        neuronsNode[i] = [...document.getElementsByClassName(`column_${i}`)];
      }
      homeDispatch({
        type: constants.ADD_NEURONS_NODE,
        data: neuronsNode
      });
    }
  }, [dependStr]);

  return (
    <NeuronsPanelWrapper>
      <BodyLeft>{params.length ? renderFeaturesNode({ params, homeDispatch }, BOX_COLOR) : null}</BodyLeft>
      <BodyCenter>
        {params.length ? renderNeuronsGroup({ params, homeDispatch }, 'center', BOX_COLOR) : null}
      </BodyCenter>
      <BodyRight>{params.length ? renderNeuronsGroup({ params, homeDispatch }, 'right') : null}</BodyRight>
      <SvgPath />
    </NeuronsPanelWrapper>
  );
};

/**
 * @desc 渲染输入数据集特征
 * @param {Object} obj
 */
const renderFeaturesNode = (obj, color) => {
  const { params } = obj;
  const arr = params[0];
  return arr.map(v => {
    return (
      <FeaturesNodeWrapper key={v.name}>
        <FeaturesNodeDesc>{v.name}</FeaturesNodeDesc>
        <CommonNeurons className='column_0' bgColor={BOX_COLOR[0]} />
      </FeaturesNodeWrapper>
    );
  });
};

/**
 * @desc 渲染隐含层神经元列信息
 * @param {Object} obj
 * @param {String} sign
 * @param {String} color
 */
const renderNeuronsGroup = (obj, sign) => {
  let arr = obj.params[1].split(',');
  let length = arr.length - 2;
  arr.shift();

  if (sign === 'center') {
    arr.pop();
    return arr.map((v, index) => (
      <NeuronsGroupWrapper key={v + '_' + index}>
        <NeuronsGroupButton onClick={() => addNeurons(obj, index, 20)} bgColor={BUTTON_COLOR}>
          +
        </NeuronsGroupButton>
        <NeuronsGroupButton onClick={() => minusNeurons(obj, index)} bgColor={BUTTON_COLOR}>
          -
        </NeuronsGroupButton>
        <NeuronsGroupDesc>neurons</NeuronsGroupDesc>
        <NeuronsGroupDesc>神经元</NeuronsGroupDesc>
        {renderNeurons(parseInt(v), index)}
      </NeuronsGroupWrapper>
    ));
  }

  if (sign === 'right') {
    const value = arr[arr.length - 1];
    arr = [arr.pop()];
    return arr.map(v => (
      <NeuronsGroupWrapper key={v + '_' + length}>
        <NeuronsGroupButton onClick={() => addNeurons(obj, length, 100)} bgColor={BUTTON_COLOR}>
          +
        </NeuronsGroupButton>
        <NeuronsGroupButton onClick={() => minusNeurons(obj, length)} bgColor={BUTTON_COLOR}>
          -
        </NeuronsGroupButton>
        <OutputValue>{value}</OutputValue>
        <NeuronsGroupDesc>classification</NeuronsGroupDesc>
        <NeuronsGroupDesc>分类</NeuronsGroupDesc>
        {renderNeurons(parseInt(v), length)}
      </NeuronsGroupWrapper>
    ));
  }
};

const renderNeurons = (num, index) => {
  const id = [];
  const color = BOX_COLOR[(index % BOX_COLOR.length) + 1];
  for (let i = 0; i < num; i++) {
    id.push(i);
  }
  return id.map(v => (
    <CommonNeuronsWrapper key={v}>
      <CommonNeurons className={`column_${index + 1}`} bgColor={color} />
    </CommonNeuronsWrapper>
  ));
};

const addNeurons = (obj, index, maxNum) => {
  const { params, homeDispatch } = obj;
  let arr = params[1].split(',');
  let num = parseInt(arr[index + 1]);
  if (num + 1 <= maxNum) {
    arr.splice(index + 1, 1, num + 1 + '');
    params[1] = arr.join(',');

    homeDispatch({
      type: constants.RESET_NEURONS_NUM,
      data: params
    });
  }
};

const minusNeurons = (obj, index) => {
  const { params, homeDispatch } = obj;
  let arr = params[1].split(',');
  let num = parseInt(arr[index + 1]);
  if (num - 1 >= 1) {
    arr.splice(index + 1, 1, num - 1 + '');
    params[1] = arr.join(',');

    homeDispatch({
      type: constants.RESET_NEURONS_NUM,
      data: params
    });
  }
};

export default NeuronsPanel;
