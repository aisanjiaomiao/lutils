/**
 * @desc  数组寻找
 * @param {Array} s 源数组 
 * @param {Object} kv Key  Value
 * @param {Array} f fields新对象的fields
 * @param {Boolean} m Many 返回多项
 * @return {Object|Array} 
 */
function arrFind(s, kv, f, m) {
    let ks, k, v, oneK = true;
    let isFn = typeof kv === "function";//如果是函数
    if (!isFn) {
        ks = Object.keys(kv);
        oneK = ks.length === 1;
        k = (oneK ? ks[0] : null);
        v = oneK ? kv[k] : null;
    }
    let o = s[m ? "filter" : "find"](isFn ? kv : (_ => {
        if (oneK) {
            return _[k] === v;
        } else {
            for (k in kv) {
                if (_[k] !== kv[k]) return false;
            }
            return true;
        }
    }));
    if (m) {
        if (o.length > 0 && Array.isArray(f)) {
            return o.map(v => {
                return lutils.json.objFields(v, f);
            });
        }
    } else {
        if (o && Array.isArray(f)) {
            return this.objFields(o, f);
        }
    }
    return o;
}

export default   arrFind;