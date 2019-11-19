import React, { useEffect } from 'react';
import { Button } from 'antd';
import { observer, inject } from 'mobx-react';

const Home = inject('store')(
  observer(props => {
    const { store } = props;
    useEffect(() => {
    }, [JSON.stringify(store.lan)]);
    return (
      <div className='home'>
        <Button onClick={() => store.changeLan('en')}>English</Button>
        <Button onClick={() => store.changeLan('zh')}>中文</Button>
        <p>
          {"姓名："}
          {store.user.name}
        </p>
        <p>
          {"性别："}
          {store.user.sex}
        </p>
        <p>
          {"爱好："}
          {store.user.hobby}
        </p>
      </div>
    );
  })
);

export default Home;
