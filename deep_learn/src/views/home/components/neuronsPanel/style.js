import styled, { keyframes } from 'styled-components';

const connect = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`;

export const CommonNeurons = styled.div`
  width: 32px;
  height: 32px;
  border: 1.2px solid #000;
  background: ${props => props.bgColor};
  border-radius: 4px;
`;

export const NeuronsPanelWrapper = styled.div`
  width: 100%;
  height: calc(100% - 104px);
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BodyLeft = styled.div`
  flex: 0 3 240px;
  padding: 80px 20px 20px 20px;
`;

export const BodyCenter = styled.div`
  flex: 5 5 400px;
  padding: 20px;
  display: flex;
`;

export const BodyRight = styled.div`
  flex: 0 2 160px;
  padding: 20px;
`;

export const FeaturesNodeWrapper = styled.div`
  width: 100%;
  height: 76px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const FeaturesNodeDesc = styled.div`
  width: 100px;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  margin-right: 8px;
`;

export const NeuronsGroupWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const NeuronsGroupButton = styled.div`
  width: 32px;
  height: 18px;
  line-height: 12px;
  text-align: center;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${props => props.bgColor};
  user-select: none;
  cursor: pointer;
  transition: all 0.3s linear;
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  margin: 0 6px;
  &:hover {
    opacity: 0.55;
  }
`;

export const NeuronsGroupDesc = styled.h5`
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  margin: 4px 0;
`;

export const OutputValue = styled(NeuronsGroupDesc)`
  position: absolute;
  line-height: 48px;
`;

export const CommonNeuronsWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin: 14px auto 55px auto;
`;

export const DrawSvgPath = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg'
})`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  .line-animation {
    animation: ${connect} 1s ease-in-out;
  }
`;
