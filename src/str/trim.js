/**
* 
* @desc 删除左右两端的空格
* @param {String}
* @return {String}
*/
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '');
}
export default   trim;


