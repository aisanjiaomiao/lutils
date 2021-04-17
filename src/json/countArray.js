/** 
 * @desc 计算数组项出现次数
 * @param {Array} 
 * @param {String|Number|Boolean}
 * @return {Number}
 */
function countArray(arr,value){
    if(Array.isArray(arr)){
        return (value?arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0):arr.length);
    }return 0;
}
export default    countArray;
