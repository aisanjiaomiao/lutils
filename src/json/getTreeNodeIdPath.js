
/**   
 * @desc  获取树结构的节点id路径数组（常用于文件路径路由生成）
 * @param   {Array}     treeArr   
 * @param   {String|Number}    id id 值
 * @param   {String}    idStr id key字符串
 * @param   {String}    chindrenStr  chindren key字符串 
 * @return  {Array}     数组   
 * 
 getTreeNodeIdPath([{
    id: 0,
    name: "root",
    chindren: [{
        id: 1,
        name: "home",
        chindren: [{
            id: 2,
            name: "src"
        }]
    }, {
        id: 3,
        name: "nignx",
        chindren: [{
            id: 4,
            name: "nginx.exe"
        }]
    }]
}], 2)
 */
import copy from './copy';

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
