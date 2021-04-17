/**
 * @desc 是否是微信平台
 * @return {Boolean} 
 */
function isWeixin(){
    var ua = navigator.userAgent.toLowerCase();
    return (ua.indexOf('micromessenger') != -1);
}


export default   isWeixin;