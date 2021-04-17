/**
 * 
 * @desc 随机生成颜色
 * @return {String} 
 */
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}
/**
 * 
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 
 * @desc 生成随机字符串([A~Z],[a~z],[0~9])
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */

function randomChars(len) {
    var s = "", t;
    var ranNum = (l) => {
        return Math.floor(Math.random() * (l[1] - l[0])) + l[0];
    };
    for (; len > 0; len--) {
        t = ranNum([[65, 91], [97, 123], [0, 10]][ranNum([0, 3])]);
        s = s + (t > 10 ? String.fromCharCode(t) : t.toString());
    }
    return s;
};

/**
 * @desc 打乱数组内部元素顺序
 * @param {Array} arr 
 */
function randomSort(arr){
    return arr.sort(() => Math.random() - 0.5);
}

/**
 * @desc 生成UUID
 * @return {String}
 */
function UUID(){
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

export default   {
    randomColor, randomNum, randomChars,randomSort,UUID
};