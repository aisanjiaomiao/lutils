
/**
 *
 * @desc 判断浏览器是移动端
 * @return {Boolean}
 */
 function isMobile() {
    const agent = navigator.userAgent.toLowerCase();
    const keywords = ["android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser"];
    let flag = false;
    //排除 Windows 桌面系统
    if (agent.indexOf("Windows NT") < 0 || (agent.indexOf("Windows NT") >= 0 && agent.indexOf("compatible; MSIE 9.0;") >= 0)) {
      //排除 苹果桌面系统
      if (agent.indexOf("Windows NT") < 0 && agent.indexOf("Macintosh") < 0) {
        for (let item of keywords) {
          if (agent.indexOf(item) >= 0) {
            flag = true;
            break;
          }
        }
      }
    }
    return flag;
  }

export default isMobile;