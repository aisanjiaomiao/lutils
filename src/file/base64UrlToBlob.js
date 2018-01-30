/**  
 * 将以base64的图片url数据转换为Blob  
 * @param {String} urlData   用url方式表示的base64图片数据 
 * @param {Object} type 文件类型
 * @param {Boolean} isAB 是否返回ArrayBuffer
 * @return {Blob | ArrayBuffer} 
 */
function base64UrlToBlob(urlData, type, isAB) {
    var bytes = window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte  
    //处理异常,将ascii码小于0的转换为大于0  
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return isAB ? ab : (new Blob([ab], type || { type: 'application/octet-stream' }));
}

module.exports = base64UrlToBlob;