import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import 'antd';
import 'antd/dist/antd.css';
import Home from './views/home/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route
          path='/'
          exact
          component={() =>
            Home([
              [{ name: '年龄' }, { name: '收入' }, { name: 'scor1' }, { name: '数学' }, { name: '等级' }],
              '5,3,2,1,2'
            ])
          }
        />
      </BrowserRouter>
    </>
  );
};

export default App;
