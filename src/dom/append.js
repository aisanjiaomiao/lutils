/**
 * 
 * @desc 自定义追加节点
 * @param {Element} 
 * @param {String}
 */
function append(dom, str) {
	var ele = document.createElement("div");
	ele.innerHTML = str;
	ele.childNodes.forEach(function (v, i, a) {
		// console.log(v);
		if (Object.prototype.toString.call(dom) === "[object NodeList]") {
			dom.forEach(function (v2, i2, a2) {
				v2.appendChild(v);
			})
		} else {
			dom.appendChild(v);
		}
	});
}

module.exports = append;