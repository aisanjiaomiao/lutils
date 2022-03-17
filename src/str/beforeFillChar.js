
/** 
 ** @desc 在字符串之前根据长度填充自定义字符
 ** @param  {Number} 数字
 ** @param {Number} 长度
 ** @param {String} 填充字符
 ** @return {String}  
 **/
 function beforeFillChar(str,len,char){ 
    if(str.length>len||!len)return str;
    return Array(len-str.length).fill(char||' ').join("")+str;
}
export default beforeFillChar;