const REG = require('./reg');
const fs = require('fs');
const path = require('path');

const isSigleLineComment = function(line) {
  REG.SING_LINE_COMMENT.lastIndex = 0;
  return REG.SING_LINE_COMMENT.test(line);
};

const isNoI18nBlockStart = function(line) {
  REG.NO_I18N_THIS_BLOCK_START.lastIndex = 0;
  return REG.NO_I18N_THIS_BLOCK_START.test(line);
};

const isNoI18nBlockEnd = function(line) {
  REG.NO_I18N_THIS_BLOCK_END.lastIndex = 0;
  return REG.NO_I18N_THIS_BLOCK_END.test(line);
};

const isNultiLineCommentStart = function(line) {
  REG.MULTI_LINE_COMMENT_START.lastIndex = 0;
  return REG.MULTI_LINE_COMMENT_START.test(line);
};

const isNultiLineCommentEnd = function(line) {
  REG.MULTI_LINE_COMMENT_END.lastIndex = 0;
  return REG.MULTI_LINE_COMMENT_END.test(line);
};

const isI18nIgnore = function(source) {
  REG.I18N_IGNORE.lastIndex = 0;
  return REG.I18N_IGNORE.test(source);
};

// 根据每行文本中的中文查找i18n中文文件中的key值
const getKeyByValue = function(str, index, obj) {
  for (key in obj) {
    if (str === `"${obj[key]}"`) {
      return key;
    }
  }
  return null;
};

// 将每行的中文替换成变量
const replaceChineseWithVariable = function(line, i18n) {
  let newLine;
  let chineseSentence = line.match(REG.CHINESE_SENTENCE);

  chineseSentence &&
    chineseSentence.forEach((item, index) => {
      const key = getKeyByValue(item, index, i18n);
      // 如果找到对应key值
      if (key) {
        newLine = line.replace(item, `window.$i18n['${key}']`);
      } else {
        console.log('没有找到相应的国际化变量');
      }
    });

  return newLine || line;
};

module.exports = {
  isSigleLineComment,
  isNoI18nBlockStart,
  isNoI18nBlockEnd,
  isNultiLineCommentStart,
  isNultiLineCommentEnd,
  isI18nIgnore,
  replaceChineseWithVariable
};
