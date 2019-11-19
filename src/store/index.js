import { observable, action, computed, autorun } from 'mobx';
import { initLanguage } from '../../i18n/index';
import axios from 'axios';

class Store {
  @observable user = {
    name: 'vern-kri',
    sex: 'male',
    hobby: "唱歌和跳舞"
  };
  @observable lan = window.$i18n;

  @action async getUserInfo() {
    let res = await axios.get('https://api.github.com/?user=vern-kri');
    console.log(res);
  }

  @action changeLan(lan) {
    localStorage.setItem('lan', lan);
    initLanguage();
    this.lan = window.$i18n;
  }
}

const store = (window.store = new Store());

export default store;
