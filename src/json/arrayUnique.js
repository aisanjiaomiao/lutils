/**
 * 
 * @desc 数组去重
 * @param {Array} 
 * @return {Array}
 */
function unique(a) {
    return Array.from(new Set(a));
}

module.exports = arrayUnique;