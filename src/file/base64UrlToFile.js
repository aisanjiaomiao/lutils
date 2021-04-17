/**  
 * 将以base64的图片url数据转换为Blob  
 * @param {String} urlData   用url方式表示的base64图片数据 
 * @param {String} name 文件名
 * @param {String} type 文件类型 
 * @return {File} 
 */
function base64UrlToFile(urlData, name, type) {
    var bytes = window.atob(urlData.split(',')[1]);
    type = type || i.img.split(";")[0].split(":")[1];
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return (new File([ab], name, { 'type': type}));
}


export default   base64UrlToFile;