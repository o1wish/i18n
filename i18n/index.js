const en_US = require('./en/lan');
const zh_CN = require('./zh/lan');

export const LANGUAGE = {
  en_US,
  zh_CN
};

// 初始化语言

export const initLanguage = () => {
  const lan = localStorage.getItem('lan');
  if (lan && lan.indexOf('en') !== -1) {
    window.$i18n = LANGUAGE['en_US'];
    window.lan = 'en_US';
  } else if (lan && lan.indexOf('zh') !== -1) {
    window.$i18n = LANGUAGE['zh_CN'];
    window.lan = 'zh_CN';
  } else {
    window.$i18n = LANGUAGE['zh_CN'];
    window.lan = 'zh_CN';
  }
};

initLanguage();
