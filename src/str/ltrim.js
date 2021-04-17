/**
* @desc 删除左边的空格
* @param {String}
* @return {String}
*/
function ltrim(s) {
    return s.replace(/(^\s*)/g, '');
}
export default   ltrim;
