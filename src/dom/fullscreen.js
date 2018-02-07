/**
 * 
 * @desc 进入全屏
 * @param {Element}  
 */
function fullScreen(elemet) {
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
module.exports = fullScreen;
