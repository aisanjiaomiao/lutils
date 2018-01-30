/**
 * 
 * @desc   文件转BlobURL
 * @param  {File} 文件 
 * @callback {String}  DataURL
 */ 
function toBlobURL(f){
    var url=URL.createObjectURL(f);
    setTimeout(function () {
        URL.revokeObjectURL(f); 
    }, 10); 
    return url;
}
module.exports = toBlobURL;