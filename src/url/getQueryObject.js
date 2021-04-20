/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function getQueryObject(url) {
    url = url ? url:window.location.search ;
    let search = url[0] === '?' ? url : url.substring(url.lastIndexOf('?')); 
    let q = {};
    search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v);
    return q; 
}
export default getQueryObject;