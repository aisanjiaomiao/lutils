
/**
 * @desc   通过时间戳获取中国日期+时间
 * @param  {Number} timestamp 时间戳
 * @return {Boolean}
 */
function toCSTString(timestamp) {
    return new Date((timestamp || (+new Date)) + 8 * 3600 * 1000).toISOString();
}
export default toCSTString

