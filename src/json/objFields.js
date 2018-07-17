/**
* @desc  过滤对象Key
* @param {Object} o 源对象
* @param {Array} f Keys  
* @return {Object} 
*/
function objFields(o, f) {
    let n = {};
    for (let k of f) n[k] = o[k];
    return n;
}

module.exports = objFields;