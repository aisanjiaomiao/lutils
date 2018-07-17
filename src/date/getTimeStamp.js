/**
 * 返回一个时间戳,
 * @param {Boolean} n 是否以毫秒为单位,精确到千分之一毫秒
 * @return {Number}
*/
function getTimeStamp(n) {
    return n ? performance.now() : (+new Date());
}
