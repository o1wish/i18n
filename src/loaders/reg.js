// 提取引号之间的中文
exports.CHINESE_SENTENCE = /"([^"\u4e00-\u9fa5]*[\u4e00-\u9fa5]+[^"\u4e00-\u9fa5]*)+"/g;

// 匹配文件忽略翻译关键字
exports.I18N_IGNORE = new RegExp(/i18nIgnore/g);

// 匹配代码块忽略翻译开头关键字
exports.NO_I18N_THIS_BLOCK_START = new RegExp(/noi18nthisblockstart/g);

// 匹配代码块忽略翻译结尾关键字
exports.NO_I18N_THIS_BLOCK_END = new RegExp(/noi18nthisblockend/g);

// single line comment
exports.SING_LINE_COMMENT = new RegExp(/\/\//g);

// multi-line commnet start
exports.MULTI_LINE_COMMENT_START = new RegExp(/\/\*/g);

// multi-line commnet end
exports.MULTI_LINE_COMMENT_END = new RegExp(/\*\//g);
