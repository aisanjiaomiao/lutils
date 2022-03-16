/**
 * @desc 生成分页信息
 * @param {Number} conf.pageNum 当前页码
 * @param {Number} conf.totalCount 数据总数
 * @param {Number} conf.dataCount  数据总数
 * @param {Number} conf.pageSize 分页大小
 * @param {Number} conf.pageListCount 分页器数组长度
 * @return {Object}
 * 
    console.log(-1, JSON.stringify(paginationParse({ pageNum: -1, totalCount: 0, pageListCount: 5, pageSize: 20 })));
    console.log(1, JSON.stringify(paginationParse({ pageNum: 1, totalCount: 0, pageListCount: 5, pageSize: 20 })));
    console.log(2, JSON.stringify(paginationParse({ pageNum: 2, totalCount: 0, pageListCount: 5, pageSize: 20 })));
    for (let i = -1; i < 14; i++) {
        console.log(i, JSON.stringify(paginationParse({ pageNum: i, totalCount: 201, pageListCount: 5, pageSize: 20 })));
    }
 */
function paginationParse(conf) {
  let { pageNum, totalCount, dataCount, pageSize, pageListCount } = conf;
  let page = {
    totalCount: totalCount || dataCount,
    cursor: parseInt(pageNum || 1), //当前页面
    size: parseInt(pageSize || 20), //分页大小
    total: parseInt(totalCount || 0), //总数据量
    list: [], //分页列表
    listCount: parseInt(pageListCount || 5), //分页显示链接数量
  };
  page.cursor = page.cursor > 0 ? page.cursor : 1;
  page.max = Math.ceil(page.totalCount / page.size); // 计算最大分页数
  let len = Math.floor(page.listCount / 2); //左右边
  let offset = 0; // 计算偏移
  if (page.cursor > page.max) {
    // 游标大于 最大分页数
    for (let i = 1; i <= page.max; i++) page.list.push(i);
  } else {
    for (let i = page.cursor - len; i <= page.cursor + len; i++) {
      if (i < 1) offset++; // 索引越界 加 偏移
      if (i > page.max) offset--; //索引越界 减 偏移
      page.list.push(i);
    }
    page.list = page.list.map((v) => v + offset).filter((v) => v <= page.max && v > 0);
  }
  if (page.list.length > page.listCount) page.list = page.cursor > page.max ? page.list.slice(page.list.length - page.listCount, page.list.length) : page.list.slice(0, page.listCount);
  if (page.cursor - 1 > 0) page.prev = page.cursor - 1;
  if (page.prev > page.max) page.prev = page.list.length ? page.list[page.list.length - 1] : null;
  if (page.cursor + 1 <= page.max) page.next = page.cursor + 1;
  if (page.next < 1) page.next = 1;
  return page;
}
export default paginationParse;
