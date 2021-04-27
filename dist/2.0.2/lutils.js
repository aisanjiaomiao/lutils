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
    function array2Tree(a, idStr, pidStr, chindrenStr) {
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

      return r;
    }

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
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
      if (_typeof(obj) == 'object') {
        if (Array.isArray(obj)) return obj.reverse();
        var o = new Object();

        for (var k in obj) {
          o[obj[k]] = k;
        }

        return o;
      }
    }

    /**
     * @desc 浅拷贝，支持常见类型
     * @param {Any} values
     * @return {json}
     */
    function copy$1(o) {
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
      var l = [];

      for (var i in o) {
        var c = {};
        c[t] = i;
        c[v] = o[i];
        l.push(c);
      }

      return l;
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
        end = start;
        start = 0;
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

    /**   
     * @desc  获取树结构的节点id路径数组
     * @param   {Array}     treeArr   
     * @param   {String|Number}    id id 值
     * @param   {String}    idStr id key字符串
     * @param   {String}    chindrenStr  chindren key字符串 
     * @return  {Array}     数组   
     */
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

    var json = {
      array2Tree: array2Tree,
      deepClone: deepClone,
      isEmpty: isEmpty,
      copy: copy$1,
      arrayEqual: arrayEqual,
      isArray: isArray,
      reverse: reverse$1,
      optionArr2Obj: optionArr2Obj,
      obj2OptionArr: obj2OptionArr,
      countArray: countArray,
      initRangeArray: initRangeArray,
      arrFind: arrFind,
      objFields: objFields,
      getTreeNodeIdPath: getTreeNodeIdPath
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

    var str = {
      replaceAll: replaceAll,
      digitUppercase: digitUppercase,
      rtrim: rtrim,
      ltrim: ltrim,
      trim: trim,
      reverse: reverse,
      ucfirst: ucfirst
    };

    /**
     * 
     * @desc 判断浏览器是否支持webP格式图片
     * @return {Boolean} 
     */
    function webP() {
      return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
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
        return event && event.type === 'load' ? img.width == 1 : false;
      };

      img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='; //一像素图片
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
     * @return {String} 
     */
    function bytesToSize(bytes) {
      if (bytes === 0) return '0 B';
      var k = 1024;
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]; // 后面保留一位小数，如1.0GB                                                                                                                  //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];  
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

    var date = {
      string2date: string2date,
      formatPassTime: formatPassTime,
      formatRemainTime: formatRemainTime,
      isSameDay: isSameDay,
      getTimeStamp: getTimeStamp
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
        return q[k] = v;
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
      id11: id11
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

    var num = {
      accAdd: accAdd,
      accSub: accSub,
      accMul: accMul,
      accDiv: accDiv
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
     * @desc 打包入口文件
     */
    // import dom  from "./dom";
    // import mime  from "./mime";
    // import device  from "./device";
    // import xml  from "./xml";

    var index = {
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
      clipboard: clipboard // dom,
      //不常用
      // mime,
      // xml,
      // device

    };

    return index;

}());
