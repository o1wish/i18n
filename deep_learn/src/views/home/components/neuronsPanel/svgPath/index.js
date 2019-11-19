import React, { useContext, Fragment, useEffect } from 'react';
import { homeContext } from '../../../store/index';
import { DrawSvgPath } from '../style';

const SvgPath = props => {
  const localContext = useContext(homeContext);
  let { neuronsNode } = localContext;

  // 窗口缩放节流
  useEffect(() => {
    window.addEventListener('resize', resizePanel);
    return () => window.removeEventListener('resize', resizePanel);
  }, []);

  return Object.keys(neuronsNode).length ? renderRecursive(Object.keys(neuronsNode).length, neuronsNode) : null;
};

const resizePanel = () => {
  let timeout;
  if (!timeout) {
    setTimeout(() => {
      timeout = null;
      // eslint-disable-next-line no-self-assign
      window.location.href = window.location.href;
    }, 51);
  }
};

const renderRecursive = (num, neuronsNode) => {
  let len = num - 1; // 4
  const newArr = [];

  for (let i = 0; i < len; i++) {
    newArr.push(renderLinePath(neuronsNode, i, i + 1));
  }

  return <Fragment>{newArr}</Fragment>;
};

const renderLinePath = (neuronsNode, node1, node2) => {
  return (
    <DrawSvgPath key={node1 + node2}>
      {neuronsNode[node1].map((v1, i1) => {
        return neuronsNode[node2].map((v2, i2) => {
          let color = generateRandomColor();
          return (
            <path
              d={`
            M${v1.offsetLeft + 32 + 1} ${v1.offsetTop + 16} 
            C${v1.offsetLeft + 33 + (v2.offsetLeft - v1.offsetLeft - 36) * 0.17} ${v1.offsetTop +
                16 +
                (v2.offsetTop - v1.offsetTop) * 0.33}
            ${v1.offsetLeft + 33 + (v2.offsetLeft - v1.offsetLeft - 36) * 0.83} ${v1.offsetTop +
                16 -
                (v1.offsetTop - v2.offsetTop) * 0.67}
            ${v2.offsetLeft - 3} ${v2.offsetTop + 16}
            `}
              stroke={`${color}`}
              fill='transparent'
              strokeLinecap='round'
              strokeDasharray='10, 5'
              strokeWidth='0.5'
              key={i1 + i2}
              className='line-animation'
            />
          );
        });
      })}
    </DrawSvgPath>
  );
};

// 产生随机色线条
const generateRandomColor = () => {
  const COLOR_COLLECTION = ['#1C86EE', '#FF7F00', '#B0E0E6', '#FFE4B5'];
  return COLOR_COLLECTION[Math.floor(Math.random() * 2)];
};

export default SvgPath;
