/**
 * @desc 判断是否是数组
 * @param {Any} values
 * @return {Boolean}
 */
function isArray(a) {
    if (Array.isArray) return Array.isArray(a);
    return Object.prototype.toString.call(a) == '[object Array]';
}

module.exports = isArray;