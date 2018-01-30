/**
 * @desc 浅拷贝，支持常见类型
 * @param {Any} values
 * @return {json}
 */
function copy(o) {
    return JSON.parse(JSON.stringify({ d: o })).d;
}

module.exports = copy;