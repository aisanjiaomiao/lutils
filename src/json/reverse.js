/**   
 * @desc json数据翻转 key value翻转或 数组翻转  
 * @param   {json}      json数据       
 * @return  {Object}       
 */
function reverse(obj) {
    if (typeof obj != 'object') return obj
    if (Array.isArray(obj))return obj.reverse();
    return  Object.fromEntries(Object.entries(obj).map(([a,b])=>[b,a]))
    //  var o = new Object();
    //  for (var k in obj) {
    //      o[obj[k]] = k;
    //  }
    //  return o;
}

export default   reverse