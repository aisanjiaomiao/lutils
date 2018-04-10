/**  
 * 计算文件大小 
 * @param {Number} bytes 文件二进制大小 
 * @param {Number} l 保留几位小数
 * @return {String} 
 */
function bytesToSize(bytes,l) {
    if (bytes === 0) return '0 B';
    var k = 1024;
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(2+(l?l:1)) + ' ' + sizes[i];// 后面保留一位小数，如1.0GB       
}

module.exports = bytesToSize;
