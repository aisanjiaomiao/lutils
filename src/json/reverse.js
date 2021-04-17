/**   
 * @desc json数据翻转 key value翻转或 数组翻转  
 * @param   {json}      json数据       
 * @return  {Object}       
 */
function reverse(obj) {
    if (typeof obj == 'object') {
        if (Array.isArray(obj))return obj.reverse();
        var o = new Object();
        for (var k in obj) {
            o[obj[k]] = k;
        }
        return o;
    }
}

export default   reverse