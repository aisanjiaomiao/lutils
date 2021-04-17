/**
 * 
 * @desc   通过name获取url参数
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function getQueryString(name) {//获取url参数值方法2
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);Object
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}
export default   getQueryString