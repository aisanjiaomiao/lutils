/**
 * @desc 获取数组分页数据
 * @param {Array} list 
 * @param {Number} cursor
 * @param {Number} size
 * @return Array
 */
function getPageData(list, cursor, size) {
  if (!cursor || cursor < 1) cursor = 1;
  if (!size) size = 20;
  return list.slice((cursor - 1) * size, cursor * size);
}

export default getPageData;
