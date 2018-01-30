/**
 * 
 * @desc   文件转DataURL
 * @param  {File} 文件
 * @param  {Function} 回调函数
 * @param  {String} 是否Base64
 * @callback {String}  DataURL
 */
function toDataURL(file, c, isBase) {
    var reader = new FileReader();
    reader.onload = function () {
        if (typeof c == "function") c(isBase ? this.result.split(',')[1] : this.result);
    }
    reader.readAsDataURL(file);
}

module.exports = toDataURL;