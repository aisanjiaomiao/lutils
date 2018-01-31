/**
 * 
 * @desc   全部替换
 * @param  {String} 原始字符串
 * @param  {String} 搜索字符串
 * @param  {String} 替换字符串
 * @return {String}
 */
function replaceAll(s0,s1,s2){
    return s0.replace(new RegExp(s1, "gm"), s2);
}

module.exports =replaceAll ;