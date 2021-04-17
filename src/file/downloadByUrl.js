/**
 ** @desc 通过Url下载文件
 ** @param  {String}  URL
 ** @param {String} 文件名
 **/
function downloadByUrl(l, n) {
    if (typeof l != "string" || l.length <= 0) return;
    let f = document.createElement("a");
    f.id = "download-" + Date.parse(new Date());
    f.href = l;
    f.download = n || "下载";
    f.style = "opacity: 0;height: 1px;width: 1px;overflow: hidden;position:fixed;top: -1;left: -1;z-index: -1;"
    document.body.appendChild(f);
    document.querySelector('#' + f.id).click();
    document.body.removeChild(document.getElementById(f.id));
}
export default   downloadByUrl;
