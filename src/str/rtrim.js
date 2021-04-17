
/**
* @desc 删除右边的空格
* @param {String}
* @return {String}
*/
function rtrim(s) {
    return s.replace(/(\s*$)/g, '');
}
export default   rtrim;