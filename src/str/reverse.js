/**   
 * @desc 字符串数据翻转
 * @param   {String}            
 * @return  {Object}     数组   
 */
function reverse(s) {
    if (s) return s.split("").reverse().join('');
    return '';
}

export default   reverse