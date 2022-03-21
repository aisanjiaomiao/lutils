/**
 * @desc 一维数组转二维矩阵数组
 * @param   {Array}     arr 一维数组
 * @param   {width}     width 合并长度 
 * @return  {Array}     二维矩阵数组
 */
function toMatrix(arr, width) {
  return arr.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}

export default toMatrix;
