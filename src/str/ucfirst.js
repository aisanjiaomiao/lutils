/**
* 
* @desc 英文首字母大写
* @param {String}
* @return {String}
*/
function ucfirst(str) {
    var str = str.toLowerCase();
    str = str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
    return str;
};
export default   ucfirst;


