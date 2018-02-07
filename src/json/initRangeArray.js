/**
 * @desc 生成返回数组
 * @param {Number} start 
 * @param {Number} end
 * @return {Array} 
 */
function initRangeArray(start, end) {
    if (typeof end != "number") {
        end = start;
        start = 0;
    }
    return Array.apply(null, Array(end - start)).map((v, i) => i + start);
}
module.exports = initRangeArray;
