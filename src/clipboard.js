/**
 * 
 * @desc   写入剪切板
 * @param  {String}  
 */
function clipboard(data){
    data=data.toString();
    let f = document.createElement("form");
    f.id = "copy-" + Date.parse(new Date());
    f.onsubmit = function () { return false };
    f.style = "opacity: 0;height: 1px;width: 1px;overflow: hidden;position:fixed;top: -1;left: -1;z-index: -1;"
    f.innerHTML = `<button onclick='story.select();document.execCommand("Copy");'></button>
        <textarea name="story">${data}</textarea>`;
    document.body.appendChild(f);
    document.querySelector('#' + f.id + '>button').click();
    document.body.removeChild(document.getElementById(f.id));
}
module.exports = clipboard;