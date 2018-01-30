/**
 * @desc   字符串转日期时间
 * @param  {String}  
 * @param  {String} format 日期格式
 * @return {Boolean}
 */
function string2date(s, f) {
    return new Date(Date.parse(s.replace(f || /-/g, "/")));
}
module.exports = string2date
