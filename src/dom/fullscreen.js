/**
 * 
 * @desc 进入全屏
 * @param {Element}  
 */
function full(elemet) {
    elemet = (elemet == undefined ? document.body : elemet);
    if (elemet.requestFullscreen) {
        elemet.requestFullscreen();
        return true;
    } else if (elemet.mozRequestFullScreen) {
        elemet.mozRequestFullScreen();
        return true;
    } else if (elemet.webkitRequestFullscreen) {
        elemet.webkitRequestFullscreen();
        return true;
    } else if (elemet.msRequestFullscreen) {
        elemet.msRequestFullscreen();
        return true;
    }
    return false;
}
/**
 * 
 * @desc 退出全屏
 */
function exit() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
module.exports = { full, exit }
