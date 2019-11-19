import styled from 'styled-components';

/**
 *  凡 styled-components 样式组件内存在 class 的样式等，均为 antd 组件样式修改
 */

// Common styles
export const HeaderCommonDescWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  line-height: 1.4298;
  .divider-style {
    margin: 8px auto;
    &::before {
      width: 20%;
      border-width: 2px;
    }
    &::after {
      border-width: 2px;
    }
  }
`;

export const HeadeCommonDesc = styled.span`
  padding: 0 10px;
  display: inline-block;
`;

export const CommonButton = styled.span`
  width: 56px;
  height: 28px;
  line-height: 22px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  user-select: none;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  transition: all 0.3s linear;
  font-size: 26px;
  font-weight: 700;
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  &:hover {
    opacity: 0.55;
  }
`;

// container out wrapper styles
export const ContainerWrapper = styled.div`
  width: 80%;
  min-height: 700px;
  margin: 0 auto;
  background-color: ${props => props.bgColor};
  box-sizing: border-box;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
`;

export const HeaderLeft = styled.div`
  flex: 0 3 240px;
  padding: 20px;
`;

export const HeaderCenter = styled.div`
  flex: 5 5 400px;
  padding: 20px;
  position: relative;
`;

export const HeaderRight = styled.div`
  flex: 0 2 160px;
  padding: 20px;
`;
