import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'mobx-react';
import 'antd';
import 'antd/dist/antd.css';
import '../i18n/index';
import Home from './components/Home/index';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
