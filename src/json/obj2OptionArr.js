/**
 * @desc kv json  转 Select option 数组
 * @param {Object} o  
 * @param {String|Number} t  
 * @param {String|Number} v  
 * @return {Object} 
 */
function obj2OptionArr(o, t, v) {
    return Object.entries(o).map(([k,i])=>({[t||"label"]:k,[v||"value"]:i}))
    /*var l = [];
    for (var i in o) {
        var c={}
        c[t]=i;
        c[v]=o[i];
        l.push(c);
    }
    return l;*/
};

export default   obj2OptionArr;