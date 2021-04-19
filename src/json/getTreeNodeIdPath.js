
/**   
 * @desc  获取树结构的节点id路径数组
 * @param   {Array}     treeArr   
 * @param   {String|Number}    id id 值
 * @param   {String}    idStr id key字符串
 * @param   {String}    chindrenStr  chindren key字符串 
 * @return  {Array}     数组   
 */
function getTreeNodeIdPath(treeArr, id, idStr, chindrenStr) {
    if (idStr == undefined) idStr = "id";
    if (chindrenStr == undefined) chindrenStr = "chindren";
    treeArr = copy(treeArr);
    let pathId = [];
    let _fn = function (nodes, pid) {
        for (let n of nodes) {
            n.$pid = pid ? pid.concat(n[idStr]) : [n[idStr]];
            if (n[idStr] == id) {
                return pathId = n.$pid;
            }
            if (n[chindrenStr]) {
                _fn(n[chindrenStr], n.$pid);
            }
        }
    }
    _fn(treeArr, pathId);
    return pathId;
}

export default getTreeNodeIdPath;
