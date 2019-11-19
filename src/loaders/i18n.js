const i18n = require('../../i18n/zh/lan');
const utility = require('./utility');

let sign = false;
const handleLine = function(line) {
  switch (line) {
    case utility.isNoI18nBlockStart:
      sign = true;
      return line;
    case utility.isNoI18nBlockEnd:
      sign = false;
      return line;
    case utility.isSigleLineComment:
      return line;
    case utility.isNultiLineCommentStart:
      sign = true;
      return line;
    case utility.isNultiLineCommentEnd:
      sign = false;
      return line;
  }
  return sign ? line : utility.replaceChineseWithVariable(line, i18n);
};

const handleSource = function(source) {
  return source
    .split('\n')
    .map(line => handleLine(line))
    .join('\n');
};

module.exports = function(source) {
  return utility.isI18nIgnore(source) ? source : handleSource(source);
};
