/**
 * 
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmpty(obj) {
    if (typeof obj == 'object') {
        if (Array.isArray(obj))return obj.length<=0;
        else return !Object.keys(obj).length;
    }
    return false;
}

module.exports = isEmpty