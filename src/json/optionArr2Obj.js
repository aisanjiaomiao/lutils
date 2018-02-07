/**
 * @desc Select option数组 转 kv json
 * @param {Array} l 对象数组[{value: '选项1',label: '黄金糕'}, {value: '选项2',label: '双皮奶'},...]
 * @param {String|Number} t key值 例如:"label"
 * @param {String|Number} v value值 例如:"value"
 * @return {Object}  {'黄金糕':'选项1'}
 */
function optionArr2Obj(l, t, v) {
    var c = {};
    for (var i of l) {
        if (!c[i[t]]) c[i[t]] = i[v];
    }
    return c;
};

module.exports = optionArr2Obj;