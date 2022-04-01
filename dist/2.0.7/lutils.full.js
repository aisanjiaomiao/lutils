var lutils = (function () {
    'use strict';

    /**   
     * @desc json格式转树状结构   
     * @param   {json}      json数据   
     * @param   {String}    id的字符串   
     * @param   {String}    父id的字符串   
     * @param   {String}    children的字符串   
     * @return  {Array}     数组   
     */
    function array2Tree(a, idStr, pidStr, chindrenStr, addHash) {
      var r = [],
          hash = {},
          id = idStr,
          pid = pidStr,
          children = chindrenStr,
          i = 0,
          j = 0,
          len = a.length;

      for (; i < len; i++) {
        hash[a[i][id]] = a[i];
      }

      for (; j < len; j++) {
        var aVal = a[j],
            hashVP = hash[aVal[pid]];

        if (hashVP) {
          !hashVP[children] && (hashVP[children] = []);
          hashVP[children].push(aVal);
        } else {
          r.push(aVal);
        }
      }

      return addHash ? {
        hash: hash,
        tree: r
      } : r;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }

      return target;
    }

    function _typeof(obj) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;

      var _s, _e;

      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;

          var F = function () {};

          return {
            s: F,
            n: function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: F
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var normalCompletion = true,
          didErr = false,
          err;
      return {
        s: function () {
          it = it.call(o);
        },
        n: function () {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function (e) {
          didErr = true;
          err = e;
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }

    /**
     * @desc 深拷贝，支持常见类型
     * @param {Any} values
     */
    function deepClone(values) {
      var copy; // Handle the 3 simple types, and null or undefined

      if (null == values || "object" != _typeof(values)) return values; // Handle Date

      if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
      } // Handle Array


      if (values instanceof Array) {
        copy = [];

        for (var i = 0, len = values.length; i < len; i++) {
          copy[i] = deepClone(values[i]);
        }

        return copy;
      } // Handle Object


      if (values instanceof Object) {
        copy = {};

        for (var attr in values) {
          if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }

        return copy;
      }

      throw new Error("Unable to copy values! Its type isn't supported.");
    }

    /**
     * 
     * @desc   判断`obj`是否为空
     * @param  {Object} obj
     * @return {Boolean}
     */
    function isEmpty(obj) {
      if (_typeof(obj) == 'object') {
        if (Array.isArray(obj)) return obj.length <= 0;else return !Object.keys(obj).length;
      }

      return false;
    }

    /**   
     * @desc json数据翻转 key value翻转或 数组翻转  
     * @param   {json}      json数据       
     * @return  {Object}       
     */
    function reverse$1(obj) {
      if (_typeof(obj) != 'object') return obj;
      if (Array.isArray(obj)) return obj.reverse();
      return Object.fromEntries(Object.entries(obj).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            a = _ref2[0],
            b = _ref2[1];

        return [b, a];
      })); //  var o = new Object();
      //  for (var k in obj) {
      //      o[obj[k]] = k;
      //  }
      //  return o;
    }

    /**
     * @desc 浅拷贝，支持常见类型
     * @param {Any} values
     * @return {json}
     */
    function copy(o) {
      return JSON.parse(JSON.stringify({
        d: o
      })).d;
    }

    /**
     * 
     * @desc 判断两个数组是否相等
     * @param {Array} arr1 
     * @param {Array} arr2 
     * @return {Boolean}
     */
    function arrayEqual(arr1, arr2) {
      if (arr1 === arr2) return true;
      if (arr1.length != arr2.length) return false;

      for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) return false;
      }

      return true;
    }

    /**
     * @desc 判断是否是数组
     * @param {Any} values
     * @return {Boolean}
     */
    function isArray(a) {
      if (Array.isArray) return Array.isArray(a);
      return Object.prototype.toString.call(a) == '[object Array]';
    }

    /**
     * @desc Select option数组 转 kv json
     * @param {Array} l 对象数组[{value: '选项1',label: '黄金糕'}, {value: '选项2',label: '双皮奶'},...]
     * @param {String|Number} t key值 例如:"label"
     * @param {String|Number} v value值 例如:"value"
     * @return {Object}  {'黄金糕':'选项1'}
     */
    function optionArr2Obj(l, t, v) {
      var c = {};

      var _iterator = _createForOfIteratorHelper(l),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          if (!c[i[t]]) c[i[t]] = i[v];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return c;
    }

    /**
     * @desc kv json  转 Select option 数组
     * @param {Object} o  
     * @param {String|Number} t  
     * @param {String|Number} v  
     * @return {Object} 
     */
    function obj2OptionArr(o, t, v) {
      return Object.entries(o).map(function (_ref) {
        var _ref3;

        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            i = _ref2[1];

        return _ref3 = {}, _defineProperty(_ref3, t || "label", k), _defineProperty(_ref3, v || "value", i), _ref3;
      });
      /*var l = [];
      for (var i in o) {
          var c={}
          c[t]=i;
          c[v]=o[i];
          l.push(c);
      }
      return l;*/
    }

    /** 
     * @desc 计算数组项出现次数
     * @param {Array} 
     * @param {String|Number|Boolean}
     * @return {Number}
     */
    function countArray(arr, value) {
      if (Array.isArray(arr)) {
        return value ? arr.reduce(function (a, v) {
          return v === value ? a + 1 : a + 0;
        }, 0) : arr.length;
      }

      return 0;
    }

    /**
     * @desc 生成返回数组
     * @param {Number} start 
     * @param {Number} end
     * @return {Array} 
     */
    function initRangeArray(start, end) {
      if (typeof end != "number") {
        var _ref = [0, start];
        start = _ref[0];
        end = _ref[1];
      }

      return Array.apply(null, Array(end - start)).map(function (v, i) {
        return i + start;
      });
    }

    /**
     * @desc  数组寻找
     * @param {Array} s 源数组 
     * @param {Object} kv Key  Value
     * @param {Array} f fields新对象的fields
     * @param {Boolean} m Many 返回多项
     * @return {Object|Array} 
     */
    function arrFind(s, kv, f, m) {
      var ks,
          k,
          v,
          oneK = true;
      var isFn = typeof kv === "function"; //如果是函数

      if (!isFn) {
        ks = Object.keys(kv);
        oneK = ks.length === 1;
        k = oneK ? ks[0] : null;
        v = oneK ? kv[k] : null;
      }

      var o = s[m ? "filter" : "find"](isFn ? kv : function (_) {
        if (oneK) {
          return _[k] === v;
        } else {
          for (k in kv) {
            if (_[k] !== kv[k]) return false;
          }

          return true;
        }
      });

      if (m) {
        if (o.length > 0 && Array.isArray(f)) {
          return o.map(function (v) {
            return lutils.json.objFields(v, f);
          });
        }
      } else {
        if (o && Array.isArray(f)) {
          return this.objFields(o, f);
        }
      }

      return o;
    }

    /**
    * @desc  过滤对象Key
    * @param {Object} o 源对象
    * @param {Array} f Keys  
    * @return {Object} 
    */
    function objFields(o, f) {
      var n = {};

      var _iterator = _createForOfIteratorHelper(f),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var k = _step.value;
          n[k] = o[k];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return n;
    }

    function getTreeNodeIdPath(treeArr, id, idStr, chindrenStr) {
      if (idStr == undefined) idStr = "id";
      if (chindrenStr == undefined) chindrenStr = "chindren";
      treeArr = copy(treeArr);
      var pathId = [];

      var _fn = function _fn(nodes, pid) {
        var _iterator = _createForOfIteratorHelper(nodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var n = _step.value;
            n.$pid = pid ? pid.concat(n[idStr]) : [n[idStr]];

            if (n[idStr] == id) {
              return pathId = n.$pid;
            }

            if (n[chindrenStr]) {
              _fn(n[chindrenStr], n.$pid);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      _fn(treeArr, pathId);

      return pathId;
    }

    /**
     * @desc 生成对象代理
     * @param {Object} conf.initValue  初始化值
     * @param {Function} conf.update 更新事件
     * @param {Object} conf.watch 值变动监察
     * @return {Proxy}
     */
    function objectProxy(conf) {
      var watch = conf.watch,
          update = conf.update,
          initValue = conf.initValue;
      var data = _typeof(initValue) == "object" ? initValue : typeof initValue == "function" ? initValue() : {};

      var change = function change(e) {
        e.event;
            var oldValue = e.oldValue,
            target = e.target,
            key = e.key,
            value = e.value;
            e.receiver;
            e.data;
        if (!watch || _typeof(watch) != "object") return;
        Object.keys(watch).forEach(function (k) {
          if (eval("data.".concat(k)) == target[key]) watch[k].bind(proxy)(value, oldValue, e);
        });
      };

      var proxify = function proxify(event) {
        return isPrimitive(event) ? event : new Proxy(event, {
          get: getProp,
          set: function set(target, key, value, receiver) {
            change({
              event: event,
              oldValue: target[key],
              target: target,
              key: key,
              value: value,
              receiver: receiver,
              data: data,
              proxy: proxy
            });
            target[key] = value;
            if (update) update.bind(proxy)();
          }
        });
      };

      var isPrimitive = function isPrimitive(v) {
        return v == null || typeof v !== "function" && _typeof(v) !== "object";
      };

      var getProp = function getProp(target, property) {
        return property in target ? proxify(target[property]) : proxify({});
      };

      var proxy = proxify(data);
      return proxy;
    }

    function storageProxy(conf) {
      var name = conf.name,
          watch = conf.watch,
          _update = conf.update,
          _initValue = conf.initValue,
          storage = conf.storage;
      name = name || "lifeData";
      storage = storage || localStorage;
      return objectProxy({
        watch: watch,
        initValue: function initValue() {
          var data = _typeof(_initValue) == "object" ? _initValue : typeof _initValue == "function" ? _initValue() : {};

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
        update: function update() {
          storage.setItem(name, JSON.stringify(this));
          if (_update) _update();
        }
      });
    }

    /**
     * @desc 生成分页信息
     * @param {Number} conf.pageNum 当前页码
     * @param {Number} conf.totalCount 数据总数
     * @param {Number} conf.dataCount  数据总数
     * @param {Number} conf.pageSize 分页大小
     * @param {Number} conf.pageListCount 分页器数组长度
     * @return {Object}
     * 
        console.log(-1, JSON.stringify(paginationParse({ pageNum: -1, totalCount: 0, pageListCount: 5, pageSize: 20 })));
        console.log(1, JSON.stringify(paginationParse({ pageNum: 1, totalCount: 0, pageListCount: 5, pageSize: 20 })));
        console.log(2, JSON.stringify(paginationParse({ pageNum: 2, totalCount: 0, pageListCount: 5, pageSize: 20 })));
        for (let i = -1; i < 14; i++) {
            console.log(i, JSON.stringify(paginationParse({ pageNum: i, totalCount: 201, pageListCount: 5, pageSize: 20 })));
        }
     */
    function paginationParse(conf) {
      var pageNum = conf.pageNum,
          totalCount = conf.totalCount,
          dataCount = conf.dataCount,
          pageSize = conf.pageSize,
          pageListCount = conf.pageListCount;
      var page = {
        totalCount: totalCount || dataCount,
        cursor: parseInt(pageNum || 1),
        //当前页面
        size: parseInt(pageSize || 20),
        //分页大小
        total: parseInt(totalCount || 0),
        //总数据量
        list: [],
        //分页列表
        listCount: parseInt(pageListCount || 5) //分页显示链接数量

      };
      page.cursor = page.cursor > 0 ? page.cursor : 1;
      page.max = Math.ceil(page.totalCount / page.size); // 计算最大分页数

      var len = Math.floor(page.listCount / 2); //左右边

      var offset = 0; // 计算偏移

      if (page.cursor > page.max) {
        // 游标大于 最大分页数
        for (var i = 1; i <= page.max; i++) {
          page.list.push(i);
        }
      } else {
        for (var _i = page.cursor - len; _i <= page.cursor + len; _i++) {
          if (_i < 1) offset++; // 索引越界 加 偏移

          if (_i > page.max) offset--; //索引越界 减 偏移

          page.list.push(_i);
        }

        page.list = page.list.map(function (v) {
          return v + offset;
        }).filter(function (v) {
          return v <= page.max && v > 0;
        });
      }

      if (page.list.length > page.listCount) page.list = page.cursor > page.max ? page.list.slice(page.list.length - page.listCount, page.list.length) : page.list.slice(0, page.listCount);
      if (page.cursor - 1 > 0) page.prev = page.cursor - 1;
      if (page.prev > page.max) page.prev = page.list.length ? page.list[page.list.length - 1] : null;
      if (page.cursor + 1 <= page.max) page.next = page.cursor + 1;
      if (page.next < 1) page.next = 1;
      return page;
    }

    /**
     * @desc 获取数组分页数据
     * @param {Array} list 
     * @param {Number} cursor
     * @param {Number} size
     * @return Array
     */
    function getPageData(list, cursor, size) {
      if (!cursor || cursor < 1) cursor = 1;
      if (!size) size = 20;
      return list.slice((cursor - 1) * size, cursor * size);
    }

    /**
     * @desc 一维数组转二维矩阵数组
     * @param   {Array}     arr 一维数组
     * @param   {width}     width 合并长度 
     * @return  {Array}     二维矩阵数组
     */
    function toMatrix(arr, width) {
      return arr.reduce(function (rows, key, index) {
        return (index % width == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
      }, []);
    }

    var json = {
      arrToMatrix: toMatrix,
      array2Tree: array2Tree,
      deepClone: deepClone,
      isEmpty: isEmpty,
      copy: copy,
      arrayEqual: arrayEqual,
      isArray: isArray,
      reverse: reverse$1,
      optionArr2Obj: optionArr2Obj,
      obj2OptionArr: obj2OptionArr,
      countArray: countArray,
      initRangeArray: initRangeArray,
      arrFind: arrFind,
      objFields: objFields,
      getTreeNodeIdPath: getTreeNodeIdPath,
      storageProxy: storageProxy,
      objectProxy: objectProxy,
      paginationParse: paginationParse,
      getPageData: getPageData
    };

    /**
     * 
     * @desc   全部替换
     * @param  {String} 原始字符串
     * @param  {String} 搜索字符串
     * @param  {String} 替换字符串
     * @return {String}
     */
    function replaceAll(s0, s1, s2) {
      return s0.replace(new RegExp(s1, "gm"), s2);
    }

    /**
     * 
     * @desc   现金额转大写
     * @param  {Number} n 
     * @return {String}
     */
    function digitUppercase(n) {
      var fraction = ['角', '分'];
      var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
      var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
      var head = n < 0 ? '欠' : '';
      n = Math.abs(n);
      var s = '';

      for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
      }

      s = s || '整';
      n = Math.floor(n);

      for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';

        for (var j = 0; j < unit[1].length && n > 0; j++) {
          p = digit[n % 10] + unit[1][j] + p;
          n = Math.floor(n / 10);
        }

        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
      }

      return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }

    /**
    * @desc 删除右边的空格
    * @param {String}
    * @return {String}
    */
    function rtrim(s) {
      return s.replace(/(\s*$)/g, '');
    }

    /**
    * @desc 删除左边的空格
    * @param {String}
    * @return {String}
    */
    function ltrim(s) {
      return s.replace(/(^\s*)/g, '');
    }

    /**
    * 
    * @desc 删除左右两端的空格
    * @param {String}
    * @return {String}
    */
    function trim(s) {
      return s.replace(/(^\s*)|(\s*$)/g, '');
    }

    /**   
     * @desc 字符串数据翻转
     * @param   {String}            
     * @return  {Object}     数组   
     */
    function reverse(s) {
      if (s) return s.split("").reverse().join('');
      return '';
    }

    /**
    * 
    * @desc 英文首字母大写
    * @param {String}
    * @return {String}
    */
    function ucfirst(str) {
      var str = str.toLowerCase();
      str = str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
      });
      return str;
    }

    /** 
     ** @desc 在字符串之前根据长度填充自定义字符
     ** @param  {Number} 数字
     ** @param {Number} 长度
     ** @param {String} 填充字符
     ** @return {String}  
     **/
    function beforeFillChar(str, len, _char) {
      if (str.length > len || !len) return str;
      return Array(len - str.length).fill(_char || ' ').join("") + str;
    }

    var str = {
      replaceAll: replaceAll,
      digitUppercase: digitUppercase,
      rtrim: rtrim,
      ltrim: ltrim,
      trim: trim,
      reverse: reverse,
      ucfirst: ucfirst,
      beforeFillChar: beforeFillChar
    };

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

      img.onload = img.onerror = function (event) {
        //如果进入加载且图片宽度为1(通过图片宽度值判断图片是否可以显示)
        return event && event.type === "load" ? img.width == 1 : false;
      };

      img.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="; //一像素图片
    }

    var support = {
      webP: webP,
      webP2: webP2
    };

    /**
    * @desc 根据keycode获得键名
    * @param  {Number} keycode 
    * @return {String}
    */
    function getName(keycode) {
      if (keycode) {
        var k = {
          //自行修改
          "8": "Backspace",
          "9": "TAB",
          "13": "回车",
          "16": "Shift",
          "17": "Ctrl",
          "18": "Alt",
          "20": "CAPSSlOCK",
          "27": "ESC",
          "32": "空格",
          "33": "PgUp",
          "34": "PgDn",
          "35": "End",
          "36": "Home",
          "37": "←",
          "38": "↑",
          "39": "→",
          "40": "↓",
          "44": "PrtSc",
          "45": "Insert",
          "46": "Delete",
          "91": "Win",
          "112": "F1",
          "113": "F2",
          "114": "F3",
          "115": "F4",
          "116": "F5",
          "117": "F6",
          "118": "F7",
          "119": "F8",
          "120": "F9",
          "121": "F10",
          "122": "F11",
          "123": "F12",
          "173": "静音",
          "174": "音量减",
          "175": "音量加",
          "186": ";",
          "187": "=",
          "188": ",",
          "189": "-",
          "190": ".",
          "191": "/",
          "219": "[",
          "220": "\\",
          "221": "]",
          "222": "'",
          "255": "Fn"
        }[keycode];
        return k ? k : String.fromCharCode(keycode);
      }
    }

    var keycode = {
      getName: getName
    };

    /**
     * 
     * @desc   文件转BlobURL
     * @param  {File} 文件 
     * @callback {String}  DataURL
     */
    function toBlobURL(f) {
      var url = URL.createObjectURL(f);
      setTimeout(function () {
        URL.revokeObjectURL(f);
      }, 10);
      return url;
    }

    /**
     * 
     * @desc   文件转DataURL
     * @param  {File} 文件
     * @param  {Function} 回调函数
     * @param  {String} 是否Base64
     * @callback {String}  DataURL
     */
    function toDataURL(file, c, isBase) {
      var reader = new FileReader();

      reader.onload = function () {
        if (typeof c == "function") c(isBase ? this.result.split(',')[1] : this.result);
      };

      reader.readAsDataURL(file);
    }

    /**  
     * 将以base64的图片url数据转换为Blob  
     * @param {String} urlData   用url方式表示的base64图片数据 
     * @param {Object} type 文件类型
     * @param {Boolean} isAB 是否返回ArrayBuffer
     * @return {Blob | ArrayBuffer} 
     */
    function base64UrlToBlob(urlData, type, isAB) {
      var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte  
      //处理异常,将ascii码小于0的转换为大于0  

      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);

      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }

      return isAB ? ab : new Blob([ab], type || {
        type: 'application/octet-stream'
      });
    }

    /**  
     * 将以base64的图片url数据转换为Blob  
     * @param {String} urlData   用url方式表示的base64图片数据 
     * @param {String} name 文件名
     * @param {String} type 文件类型 
     * @return {File} 
     */
    function base64UrlToFile(urlData, name, type) {
      var bytes = window.atob(urlData.split(',')[1]);
      type = type || i.img.split(";")[0].split(":")[1];
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);

      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }

      return new File([ab], name, {
        'type': type
      });
    }

    /**
     ** @desc 通过Url下载文件
     ** @param  {String}  URL
     ** @param {String} 文件名
     **/
    function downloadByUrl(l, n) {
      if (typeof l != "string" || l.length <= 0) return;
      var f = document.createElement("a");
      f.id = "download-" + Date.parse(new Date());
      f.href = l;
      f.download = n || "下载";
      f.style = "opacity: 0;height: 1px;width: 1px;overflow: hidden;position:fixed;top: -1;left: -1;z-index: -1;";
      document.body.appendChild(f);
      document.querySelector('#' + f.id).click();
      document.body.removeChild(document.getElementById(f.id));
    }

    /**
     * 计算文件大小
     * @param {Number} bytes 文件二进制大小
     * @param {Array}  sizes 文件二进制大小单位
     * @return {String}
     */
    function bytesToSize(bytes, sizes) {
      if (bytes === 0) return "0 B";
      var k = 1024;
      sizes = sizes || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i]; // 后面保留一位小数，如1.0GB                                                                                                                  //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }

    var file = {
      toBlobURL: toBlobURL,
      toDataURL: toDataURL,
      base64UrlToBlob: base64UrlToBlob,
      downloadByUrl: downloadByUrl,
      bytesToSize: bytesToSize,
      base64UrlToFile: base64UrlToFile
    };

    /**
     * @desc   字符串转日期时间
     * @param  {String}  
     * @param  {String} format 日期格式
     * @return {Boolean}
     */
    function string2date(s, f) {
      return new Date(Date.parse(s.replace(f || /-/g, "/")));
    }

    /**
     * @desc   格式化${startTime}距现在的已过时间
     * @param  {Date} startTime 
     * @return {String}
     */
    function formatPassTime(startTime) {
      var currentTime = Date.parse(new Date()),
          time = currentTime - startTime,
          day = parseInt(time / (1000 * 60 * 60 * 24)),
          hour = parseInt(time / (1000 * 60 * 60)),
          min = parseInt(time / (1000 * 60)),
          month = parseInt(day / 30),
          year = parseInt(month / 12);
      if (year) return year + "年前";
      if (month) return month + "个月前";
      if (day) return day + "天前";
      if (hour) return hour + "小时前";
      if (min) return min + "分钟前";else return '刚刚';
    }

    /**
     * 
     * @desc   格式化现在距${endTime}的剩余时间
     * @param  {Date} endTime  
     * @return {String}
     */
    function formatRemainTime(endTime) {
      var startDate = new Date(); //开始时间

      var endDate = new Date(endTime); //结束时间

      var t = endDate.getTime() - startDate.getTime(); //时间差

      var d = 0,
          h = 0,
          m = 0,
          s = 0;

      if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
      }

      return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
    }

    /**
     * @desc   判断是否为同一天
     * @param  {Date} date1 
     * @param  {Date} date2 可选／默认值：当天
     * @return {Boolean}
     */
    function isSameDay(date1, date2) {
      if (!date2) {
        date2 = new Date();
      }

      var date1_year = date1.getFullYear(),
          date1_month = date1.getMonth() + 1,
          date1_date = date1.getDate();
      var date2_year = date2.getFullYear(),
          date2_month = date2.getMonth() + 1,
          date2_date = date2.getDate();
      return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
    }

    /**
     * 返回一个时间戳,
     * @param {Boolean} n 是否以毫秒为单位,精确到千分之一毫秒
     * @return {Number}
    */
    function getTimeStamp(n) {
      return n ? performance.now() : +new Date();
    }

    /**
     * @desc   通过时间戳获取中国日期+时间
     * @param  {Number} timestamp 时间戳
     * @return {Boolean}
     */
    function toCSTString(timestamp) {
      return new Date((timestamp || +new Date()) + 8 * 3600 * 1000).toISOString();
    }

    /**
     * @desc   通过时间戳获取中国日期
     * @param  {Number} timestamp 时间戳
     * @return {Boolean}
     */

    function toCSTDateString(timestamp) {
      return toCSTString().split('T')[0];
    }

    var date = {
      string2date: string2date,
      formatPassTime: formatPassTime,
      formatRemainTime: formatRemainTime,
      isSameDay: isSameDay,
      getTimeStamp: getTimeStamp,
      toCSTString: toCSTString,
      toCSTDateString: toCSTDateString
    };

    var validate = {
      messages: {
        required: "这是必填字段",
        remote: "请修正此字段",
        email: "请输入有效的电子邮件地址",
        url: "请输入有效的网址",
        date: "请输入有效的日期",
        dateISO: "请输入有效的日期 (YYYY-MM-DD)",
        number: "请输入有效的数字",
        digits: "只能输入数字",
        creditcard: "请输入有效的信用卡号码",
        equalTo: "你的输入不相同",
        extension: "请输入有效的后缀",
        minlength: "输入字数过短",
        maxlength: "输入字数过长",
        mphone: "请输入正确的手机号格式",
        tphone: "请输入正确的电话格式",
        idCard: "请输入正确的身份证格式",
        postal: "请输入正确的邮编格式"
      },
      required: function required(value, param) {
        if (this.isarr(value)) {
          if (value.length > 0) {
            var _iterator = _createForOfIteratorHelper(value),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var itm = _step.value;

                if (!itm) {
                  return false;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return true;
          }

          return false;
        }

        return value != undefined ? value.toString().length > 0 : false;
      },
      email: function email(value) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      url: function url(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      date: function date(value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
      },
      dateISO: function dateISO(value) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      number: function number(value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      digits: function digits(value) {
        return /^\d+$/.test(value);
      },
      isarr: function isarr(o) {
        return Object.prototype.toString.call(o) == '[object Array]';
      },
      minlength: function minlength(value, param) {
        return value.length >= param;
      },
      maxlength: function maxlength(value, param) {
        return value.length <= param;
      },
      rangelength: function rangelength(value, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value);
        return length >= param[0] && length <= param[1];
      },
      min: function min(value, param) {
        return value >= param;
      },
      max: function max(value, param) {
        return value <= param;
      },
      range: function range(value, param) {
        return value >= param[0] && value <= param[1];
      },
      equalTo: function equalTo(value, param) {
        return value === param;
      },
      mphone: function mphone(value) {
        return /^1[3|4|5|8][0-9]\d{4,8}$/.test(value);
      },
      tphone: function tphone(value) {
        return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(value);
      },
      idCard: function idCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
      },
      postal: function postal(value) {
        return /^[a-zA-Z0-9 ]{3,12}$/g.test(value);
      }
    };

    /**
     * 
     * @desc   url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object} 
     */
    function getQueryObject(url) {
      url = url ? url : window.location.search;
      var search = url[0] === '?' ? url : url.substring(url.lastIndexOf('?'));
      var q = {};
      search.replace(/([^?&=]+)=([^&]+)/g, function (_, k, v) {
        return q[k] = decodeURIComponent(v);
      });
      return q;
    }

    /**
     * 
     * @desc   对象序列化
     * @param  {Object} obj 
     * @return {String}
     */
    function stringfyQueryString(obj) {
      if (!obj) return '';
      var pairs = [];

      for (var key in obj) {
        var value = obj[key];

        if (value instanceof Array) {
          for (var i = 0; i < value.length; ++i) {
            pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
          }

          continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }

      return pairs.join('&');
    }

    /**
     * 
     * @desc   通过name获取url参数
     * @param  {String} url  default: window.location.href
     * @return {Object} 
     */
    function getQueryString(name) {
      //获取url参数值方法2
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);

      if (r != null) {
        return decodeURI(r[2]);
      }

      return null;
    }

    var url = {
      getQueryObject: getQueryObject,
      stringfyQueryString: stringfyQueryString,
      getQueryString: getQueryString
    };

    /**
     * 
     * @desc 随机 True/ False
     * @return {Boolean} 
     */
    function randomBoolean() {
      return Math.random() >= 0.5;
    }
    /**
     * 
     * @desc 随机生成颜色
     * @return {String} 
     */


    function randomColor() {
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    }
    /**
     * 
     * @desc 生成指定范围[min, max]的随机数
     * @param  {Number} min 
     * @param  {Number} max 
     * @return {Number} 
     */


    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * 
     * @desc 生成随机字符串([A~Z],[a~z],[0~9])
     * @param  {Number} min 
     * @param  {Number} max 
     * @return {Number} 
     */


    function randomChars(len) {
      var s = "",
          t;

      var ranNum = function ranNum(l) {
        return Math.floor(Math.random() * (l[1] - l[0])) + l[0];
      };

      for (; len > 0; len--) {
        t = ranNum([[65, 91], [97, 123], [0, 10]][ranNum([0, 3])]);
        s = s + (t > 10 ? String.fromCharCode(t) : t.toString());
      }

      return s;
    }
    /**
     * @desc 打乱数组内部元素顺序
     * @param {Array} arr 
     */

    function randomSort(arr) {
      return arr.sort(function () {
        return Math.random() - 0.5;
      });
    }
    /**
     * @desc 生成UUID
     * @return {String}
     */


    function UUID() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
    /**
     * @desc 生成长度为11的随机字母数字字符串
     * @return {String}
     */


    function id11() {
      return Math.random().toString(36).substring(2);
    }

    var random = {
      randomColor: randomColor,
      randomNum: randomNum,
      randomChars: randomChars,
      randomSort: randomSort,
      UUID: UUID,
      id11: id11,
      randomBoolean: randomBoolean
    };

    /**
     * @desc   函数节流。
     * 适用于限制`resize`和`scroll`等函数的调用频率
     *
     * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
     * @param  {Boolean}   noTrailing     可选，默认为false。
     *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
     *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
     *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
     * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
     *                                    执行去节流功能时，调用`callback`。
     * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。
     *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
     *
     * @return {Function}  新的节流函数
     */
    function throttle(delay, noTrailing, callback, debounceMode) {
      // After wrapper has stopped being called, this timeout ensures that
      // `callback` is executed at the proper times in `throttle` and `end`
      // debounce modes.
      var timeoutID; // Keep track of the last time `callback` was executed.

      var lastExec = 0; // `noTrailing` defaults to falsy.

      if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
      } // The `wrapper` function encapsulates all of the throttling / debouncing
      // functionality and when executed will limit the rate at which `callback`
      // is executed.


      function wrapper() {
        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments; // Execute `callback` and update the `lastExec` timestamp.

        function exec() {
          lastExec = Number(new Date());
          callback.apply(self, args);
        } // If `debounceMode` is true (at begin) this is used to clear the flag
        // to allow future `callback` executions.


        function clear() {
          timeoutID = undefined;
        }

        if (debounceMode && !timeoutID) {
          // Since `wrapper` is being called for the first time and
          // `debounceMode` is true (at begin), execute `callback`.
          exec();
        } // Clear any existing timeout.


        if (timeoutID) {
          clearTimeout(timeoutID);
        }

        if (debounceMode === undefined && elapsed > delay) {
          // In throttle mode, if `delay` time has been exceeded, execute
          // `callback`.
          exec();
        } else if (noTrailing !== true) {
          // In trailing throttle mode, since `delay` time has not been
          // exceeded, schedule `callback` to execute `delay` ms after most
          // recent execution.
          //
          // If `debounceMode` is true (at begin), schedule `clear` to execute
          // after `delay` ms.
          //
          // If `debounceMode` is false (at end), schedule `callback` to
          // execute after `delay` ms.
          timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
      } // Return the wrapper function.


      return wrapper;
    }

    /**
     * @desc 函数防抖 
     * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
     * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
     * @example 适用场景：如在线编辑的自动存储防抖。
     * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
     * @param  {Boolean}  atBegin       可选，默认为false。
     *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
                                        如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
     * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
     *                                  执行去抖动功能时，，调用`callback`。
     *
     * @return {Function} 新的防抖函数。
     */

    function debounce(delay, atBegin, callback) {
      return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
    }

    var event = {
      throttle: throttle,
      debounce: debounce
    };

    /**
     ** @desc 加法函数，用来得到精确的加法结果
     ** @desc 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     ** @param  {Number}
     ** @param {Number} accAdd(arg1,arg2)
     ** @return {Number} arg1加上arg2的精确结果
     **/

    function accAdd(arg1, arg2) {
      var r1, r2, m, c;

      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }

      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }

      c = Math.abs(r1 - r2);
      m = Math.pow(10, Math.max(r1, r2));

      if (c > 0) {
        var cm = Math.pow(10, c);

        if (r1 > r2) {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
          arg1 = Number(arg1.toString().replace(".", "")) * cm;
          arg2 = Number(arg2.toString().replace(".", ""));
        }
      } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
      }

      return (arg1 + arg2) / m;
    }
    /**
     ** @desc 减法函数，用来得到精确的减法结果
     ** @desc 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
     ** @param  {Number}
     ** @param {Number} accSub(arg1,arg2)
     ** @return {Number} arg1加上arg2的精确结果
     **/


    function accSub(arg1, arg2) {
      var r1, r2, m, n;

      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }

      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }

      m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度

      n = r1 >= r2 ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
    /**
     ** @desc 乘法函数，用来得到精确的乘法结果
     ** @desc 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     ** @param  {Number}
     ** @param {Number} accMul(arg1,arg2)
     ** @return {Number} arg1乘以 arg2的精确结果
     **/


    function accMul(arg1, arg2) {
      var m = 0,
          s1 = arg1.toString(),
          s2 = arg2.toString();

      try {
        m += s1.split(".")[1].length;
      } catch (e) {}

      try {
        m += s2.split(".")[1].length;
      } catch (e) {}

      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
    /**
     ** @desc 除法函数，用来得到精确的除法结果
     ** @desc 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
     ** @param  {Number}
     ** @param {Number} accDiv(arg1,arg2)
     ** @return {Number} arg1除以arg2的精确结果
     **/


    function accDiv(arg1, arg2) {
      var t1 = 0,
          t2 = 0,
          r1,
          r2;

      try {
        t1 = arg1.toString().split(".")[1].length;
      } catch (e) {}

      try {
        t2 = arg2.toString().split(".")[1].length;
      } catch (e) {}

      if (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return r1 / r2 * Math.pow(10, t2 - t1);
      }
    }
    /**
     ** @desc 数字转字符串并且填充0
     ** @param  {Number} 数字
     ** @param {Number} 长度
     ** @return {String}
     **/


    function fillZero(num, len) {
      return beforeFillChar(num + "", len, 0);
    }

    var num = {
      accAdd: accAdd,
      accSub: accSub,
      accMul: accMul,
      accDiv: accDiv,
      fillZero: fillZero
    };

    /**
     * 
     * @desc   写入剪切板 老版
     * @param  {String}  
     */
    // function clipboard(data){
    //     data=data.toString();
    //     let f = document.createElement("form");
    //     f.id = "copy-" + Date.parse(new Date());
    //     f.onsubmit = function () { return false };
    //     f.style = "opacity: 0;height: 1px;width: 1px;overflow: hidden;position:fixed;top: -1;left: -1;z-index: -1;"
    //     f.innerHTML = `<button onclick='story.select();document.execCommand("Copy");'></button>
    //         <textarea name="story">${data}</textarea>`;
    //     document.body.appendChild(f);
    //     document.querySelector('#' + f.id + '>button').click();
    //     document.body.removeChild(document.getElementById(f.id));
    // }

    /**
     * 
     * @desc   写入剪切板
     * @param  {String}  
     */
    function clipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    }

    /**
     * 
     * @desc 根据name读取cookie
     * @param  {String} name 
     * @return {String}
     */
    function getCookie(name) {
      var arr = document.cookie.replace(/\s/g, "").split(';');

      for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');

        if (tempArr[0] == name) {
          return decodeURIComponent(tempArr[1]);
        }
      }

      return '';
    }

    /**
     * 
     * @desc  设置Cookie
     * @param {String} name 
     * @param {String} value 
     * @param {Number} days 
     */
    function setCookie(name, value, days) {
      var date = new Date();
      date.setDate(date.getDate() + days);
      document.cookie = name + '=' + value + ';expires=' + date;
    }

    /**
     * 
     * @desc 根据name删除cookie
     * @param  {String} name 
     */

    function removeCookie(name) {
      // 设置已过期，系统会立刻删除cookie
      setCookie(name, '1', -1);
    }

    var cookie = {
      getCookie: getCookie,
      removeCookie: removeCookie,
      setCookie: setCookie
    };

    /**
     * 
     * @desc 判断元素是否有某个class
     * @param {HTMLElement} ele 
     * @param {String} cls 
     * @return {Boolean}
     */
    function hasClass(ele, cls) {
      return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
    }

    /**
     * 
     * @desc   为元素添加class
     * @param  {HTMLElement} ele 
     * @param  {String} cls 
     */

    function addClass(ele, cls) {
      if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
      }
    }

    /**
     * 
     * @desc 获取滚动条距顶部的距离
     */
    function getScrollTop() {
      return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    }

    /**
     * 
     * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
     * @param {HTMLElement} ele 
     * @returns { {left: number, top: number} }
     */
    function offset(ele) {
      var pos = {
        left: 0,
        top: 0
      };

      while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
      }
      return pos;
    }

    /**
     * 
     * @desc 为元素移除class
     * @param {HTMLElement} ele 
     * @param {String} cls 
     */

    function removeClass(ele, cls) {
      if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
      }
    }

    /**
     * 
     * @desc 设置滚动条距顶部的距离
     */
    function setScrollTop(value) {
      window.scrollTo(0, value);
      return value;
    }

    /**
     * 
     * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
     * @param {Number} to 
     * @param {Number} duration 
     */


    function scrollTo(to, duration) {
      if (duration < 0) {
        setScrollTop(to);
        return;
      }

      var diff = to - getScrollTop();
      if (diff === 0) return;
      var step = diff / duration * 10;
      requestAnimationFrame(function () {
        if (Math.abs(step) > Math.abs(diff)) {
          setScrollTop(getScrollTop() + diff);
          return;
        }

        setScrollTop(getScrollTop() + step);

        if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
          return;
        }

        scrollTo(to, duration - 16);
      });
    }

    /**
     * 
     * @desc H5软键盘缩回、弹起回调
     * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
     * @param {Function} downCb 当软键盘弹起后，缩回的回调
     * @param {Function} upCb 当软键盘弹起的回调
     */
    function windowResize(downCb, upCb) {
      var clientHeight = window.innerHeight;
      downCb = typeof downCb === 'function' ? downCb : function () {};
      upCb = typeof upCb === 'function' ? upCb : function () {};
      window.addEventListener('resize', function () {
        var height = window.innerHeight;

        if (height === clientHeight) {
          downCb();
        }

        if (height < clientHeight) {
          upCb();
        }
      });
    }

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
          });
        } else {
          dom.appendChild(v);
        }
      });
    }

    /**
     * 
     * @desc 进入全屏
     * @param {Element}  
     */
    function fullScreen(elemet) {
      elemet = elemet == undefined ? document.body : elemet;

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
    function exitfullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }

    /**
     * 
     * @desc  全屏自适应缩放 new ScaleResize();
     * @param {HTMLElement} el 节点
     * @param {Object} config 配置
     * @return ScaleResize
     */
    var ScaleResize = /*#__PURE__*/function () {
      function ScaleResize(el, config, bind) {
        _classCallCheck(this, ScaleResize);

        this.el = el || document.body;
        this.config = _objectSpread2({
          width: 1920,
          //大屏默认宽度
          height: 1080,
          //大屏默认高度
          display: "Full"
        }, config);

        if (bind != false) {
          this._event = this.resize.bind(this);

          this._event();

          window.addEventListener("resize", this._event);
        }
      }

      _createClass(ScaleResize, [{
        key: "setStyle",
        value: function setStyle(style, el) {
          for (var k in style) {
            (el ? el.style : this.el.style)[k] = style[k];
          }
        } // 等比缩放高度铺满

      }, {
        key: "resizeCenter",
        value: function resizeCenter() {
          var ratio = window.innerHeight / this.config.height;
          this.setStyle({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: 100 * (this.config.width / window.innerWidth * ratio) + "%" + " 100%",
            backgroundPosition: (window.innerWidth - this.el.clientWidth * ratio) / 2 + "px top",
            marginLeft: (window.innerWidth - this.el.clientWidth * ratio) / 2
          });
        } // 全屏铺满

      }, {
        key: "resizeFull",
        value: function resizeFull() {
          var ratioX = window.innerWidth / this.config.width;
          var ratioY = window.innerHeight / this.config.height;
          this.setStyle({
            transform: "scale(" + ratioX + ", " + ratioY + ")",
            transformOrigin: "left top",
            backgroundSize: "100% 100%"
          });
        } // 等比缩放高度铺满并且可以左右移动

      }, {
        key: "resizeHeight",
        value: function resizeHeight() {
          var ratio = window.innerHeight / this.config.width;
          this.setStyle({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: 100 * (this.config.width / window.innerWidth * ratio) + "%" + " 100%",
            backgroundPosition: (window.innerWidth - $("body").width() * ratio) / 2 + "px top" // marginLeft: (window.innerWidth - $('body').width() * ratio) / 2

          });
          this.setStyle({
            overflowX: "scroll"
          }, document.html);
        } // 不缩放

      }, {
        key: "resizeNone",
        value: function resizeNone() {
          this.setStyle({
            overflow: "hidden",
            position: "relative"
          });
        } // 等比缩放宽度铺满

      }, {
        key: "resizeWidth",
        value: function resizeWidth() {
          var ratio = window.innerWidth / (this.config.width || document.body.clientWidth);
          this.setStyle({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: "100%"
          });
        } // 综合执行resize

      }, {
        key: "resize",
        value: function resize() {
          this.setStyle({
            width: this.config.width + "px",
            height: this.config.height + "px"
          });
          var fn = this["resize" + this.config.display];
          if (fn) fn.bind(this)();
        }
      }]);

      return ScaleResize;
    }();

    var dom = {
      addClass: addClass,
      getScrollTop: getScrollTop,
      hasClass: hasClass,
      offset: offset,
      removeClass: removeClass,
      scrollTo: scrollTo,
      setScrollTop: setScrollTop,
      windowResize: windowResize,
      append: append,
      fullScreen: fullScreen,
      exitFullScreen: exitfullScreen,
      ScaleResize: ScaleResize
    };

    var _$tif$001$301$323$;

    var mime = (_$tif$001$301$323$ = {
      "*": "application/octet-stream",
      //（ 二进制流，不知道下载文件类型）
      "tif": "image/tiff",
      "001": "application/x-001",
      "301": "application/x-301",
      "323": "text/h323",
      "906": "application/x-906",
      "907": "drawing/907",
      "a11": "application/x-a11",
      "acp": "audio/x-mei-aac",
      "ai": "application/postscript",
      "aif": "audio/aiff",
      "aifc": "audio/aiff",
      "aiff": "audio/aiff",
      "anv": "application/x-anv",
      "asa": "text/asa",
      "asf": "video/x-ms-asf",
      "asp": "text/asp",
      "asx": "video/x-ms-asf",
      "au": "audio/basic",
      "avi": "video/avi",
      "awf": "application/vnd.adobe.workflow",
      "biz": "text/xml",
      "bmp": "application/x-bmp",
      "bot": "application/x-bot",
      "c4t": "application/x-c4t",
      "c90": "application/x-c90",
      "cal": "application/x-cals",
      "cat": "application/vnd.ms-pki.seccat",
      "cdf": "application/x-netcdf",
      "cdr": "application/x-cdr",
      "cel": "application/x-cel",
      "cer": "application/x-x509-ca-cert",
      "cg4": "application/x-g4",
      "cgm": "application/x-cgm",
      "cit": "application/x-cit",
      "class": "java/*",
      "cml": "text/xml",
      "cmp": "application/x-cmp",
      "cmx": "application/x-cmx",
      "cot": "application/x-cot",
      "crl": "application/pkix-crl",
      "crt": "application/x-x509-ca-cert",
      "csi": "application/x-csi",
      "css": "text/css",
      "cut": "application/x-cut",
      "dbf": "application/x-dbf",
      "dbm": "application/x-dbm",
      "dbx": "application/x-dbx",
      "dcd": "text/xml",
      "dcx": "application/x-dcx",
      "der": "application/x-x509-ca-cert",
      "dgn": "application/x-dgn",
      "dib": "application/x-dib",
      "dll": "application/x-msdownload",
      "doc": "application/msword",
      "dot": "application/msword",
      "drw": "application/x-drw",
      "dtd": "text/xml",
      "dwf": "Model/vnd.dwf"
    }, _defineProperty(_$tif$001$301$323$, "dwf", "application/x-dwf"), _defineProperty(_$tif$001$301$323$, "dwg", "application/x-dwg"), _defineProperty(_$tif$001$301$323$, "dxb", "application/x-dxb"), _defineProperty(_$tif$001$301$323$, "dxf", "application/x-dxf"), _defineProperty(_$tif$001$301$323$, "edn", "application/vnd.adobe.edn"), _defineProperty(_$tif$001$301$323$, "emf", "application/x-emf"), _defineProperty(_$tif$001$301$323$, "eml", "message/rfc822"), _defineProperty(_$tif$001$301$323$, "ent", "text/xml"), _defineProperty(_$tif$001$301$323$, "epi", "application/x-epi"), _defineProperty(_$tif$001$301$323$, "eps", "application/x-ps"), _defineProperty(_$tif$001$301$323$, "eps", "application/postscript"), _defineProperty(_$tif$001$301$323$, "etd", "application/x-ebx"), _defineProperty(_$tif$001$301$323$, "exe", "application/x-msdownload"), _defineProperty(_$tif$001$301$323$, "fax", "image/fax"), _defineProperty(_$tif$001$301$323$, "fdf", "application/vnd.fdf"), _defineProperty(_$tif$001$301$323$, "fif", "application/fractals"), _defineProperty(_$tif$001$301$323$, "fo", "text/xml"), _defineProperty(_$tif$001$301$323$, "frm", "application/x-frm"), _defineProperty(_$tif$001$301$323$, "g4", "application/x-g4"), _defineProperty(_$tif$001$301$323$, "gbr", "application/x-gbr"), _defineProperty(_$tif$001$301$323$, "", "application/x-"), _defineProperty(_$tif$001$301$323$, "gif", "image/gif"), _defineProperty(_$tif$001$301$323$, "gl2", "application/x-gl2"), _defineProperty(_$tif$001$301$323$, "gp4", "application/x-gp4"), _defineProperty(_$tif$001$301$323$, "hgl", "application/x-hgl"), _defineProperty(_$tif$001$301$323$, "hmr", "application/x-hmr"), _defineProperty(_$tif$001$301$323$, "hpg", "application/x-hpgl"), _defineProperty(_$tif$001$301$323$, "hpl", "application/x-hpl"), _defineProperty(_$tif$001$301$323$, "hqx", "application/mac-binhex40"), _defineProperty(_$tif$001$301$323$, "hrf", "application/x-hrf"), _defineProperty(_$tif$001$301$323$, "hta", "application/hta"), _defineProperty(_$tif$001$301$323$, "htc", "text/x-component"), _defineProperty(_$tif$001$301$323$, "htm", "text/html"), _defineProperty(_$tif$001$301$323$, "html", "text/html"), _defineProperty(_$tif$001$301$323$, "htt", "text/webviewhtml"), _defineProperty(_$tif$001$301$323$, "htx", "text/html"), _defineProperty(_$tif$001$301$323$, "icb", "application/x-icb"), _defineProperty(_$tif$001$301$323$, "ico", "image/x-icon"), _defineProperty(_$tif$001$301$323$, "ico", "application/x-ico"), _defineProperty(_$tif$001$301$323$, "iff", "application/x-iff"), _defineProperty(_$tif$001$301$323$, "ig4", "application/x-g4"), _defineProperty(_$tif$001$301$323$, "igs", "application/x-igs"), _defineProperty(_$tif$001$301$323$, "iii", "application/x-iphone"), _defineProperty(_$tif$001$301$323$, "img", "application/x-img"), _defineProperty(_$tif$001$301$323$, "ins", "application/x-internet-signup"), _defineProperty(_$tif$001$301$323$, "isp", "application/x-internet-signup"), _defineProperty(_$tif$001$301$323$, "IVF", "video/x-ivf"), _defineProperty(_$tif$001$301$323$, "java", "java/*"), _defineProperty(_$tif$001$301$323$, "jfif", "image/jpeg"), _defineProperty(_$tif$001$301$323$, "jpe", "image/jpeg"), _defineProperty(_$tif$001$301$323$, "jpe", "application/x-jpe"), _defineProperty(_$tif$001$301$323$, "jpeg", "image/jpeg"), _defineProperty(_$tif$001$301$323$, "jpg", "image/jpeg"), _defineProperty(_$tif$001$301$323$, "jpg", "application/x-jpg"), _defineProperty(_$tif$001$301$323$, "js", "application/x-javascript"), _defineProperty(_$tif$001$301$323$, "jsp", "text/html"), _defineProperty(_$tif$001$301$323$, "la1", "audio/x-liquid-file"), _defineProperty(_$tif$001$301$323$, "lar", "application/x-laplayer-reg"), _defineProperty(_$tif$001$301$323$, "latex", "application/x-latex"), _defineProperty(_$tif$001$301$323$, "lavs", "audio/x-liquid-secure"), _defineProperty(_$tif$001$301$323$, "lbm", "application/x-lbm"), _defineProperty(_$tif$001$301$323$, "lmsff", "audio/x-la-lms"), _defineProperty(_$tif$001$301$323$, "ls", "application/x-javascript"), _defineProperty(_$tif$001$301$323$, "ltr", "application/x-ltr"), _defineProperty(_$tif$001$301$323$, "m1v", "video/x-mpeg"), _defineProperty(_$tif$001$301$323$, "m2v", "video/x-mpeg"), _defineProperty(_$tif$001$301$323$, "m3u", "audio/mpegurl"), _defineProperty(_$tif$001$301$323$, "m4e", "video/mpeg4"), _defineProperty(_$tif$001$301$323$, "mac", "application/x-mac"), _defineProperty(_$tif$001$301$323$, "man", "application/x-troff-man"), _defineProperty(_$tif$001$301$323$, "math", "text/xml"), _defineProperty(_$tif$001$301$323$, "mdb", "application/msaccess"), _defineProperty(_$tif$001$301$323$, "mdb", "application/x-mdb"), _defineProperty(_$tif$001$301$323$, "mfp", "application/x-shockwave-flash"), _defineProperty(_$tif$001$301$323$, "mht", "message/rfc822"), _defineProperty(_$tif$001$301$323$, "mhtml", "message/rfc822"), _defineProperty(_$tif$001$301$323$, "mi", "application/x-mi"), _defineProperty(_$tif$001$301$323$, "mid", "audio/mid"), _defineProperty(_$tif$001$301$323$, "midi", "audio/mid"), _defineProperty(_$tif$001$301$323$, "mil", "application/x-mil"), _defineProperty(_$tif$001$301$323$, "mml", "text/xml"), _defineProperty(_$tif$001$301$323$, "mnd", "audio/x-musicnet-download"), _defineProperty(_$tif$001$301$323$, "mns", "audio/x-musicnet-stream"), _defineProperty(_$tif$001$301$323$, "mocha", "application/x-javascript"), _defineProperty(_$tif$001$301$323$, "movie", "video/x-sgi-movie"), _defineProperty(_$tif$001$301$323$, "mp1", "audio/mp1"), _defineProperty(_$tif$001$301$323$, "mp2", "audio/mp2"), _defineProperty(_$tif$001$301$323$, "mp2v", "video/mpeg"), _defineProperty(_$tif$001$301$323$, "mp3", "audio/mp3"), _defineProperty(_$tif$001$301$323$, "mp4", "video/mpeg4"), _defineProperty(_$tif$001$301$323$, "mpa", "video/x-mpg"), _defineProperty(_$tif$001$301$323$, "mpd", "application/vnd.ms-project"), _defineProperty(_$tif$001$301$323$, "mpe", "video/x-mpeg"), _defineProperty(_$tif$001$301$323$, "mpeg", "video/mpg"), _defineProperty(_$tif$001$301$323$, "mpg", "video/mpg"), _defineProperty(_$tif$001$301$323$, "mpga", "audio/rn-mpeg"), _defineProperty(_$tif$001$301$323$, "mpp", "application/vnd.ms-project"), _defineProperty(_$tif$001$301$323$, "mps", "video/x-mpeg"), _defineProperty(_$tif$001$301$323$, "mpt", "application/vnd.ms-project"), _defineProperty(_$tif$001$301$323$, "mpv", "video/mpg"), _defineProperty(_$tif$001$301$323$, "mpv2", "video/mpeg"), _defineProperty(_$tif$001$301$323$, "mpw", "application/vnd.ms-project"), _defineProperty(_$tif$001$301$323$, "mpx", "application/vnd.ms-project"), _defineProperty(_$tif$001$301$323$, "mtx", "text/xml"), _defineProperty(_$tif$001$301$323$, "mxp", "application/x-mmxp"), _defineProperty(_$tif$001$301$323$, "net", "image/pnetvue"), _defineProperty(_$tif$001$301$323$, "nrf", "application/x-nrf"), _defineProperty(_$tif$001$301$323$, "nws", "message/rfc822"), _defineProperty(_$tif$001$301$323$, "odc", "text/x-ms-odc"), _defineProperty(_$tif$001$301$323$, "out", "application/x-out"), _defineProperty(_$tif$001$301$323$, "p10", "application/pkcs10"), _defineProperty(_$tif$001$301$323$, "p12", "application/x-pkcs12"), _defineProperty(_$tif$001$301$323$, "p7b", "application/x-pkcs7-certificates"), _defineProperty(_$tif$001$301$323$, "p7c", "application/pkcs7-mime"), _defineProperty(_$tif$001$301$323$, "p7m", "application/pkcs7-mime"), _defineProperty(_$tif$001$301$323$, "p7r", "application/x-pkcs7-certreqresp"), _defineProperty(_$tif$001$301$323$, "p7s", "application/pkcs7-signature"), _defineProperty(_$tif$001$301$323$, "pc5", "application/x-pc5"), _defineProperty(_$tif$001$301$323$, "pci", "application/x-pci"), _defineProperty(_$tif$001$301$323$, "pcl", "application/x-pcl"), _defineProperty(_$tif$001$301$323$, "pcx", "application/x-pcx"), _defineProperty(_$tif$001$301$323$, "pdf", "application/pdf"), _defineProperty(_$tif$001$301$323$, "pdf", "application/pdf"), _defineProperty(_$tif$001$301$323$, "pdx", "application/vnd.adobe.pdx"), _defineProperty(_$tif$001$301$323$, "pfx", "application/x-pkcs12"), _defineProperty(_$tif$001$301$323$, "pgl", "application/x-pgl"), _defineProperty(_$tif$001$301$323$, "pic", "application/x-pic"), _defineProperty(_$tif$001$301$323$, "pko", "application/vnd.ms-pki.pko"), _defineProperty(_$tif$001$301$323$, "pl", "application/x-perl"), _defineProperty(_$tif$001$301$323$, "plg", "text/html"), _defineProperty(_$tif$001$301$323$, "pls", "audio/scpls"), _defineProperty(_$tif$001$301$323$, "plt", "application/x-plt"), _defineProperty(_$tif$001$301$323$, "png", "image/png"), _defineProperty(_$tif$001$301$323$, "png", "application/x-png"), _defineProperty(_$tif$001$301$323$, "pot", "application/vnd.ms-powerpoint"), _defineProperty(_$tif$001$301$323$, "ppa", "application/vnd.ms-powerpoint"), _defineProperty(_$tif$001$301$323$, "ppm", "application/x-ppm"), _defineProperty(_$tif$001$301$323$, "pps", "application/vnd.ms-powerpoint"), _defineProperty(_$tif$001$301$323$, "ppt", "application/vnd.ms-powerpoint"), _defineProperty(_$tif$001$301$323$, "ppt", "application/x-ppt"), _defineProperty(_$tif$001$301$323$, "pr", "application/x-pr"), _defineProperty(_$tif$001$301$323$, "prf", "application/pics-rules"), _defineProperty(_$tif$001$301$323$, "prn", "application/x-prn"), _defineProperty(_$tif$001$301$323$, "prt", "application/x-prt"), _defineProperty(_$tif$001$301$323$, "ps", "application/x-ps"), _defineProperty(_$tif$001$301$323$, "ps", "application/postscript"), _defineProperty(_$tif$001$301$323$, "ptn", "application/x-ptn"), _defineProperty(_$tif$001$301$323$, "pwz", "application/vnd.ms-powerpoint"), _defineProperty(_$tif$001$301$323$, "r3t", "text/vnd.rn-realtext3d"), _defineProperty(_$tif$001$301$323$, "ra", "audio/vnd.rn-realaudio"), _defineProperty(_$tif$001$301$323$, "ram", "audio/x-pn-realaudio"), _defineProperty(_$tif$001$301$323$, "ras", "application/x-ras"), _defineProperty(_$tif$001$301$323$, "rat", "application/rat-file"), _defineProperty(_$tif$001$301$323$, "rdf", "text/xml"), _defineProperty(_$tif$001$301$323$, "rec", "application/vnd.rn-recording"), _defineProperty(_$tif$001$301$323$, "red", "application/x-red"), _defineProperty(_$tif$001$301$323$, "rgb", "application/x-rgb"), _defineProperty(_$tif$001$301$323$, "rjs", "application/vnd.rn-realsystem-rjs"), _defineProperty(_$tif$001$301$323$, "rjt", "application/vnd.rn-realsystem-rjt"), _defineProperty(_$tif$001$301$323$, "rlc", "application/x-rlc"), _defineProperty(_$tif$001$301$323$, "rle", "application/x-rle"), _defineProperty(_$tif$001$301$323$, "rm", "application/vnd.rn-realmedia"), _defineProperty(_$tif$001$301$323$, "rmf", "application/vnd.adobe.rmf"), _defineProperty(_$tif$001$301$323$, "rmi", "audio/mid"), _defineProperty(_$tif$001$301$323$, "rmj", "application/vnd.rn-realsystem-rmj"), _defineProperty(_$tif$001$301$323$, "rmm", "audio/x-pn-realaudio"), _defineProperty(_$tif$001$301$323$, "rmp", "application/vnd.rn-rn_music_package"), _defineProperty(_$tif$001$301$323$, "rms", "application/vnd.rn-realmedia-secure"), _defineProperty(_$tif$001$301$323$, "rmvb", "application/vnd.rn-realmedia-vbr"), _defineProperty(_$tif$001$301$323$, "rmx", "application/vnd.rn-realsystem-rmx"), _defineProperty(_$tif$001$301$323$, "rnx", "application/vnd.rn-realplayer"), _defineProperty(_$tif$001$301$323$, "rp", "image/vnd.rn-realpix"), _defineProperty(_$tif$001$301$323$, "rpm", "audio/x-pn-realaudio-plugin"), _defineProperty(_$tif$001$301$323$, "rsml", "application/vnd.rn-rsml"), _defineProperty(_$tif$001$301$323$, "rt", "text/vnd.rn-realtext"), _defineProperty(_$tif$001$301$323$, "rtf", "application/msword"), _defineProperty(_$tif$001$301$323$, "rtf", "application/x-rtf"), _defineProperty(_$tif$001$301$323$, "rv", "video/vnd.rn-realvideo"), _defineProperty(_$tif$001$301$323$, "sam", "application/x-sam"), _defineProperty(_$tif$001$301$323$, "sat", "application/x-sat"), _defineProperty(_$tif$001$301$323$, "sdp", "application/sdp"), _defineProperty(_$tif$001$301$323$, "sdw", "application/x-sdw"), _defineProperty(_$tif$001$301$323$, "sit", "application/x-stuffit"), _defineProperty(_$tif$001$301$323$, "slb", "application/x-slb"), _defineProperty(_$tif$001$301$323$, "sld", "application/x-sld"), _defineProperty(_$tif$001$301$323$, "slk", "drawing/x-slk"), _defineProperty(_$tif$001$301$323$, "smi", "application/smil"), _defineProperty(_$tif$001$301$323$, "smil", "application/smil"), _defineProperty(_$tif$001$301$323$, "smk", "application/x-smk"), _defineProperty(_$tif$001$301$323$, "snd", "audio/basic"), _defineProperty(_$tif$001$301$323$, "sol", "text/plain"), _defineProperty(_$tif$001$301$323$, "sor", "text/plain"), _defineProperty(_$tif$001$301$323$, "spc", "application/x-pkcs7-certificates"), _defineProperty(_$tif$001$301$323$, "spl", "application/futuresplash"), _defineProperty(_$tif$001$301$323$, "spp", "text/xml"), _defineProperty(_$tif$001$301$323$, "ssm", "application/streamingmedia"), _defineProperty(_$tif$001$301$323$, "sst", "application/vnd.ms-pki.certstore"), _defineProperty(_$tif$001$301$323$, "stl", "application/vnd.ms-pki.stl"), _defineProperty(_$tif$001$301$323$, "stm", "text/html"), _defineProperty(_$tif$001$301$323$, "sty", "application/x-sty"), _defineProperty(_$tif$001$301$323$, "svg", "text/xml"), _defineProperty(_$tif$001$301$323$, "swf", "application/x-shockwave-flash"), _defineProperty(_$tif$001$301$323$, "tdf", "application/x-tdf"), _defineProperty(_$tif$001$301$323$, "tg4", "application/x-tg4"), _defineProperty(_$tif$001$301$323$, "tga", "application/x-tga"), _defineProperty(_$tif$001$301$323$, "tif", "image/tiff"), _defineProperty(_$tif$001$301$323$, "tif", "application/x-tif"), _defineProperty(_$tif$001$301$323$, "tiff", "image/tiff"), _defineProperty(_$tif$001$301$323$, "tld", "text/xml"), _defineProperty(_$tif$001$301$323$, "top", "drawing/x-top"), _defineProperty(_$tif$001$301$323$, "torrent", "application/x-bittorrent"), _defineProperty(_$tif$001$301$323$, "tsd", "text/xml"), _defineProperty(_$tif$001$301$323$, "txt", "text/plain"), _defineProperty(_$tif$001$301$323$, "uin", "application/x-icq"), _defineProperty(_$tif$001$301$323$, "uls", "text/iuls"), _defineProperty(_$tif$001$301$323$, "vcf", "text/x-vcard"), _defineProperty(_$tif$001$301$323$, "vda", "application/x-vda"), _defineProperty(_$tif$001$301$323$, "vdx", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vml", "text/xml"), _defineProperty(_$tif$001$301$323$, "vpg", "application/x-vpeg005"), _defineProperty(_$tif$001$301$323$, "vsd", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vsd", "application/x-vsd"), _defineProperty(_$tif$001$301$323$, "vss", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vst", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vst", "application/x-vst"), _defineProperty(_$tif$001$301$323$, "vsw", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vsx", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vtx", "application/vnd.visio"), _defineProperty(_$tif$001$301$323$, "vxml", "text/xml"), _defineProperty(_$tif$001$301$323$, "wav", "audio/wav"), _defineProperty(_$tif$001$301$323$, "wax", "audio/x-ms-wax"), _defineProperty(_$tif$001$301$323$, "wb1", "application/x-wb1"), _defineProperty(_$tif$001$301$323$, "wb2", "application/x-wb2"), _defineProperty(_$tif$001$301$323$, "wb3", "application/x-wb3"), _defineProperty(_$tif$001$301$323$, "wbmp", "image/vnd.wap.wbmp"), _defineProperty(_$tif$001$301$323$, "wiz", "application/msword"), _defineProperty(_$tif$001$301$323$, "wk3", "application/x-wk3"), _defineProperty(_$tif$001$301$323$, "wk4", "application/x-wk4"), _defineProperty(_$tif$001$301$323$, "wkq", "application/x-wkq"), _defineProperty(_$tif$001$301$323$, "wks", "application/x-wks"), _defineProperty(_$tif$001$301$323$, "wm", "video/x-ms-wm"), _defineProperty(_$tif$001$301$323$, "wma", "audio/x-ms-wma"), _defineProperty(_$tif$001$301$323$, "wmd", "application/x-ms-wmd"), _defineProperty(_$tif$001$301$323$, "wmf", "application/x-wmf"), _defineProperty(_$tif$001$301$323$, "wml", "text/vnd.wap.wml"), _defineProperty(_$tif$001$301$323$, "wmv", "video/x-ms-wmv"), _defineProperty(_$tif$001$301$323$, "wmx", "video/x-ms-wmx"), _defineProperty(_$tif$001$301$323$, "wmz", "application/x-ms-wmz"), _defineProperty(_$tif$001$301$323$, "wp6", "application/x-wp6"), _defineProperty(_$tif$001$301$323$, "wpd", "application/x-wpd"), _defineProperty(_$tif$001$301$323$, "wpg", "application/x-wpg"), _defineProperty(_$tif$001$301$323$, "wpl", "application/vnd.ms-wpl"), _defineProperty(_$tif$001$301$323$, "wq1", "application/x-wq1"), _defineProperty(_$tif$001$301$323$, "wr1", "application/x-wr1"), _defineProperty(_$tif$001$301$323$, "wri", "application/x-wri"), _defineProperty(_$tif$001$301$323$, "wrk", "application/x-wrk"), _defineProperty(_$tif$001$301$323$, "ws", "application/x-ws"), _defineProperty(_$tif$001$301$323$, "ws2", "application/x-ws"), _defineProperty(_$tif$001$301$323$, "wsc", "text/scriptlet"), _defineProperty(_$tif$001$301$323$, "wsdl", "text/xml"), _defineProperty(_$tif$001$301$323$, "wvx", "video/x-ms-wvx"), _defineProperty(_$tif$001$301$323$, "xdp", "application/vnd.adobe.xdp"), _defineProperty(_$tif$001$301$323$, "xdr", "text/xml"), _defineProperty(_$tif$001$301$323$, "xfd", "application/vnd.adobe.xfd"), _defineProperty(_$tif$001$301$323$, "xfdf", "application/vnd.adobe.xfdf"), _defineProperty(_$tif$001$301$323$, "xhtml", "text/html"), _defineProperty(_$tif$001$301$323$, "xls", "application/vnd.ms-excel"), _defineProperty(_$tif$001$301$323$, "xls", "application/x-xls"), _defineProperty(_$tif$001$301$323$, "xlw", "application/x-xlw"), _defineProperty(_$tif$001$301$323$, "xml", "text/xml"), _defineProperty(_$tif$001$301$323$, "xpl", "audio/scpls"), _defineProperty(_$tif$001$301$323$, "xq", "text/xml"), _defineProperty(_$tif$001$301$323$, "xql", "text/xml"), _defineProperty(_$tif$001$301$323$, "xquery", "text/xml"), _defineProperty(_$tif$001$301$323$, "xsd", "text/xml"), _defineProperty(_$tif$001$301$323$, "xsl", "text/xml"), _defineProperty(_$tif$001$301$323$, "xslt", "text/xml"), _defineProperty(_$tif$001$301$323$, "xwd", "application/x-xwd"), _defineProperty(_$tif$001$301$323$, "x_b", "application/x-x_b"), _defineProperty(_$tif$001$301$323$, "sis", "application/vnd.symbian.install"), _defineProperty(_$tif$001$301$323$, "sisx", "application/vnd.symbian.install"), _defineProperty(_$tif$001$301$323$, "x_t", "application/x-x_t"), _defineProperty(_$tif$001$301$323$, "ipa", "application/vnd.iphone"), _defineProperty(_$tif$001$301$323$, "apk", "application/vnd.android.package-archive"), _defineProperty(_$tif$001$301$323$, "xap", "application/x-silverlight-app"), _$tif$001$301$323$);

    /**
     * 
     * @desc 获取浏览器类型和版本
     * @return {String} 
     */
    function getExplore() {
      var sys = {},
          ua = navigator.userAgent.toLowerCase(),
          s;
      (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0; // 根据关系进行判断

      if (sys.ie) return 'IE: ' + sys.ie;
      if (sys.edge) return 'EDGE: ' + sys.edge;
      if (sys.firefox) return 'Firefox: ' + sys.firefox;
      if (sys.chrome) return 'Chrome: ' + sys.chrome;
      if (sys.opera) return 'Opera: ' + sys.opera;
      if (sys.safari) return 'Safari: ' + sys.safari;
      return 'Unkonwn';
    }

    /**
     * 
     * @desc 获取操作系统类型
     * @return {String} 
     */
    function getOS() {
      var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
      'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
      var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
      if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
      if (/android/i.test(userAgent)) return 'android';
      if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
      if (/mac/i.test(appVersion)) return 'MacOSX';
      if (/win/i.test(appVersion)) return 'windows';
      if (/linux/i.test(appVersion)) return 'linux';
    }

    /**
     * @desc 是否是微信平台
     * @return {Boolean} 
     */
    function isWeixin() {
      var ua = navigator.userAgent.toLowerCase();
      return ua.indexOf('micromessenger') != -1;
    }

    /**
     *
     * @desc 判断浏览器是移动端
     * @return {Boolean}
     */
    function isMobile() {
      var agent = navigator.userAgent.toLowerCase();
      var keywords = ["android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser"];
      var flag = false; //排除 Windows 桌面系统

      if (agent.indexOf("Windows NT") < 0 || agent.indexOf("Windows NT") >= 0 && agent.indexOf("compatible; MSIE 9.0;") >= 0) {
        //排除 苹果桌面系统
        if (agent.indexOf("Windows NT") < 0 && agent.indexOf("Macintosh") < 0) {
          var _iterator = _createForOfIteratorHelper(keywords),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              if (agent.indexOf(item) >= 0) {
                flag = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }

      return flag;
    }

    var device = {
      getExplore: getExplore,
      getOS: getOS,
      isWeixin: isWeixin,
      isMobile: isMobile
    };

    /**
     * 
     * @desc   json转xml
     * @param  {json} 
     * @param  {String} 缩进空格数量
     * @return {String} 
     */
    function json2xml(o, tab) {
      var toXml = function toXml(v, name, ind) {
        var xml = "";

        if (v instanceof Array) {
          for (var i = 0, n = v.length; i < n; i++) {
            xml += ind + toXml(v[i], name, ind + "\t") + "\n";
          }
        } else if (_typeof(v) == "object") {
          var hasChild = false;
          xml += ind + "<" + name;

          for (var m in v) {
            if (m.charAt(0) == "@") xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";else hasChild = true;
          }

          xml += hasChild ? ">" : "/>";

          if (hasChild) {
            for (var m in v) {
              if (m == "#text") xml += v[m];else if (m == "#cdata") xml += "<![CDATA[" + v[m] + "]]>";else if (m.charAt(0) != "@") xml += toXml(v[m], m, ind + "\t");
            }

            xml += (xml.charAt(xml.length - 1) == "\n" ? ind : "") + "</" + name + ">";
          }
        } else {
          xml += ind + "<" + name + ">" + v.toString() + "</" + name + ">";
        }

        return xml;
      },
          xml = "";

      for (var m in o) {
        xml += toXml(o[m], m, "");
      }

      return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
    }

    /**
     * 
     * @desc   字符串转Xml格式Dom 
     * @param  {String} 缩进空格数量
     * @return {Element} 
     */
    function parseXml(xml) {
      var dom = null;

      if (window.DOMParser) {
        try {
          dom = new DOMParser().parseFromString(xml, "text/xml");
        } catch (e) {
          dom = null;
        }
      } else if (window.ActiveXObject) {
        try {
          dom = new ActiveXObject('Microsoft.XMLDOM');
          dom.async = false;
          if (!dom.loadXML(xml)) // parse error ..
            window.alert(dom.parseError.reason + dom.parseError.srcText);
        } catch (e) {
          dom = null;
        }
      } else alert("oops");

      return dom;
    }

    /**
     * 
     * @desc   xml转json字符串
     * @param  {Element} 
     * @param  {String} 缩进空格数量
     * @return {String} 
     */
    function xml2json(xml, tab) {
      var X = {
        toObj: function toObj(xml) {
          var o = {};

          if (xml.nodeType == 1) {
            // element node ..
            if (xml.attributes.length) // element with attributes  ..
              for (var i = 0; i < xml.attributes.length; i++) {
                o["@" + xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue || "").toString();
              }

            if (xml.firstChild) {
              // element has child nodes ..
              var textChild = 0,
                  cdataChild = 0,
                  hasElementChild = false;

              for (var n = xml.firstChild; n; n = n.nextSibling) {
                if (n.nodeType == 1) hasElementChild = true;else if (n.nodeType == 3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) textChild++; // non-whitespace text
                else if (n.nodeType == 4) cdataChild++; // cdata section node
              }

              if (hasElementChild) {
                if (textChild < 2 && cdataChild < 2) {
                  // structured element with evtl. a single text or/and cdata node ..
                  X.removeWhite(xml);

                  for (var n = xml.firstChild; n; n = n.nextSibling) {
                    if (n.nodeType == 3) // text node
                      o["#text"] = X.escape(n.nodeValue);else if (n.nodeType == 4) // cdata node
                      o["#cdata"] = X.escape(n.nodeValue);else if (o[n.nodeName]) {
                      // multiple occurence of element ..
                      if (o[n.nodeName] instanceof Array) o[n.nodeName][o[n.nodeName].length] = X.toObj(n);else o[n.nodeName] = [o[n.nodeName], X.toObj(n)];
                    } else // first occurence of element..
                      o[n.nodeName] = X.toObj(n);
                  }
                } else {
                  // mixed content
                  if (!xml.attributes.length) o = X.escape(X.innerXml(xml));else o["#text"] = X.escape(X.innerXml(xml));
                }
              } else if (textChild) {
                // pure text
                if (!xml.attributes.length) o = X.escape(X.innerXml(xml));else o["#text"] = X.escape(X.innerXml(xml));
              } else if (cdataChild) {
                // cdata
                if (cdataChild > 1) o = X.escape(X.innerXml(xml));else for (var n = xml.firstChild; n; n = n.nextSibling) {
                  o["#cdata"] = X.escape(n.nodeValue);
                }
              }
            }

            if (!xml.attributes.length && !xml.firstChild) o = null;
          } else if (xml.nodeType == 9) {
            // document.node
            o = X.toObj(xml.documentElement);
          } else alert("unhandled node type: " + xml.nodeType);

          return o;
        },
        toJson: function toJson(o, name, ind) {
          var json = name ? "\"" + name + "\"" : "";

          if (o instanceof Array) {
            for (var i = 0, n = o.length; i < n; i++) {
              o[i] = X.toJson(o[i], "", ind + "\t");
            }

            json += (name ? ":[" : "[") + (o.length > 1 ? "\n" + ind + "\t" + o.join(",\n" + ind + "\t") + "\n" + ind : o.join("")) + "]";
          } else if (o == null) json += (name && ":") + "null";else if (_typeof(o) == "object") {
            var arr = [];

            for (var m in o) {
              arr[arr.length] = X.toJson(o[m], m, ind + "\t");
            }

            json += (name ? ":{" : "{") + (arr.length > 1 ? "\n" + ind + "\t" + arr.join(",\n" + ind + "\t") + "\n" + ind : arr.join("")) + "}";
          } else if (typeof o == "string") json += (name && ":") + "\"" + o.toString() + "\"";else json += (name && ":") + o.toString();

          return json;
        },
        innerXml: function innerXml(node) {
          var s = "";
          if ("innerHTML" in node) s = node.innerHTML;else {
            var asXml = function asXml(n) {
              var s = "";

              if (n.nodeType == 1) {
                s += "<" + n.nodeName;

                for (var i = 0; i < n.attributes.length; i++) {
                  s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue || "").toString() + "\"";
                }

                if (n.firstChild) {
                  s += ">";

                  for (var c = n.firstChild; c; c = c.nextSibling) {
                    s += asXml(c);
                  }

                  s += "</" + n.nodeName + ">";
                } else s += "/>";
              } else if (n.nodeType == 3) s += n.nodeValue;else if (n.nodeType == 4) s += "<![CDATA[" + n.nodeValue + "]]>";

              return s;
            };

            for (var c = node.firstChild; c; c = c.nextSibling) {
              s += asXml(c);
            }
          }
          return s;
        },
        escape: function escape(txt) {
          return txt.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r');
        },
        removeWhite: function removeWhite(e) {
          e.normalize();

          for (var n = e.firstChild; n;) {
            if (n.nodeType == 3) {
              // text node
              if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) {
                // pure whitespace text node
                var nxt = n.nextSibling;
                e.removeChild(n);
                n = nxt;
              } else n = n.nextSibling;
            } else if (n.nodeType == 1) {
              // element node
              X.removeWhite(n);
              n = n.nextSibling;
            } else // any other node
              n = n.nextSibling;
          }

          return e;
        }
      };
      if (xml.nodeType == 9) // document node
        xml = xml.documentElement;
      var json = X.toJson(X.toObj(X.removeWhite(xml)), xml.nodeName, "\t");
      return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";
    }

    var xml = {
      json2xml: json2xml,
      xml2json: xml2json,
      parseXml: parseXml
    };

    /**
     * @desc 打包入口文件
     */
    var index_full = {
      cookie: cookie,
      json: json,
      str: str,
      support: support,
      keycode: keycode,
      file: file,
      date: date,
      validate: validate,
      url: url,
      event: event,
      random: random,
      num: num,
      clipboard: clipboard,
      dom: dom,
      mime: mime,
      xml: xml,
      device: device
    };

    return index_full;

}());
