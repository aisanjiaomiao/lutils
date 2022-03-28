/**
 * @desc 生成storage对象代理
 * @param {Object} conf.name storage键名 默认 "lifeData"
 * @param {Object} conf.storage storage存储类型 默认 localStorage
 * @param {Object} conf.initValue  初始化值
 * @param {Function} conf.update 更新事件
 * @param {Object} conf.watch 值变动监察
 * @return {Proxy}
 */

import objectProxy from "./objectProxy";

function storageProxy(conf) {
  let { name, watch, update, initValue, storage } = conf;
  name = name || "lifeData";
  storage = storage || localStorage;
  return objectProxy({
    watch,
    initValue() {
      let data = typeof initValue == "object" ? initValue : typeof initValue == "function" ? initValue() : {};
      if (storage.getItem(name)) {
        try {
          data = JSON.parse(storage.getItem(name));
        } catch (error) {
          storage.setItem(name, JSON.stringify(data));
        }
      } else {
        storage.setItem(name, JSON.stringify(data));
      }
      return data;
    },
    update() {
      storage.setItem(name, JSON.stringify(this));
      if (update) update();
    },
  });
}

export default storageProxy;
