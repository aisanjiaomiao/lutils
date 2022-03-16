/**
 * @desc 生成对象代理
 * @param {Object} conf.initValue  初始化值
 * @param {Function} conf.update 更新事件
 * @param {Object} conf.watch 值变动监察
 * @return {Proxy}
 */
function objectProxy(conf) {
  let { watch, update, initValue } = conf;
  let data = typeof initValue == "object" ? initValue : typeof initValue == "function" ? initValue() : {};
  const change = (e) => {
    let { event, oldValue, target, key, value, receiver, data } = e;
    if (!watch || typeof watch != "object") return;
    Object.keys(watch).forEach((k) => {
      if (eval(`data.${k}`) == target[key]) watch[k].bind(proxy)(value, oldValue, e);
    });
  };
  const proxify = (event) => {
    return isPrimitive(event)
      ? event
      : new Proxy(event, {
          get: getProp,
          set(target, key, value, receiver) {
            change({ event, oldValue: target[key], target, key, value, receiver, data, proxy });
            target[key] = value;
            if (update) update.bind(proxy)();
          },
        });
  };
  const isPrimitive = (v) => v == null || (typeof v !== "function" && typeof v !== "object");
  const getProp = (target, property) => (property in target ? proxify(target[property]) : proxify({}));
  const proxy = proxify(data);
  return proxy;
}
export default objectProxy;
