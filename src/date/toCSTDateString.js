import toCSTString from "./toCSTString";
/**
 * @desc   通过时间戳获取中国日期
 * @param  {Number} timestamp 时间戳
 * @return {Boolean}
 */
function toCSTDateString(timestamp) {
    return toCSTString().split('T')[0];
}
export default toCSTDateString
