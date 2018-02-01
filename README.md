# lutils

> 此工具包是在 [outils](https://github.com/proYang/outils/blob/master/README.md) 的基础上,加上个人平时收集的代码片段进行的二次整合
> outils的GitHub:https://github.com/proYang/outils/blob/master/README.md


## 使用

直接下载`min`目录下的[lutils.min.js](./min/lutils.min.js)或[lutils.full.min.js](./min/lutils.full.min.js)   
推荐根据自己的的实际需求,自行进行打包

### 浏览器使用示例:
``` html 
  <script src="lutils.min.js"></script>
  <script> 
      var demo=lutils.str.trim(" 复制到剪切板 ");//trim示例
      demo+=(" 随机:"+lutils.random.randomChars(7));//随机字符串
      lutils.clipboard(demo);//剪切板示例
  </script>
```

## 函数

### Cookie
- #### [getCookie](./src/cookie/getCookie.js) 根据name读取Cookie
- #### [removeCookie](./src/cookie/removeCookie.js) 根据name删除Cookie
- #### [setCookie](./src/cookie/setCookie.js) 添加Cookie

### Json (包含Object与Array)
- #### [array2Tree](./src/json/array2Tree.js) 数组转为树状格式数组
- #### [deepClone](./src/json/deepClone.js) 深拷贝，支持常见类型
- #### [isEmpty](./src/json/isEmpty.js) 判断对象或数组是否为空
- #### [copy](./src/json/copy.js) 一般拷贝，浅拷贝
- #### [arrayEqual](./src/json/arrayEqual.js) 判断数组是否相等

### Str (String)
- #### [replaceAll](./src/str/replaceAll.js) 替换所有
- #### [digitUppercase](./src/str/digitUppercase.js) 现金额转大写
- #### [rtrim](./src/str/rtrim.js) 去除字符串前后空格
- #### [ltrim](./src/str/ltrim.js) 去除左空格
- #### [trim](./src/str/trim.js) 去除右空格
- #### [reverse](./src/str/reverse.js) 字符串倒转
- #### [ucfirst](./src/str/ucfirst.js) 英文字符串首字母大写

### Support
- #### [webP](./src/support/index.js) 判断浏览器是否支持webP格式图片
- #### [webP2](./src/support/index.js) 判断浏览器是否支持webP格式图片

### Keycode
- #### [getName](./src/keycode/index.js) 根据keycode获得键名

### File
- #### [toBlobURL](./src/file/toBlobURL.js) 文件转BlobURL
- #### [toDataURL](./src/file/toDataURL.js) 文件转DataURL 
- #### [base64UrlToBlob](./src/file/base64UrlToBlob.js) base64转Blob 或 ArrayBuffer
- #### [downloadByUrl](./src/file/downloadByUrl.js) 通过url下载文件

### Num (Number)
- #### [accAdd](./src/num/index.js) 精确的加法计算
- #### [accSub](./src/num/index.js) 精确的减法计算
- #### [accMul](./src/num/index.js) 精确的乘法计算 
- #### [accDiv](./src/num/index.js) 精确的除法计算

### Date (日期时间处理推荐结合[moment.js](http://momentjs.cn/)使用)
- #### [string2date](./src/date/string2date.js) 字符串时间转为Js Date类型
- #### [formatPassTime](./src/date/formatPassTime.js)  格式化${startTime}距现在的已过时间
- #### [formatRemainTime](./src/date/formatRemainTime.js) 格式化现在距${endTime}的剩余时间
- #### [isSameDay](./src/date/isSameDay.js) 判断是否为同一天
- #### [getTimeStamp](./src/date/getTimeStamp.js) 时间戳

### Validate
- #### [messages](./src/validate.js) 默认验证提示
- #### [required](./src/validate.js) 非空验证
- #### [email](./src/validate.js) 邮箱验证
- #### [url](./src/validate.js) url验证
- #### [date](./src/validate.js) 时间验证
- #### [dateISO](./src/validate.js) 时间验证,例如：2009-06-23，1998/01/22 只验证格式
- #### [number](./src/validate.js) 数字验证
- #### [digits](./src/validate.js) 数字验证
- #### [isarr](./src/validate.js) 是否是数组
- #### [minlength](./src/validate.js) 最小长度验证
- #### [maxlength](./src/validate.js) 最大长度验证
- #### [rangelength](./src/validate.js) 长度范围验证
- #### [min](./src/validate.js) 最小值验证
- #### [max](./src/validate.js) 最大值验证
- #### [range](./src/validate.js) 值范围验证
- #### [equalTo](./src/validate.js) 类型与值是否相等
- #### [mphone](./src/validate.js) 手机号验证
- #### [tphone](./src/validate.js) 动画号验证
- #### [idCard](./src/validate.js) 身份证验证
- #### [postal](./src/validate.js) 邮编验证

### Url
- #### [getQueryObject](./src/url/getQueryObject.js) 将url参数获取为对象
- #### [stringfyQueryString](./src/url/stringfyQueryString.js) 对象序列化为url参数
- #### [getQueryString](./src/url/getQueryString.js) 根据name获取url参数值

### Fun (Function)
- #### [throttle](./src/fun/throttle.js) 函数节流
- #### [debounce](./src/fun/debounce.js) 函数防抖

### Random
- #### [randomColor](./src/random/index.js) 随机生成颜色
- #### [randomNum](./src/random/index.js) 生成指定范围随机数
- #### [randomChars](./src/random/index.js) 生成随机字符串([A~Z],[a~z],[0~9])

### Dom
- #### [addClass](./src/dom/addClass.js) 为元素添加class
- #### [getScrollTop](./src/dom/getScrollTop.js) 获取滚动条距顶部的距离
- #### [hasClass](./src/dom/hasClass.js) 判断元素是否有某个class
- #### [offset](./src/dom/offset.js) 获取一个元素的距离文档(document)的位置，类似jQ中的offset()
- #### [removeClass](./src/dom/removeClass.js) 为元素移除class
- #### [scrollTo](./src/dom/scrollTo.js) 在${duration}时间内，滚动条平滑滚动到${to}指定位置
- #### [setScrollTop](./src/dom/setScrollTop.js) 设置滚动条距顶部的距离
- #### [windowResize](./src/dom/windowResize.js) H5软键盘缩回、弹起回调
- #### [append](./src/dom/append.js) 追加html类似jQ中的html()
- #### [fullscreen.full](./src/dom/fullscreen.js) 进入全屏模式
- #### [fullscreen.exit](./src/dom/fullscreen.js) 退出全屏模式

### Xml
- #### [json2xml](./src/xml/json2xml.js) json转xml文本
- #### [xml2json](./src/xml/xml2json.js) xml(Element)转json
- #### [parseXml](./src/xml/parseXml.js) 字符串转xml(Element)

### Device
- #### [getExplore](./src/device/getExplore.js) 获取浏览器类型和版本号
- #### [getOS](./src/device/getOS.js) 获取操作系统类型
- #### [isWeixin](./src/device/isWeixin.js) 获取是微信浏览器

### [Mime](./src/mime.js)
- #### 描述消息内容类型

### [Clipboard](./src/clipboard.js) 
- #### 剪切板