/**
 * 
 * @desc  全屏自适应缩放 new ScaleResize();
 * @param {HTMLElement} el 节点
 * @param {Object} config 配置
 * @return ScaleResize
 */

class ScaleResize {
  constructor(el, config, bind) {
    this.el = el || document.body;
    this.config = {
      width: 1920, //大屏默认宽度
      height: 1080, //大屏默认高度
      display: "Full", // ['Center','Height','None','Width','Full']
      ...config,
    };
    if (bind != false) {
      this._event = this.resize.bind(this);
      this._event();
      window.addEventListener("resize", this._event);
    }
  }
  setStyle(style, el) {
    for (let k in style) (el ? el.style : this.el.style)[k] = style[k];
  }
  // 等比缩放高度铺满
  resizeCenter() {
    let ratio = window.innerHeight / this.config.height;
    this.setStyle({
      transform: "scale(" + ratio + ")",
      transformOrigin: "left top",
      backgroundSize: 100 * ((this.config.width / window.innerWidth) * ratio) + "%" + " 100%",
      backgroundPosition: (window.innerWidth - this.el.clientWidth * ratio) / 2 + "px top",
      marginLeft: (window.innerWidth - this.el.clientWidth * ratio) / 2,
    });
  }
  // 全屏铺满
  resizeFull() {
    let ratioX = window.innerWidth / this.config.width;
    let ratioY = window.innerHeight / this.config.height;
    this.setStyle({
      transform: "scale(" + ratioX + ", " + ratioY + ")",
      transformOrigin: "left top",
      backgroundSize: "100% 100%",
    });
  }
  // 等比缩放高度铺满并且可以左右移动
  resizeHeight() {
    let ratio = window.innerHeight / this.config.width;
    this.setStyle({
      transform: "scale(" + ratio + ")",
      transformOrigin: "left top",
      backgroundSize: 100 * ((this.config.width / window.innerWidth) * ratio) + "%" + " 100%",
      backgroundPosition: (window.innerWidth - $("body").width() * ratio) / 2 + "px top",
      // marginLeft: (window.innerWidth - $('body').width() * ratio) / 2
    });
    this.setStyle({ overflowX: "scroll" }, document.html);
  }
  // 不缩放
  resizeNone() {
    this.setStyle({ overflow: "hidden", position: "relative" });
  }
  // 等比缩放宽度铺满
  resizeWidth() {
    let ratio = window.innerWidth / (this.config.width || document.body.clientWidth);
    this.setStyle({
      transform: "scale(" + ratio + ")",
      transformOrigin: "left top",
      backgroundSize: "100%",
    });
  }
  // 综合执行resize
  resize() {
    this.setStyle({ width: this.config.width + "px", height: this.config.height + "px" });
    const fn = this["resize" + this.config.display];
    if (fn) fn.bind(this)();
  }
}

export default ScaleResize;
