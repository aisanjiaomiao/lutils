/**
 * 计算文件大小
 * @param {Number} bytes 文件二进制大小
 * @param {Array}  sizes 文件二进制大小单位
 * @return {String}
 */
function bytesToSize(bytes, sizes) {
  if (bytes === 0) return "0 B";
  let k = 1024;
  sizes = sizes || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i]; // 后面保留一位小数，如1.0GB                                                                                                                  //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

export default bytesToSize;
