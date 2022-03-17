/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function webP() {
  return !![].map && document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") == 0;
}
/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function webP2() {
  var img = new Image();
  img.onload = img.onerror = (event) => {
    //如果进入加载且图片宽度为1(通过图片宽度值判断图片是否可以显示)
    return event && event.type === "load" ? img.width == 1 : false;
  };
  img.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="; //一像素图片
}

export default {
  webP,
  webP2, 
};
