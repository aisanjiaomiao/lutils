export default   {
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
        idCard:"请输入正确的身份证格式",
        postal: "请输入正确的邮编格式"
    },
    required: function (value, param) {
        if (this.isarr(value)) {
            if (value.length > 0) {
                for (var itm of value) {
                    if (!itm) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        return value != undefined ? (value.toString().length > 0) : false;
    },
    email: function (value) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    },
    url: function (value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    },
    date: function (value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    },
    dateISO: function (value) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    },
    number: function (value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },
    digits: function (value) {
        return /^\d+$/.test(value);
    },
    isarr: function (o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    },
    minlength: function (value, param) {
        return value.length >= param;
    },
    maxlength: function (value, param) {
        return value.length <= param;
    },
    rangelength: function (value, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value);
        return (length >= param[0] && length <= param[1]);
    },
    min: function (value, param) {
        return value >= param;
    },
    max: function (value, param) {
        return value <= param;
    },
    range: function (value, param) {
        return (value >= param[0] && value <= param[1]);
    },
    equalTo: function (value, param) {
        return value === param;
    },
    mphone: function (value) {
        return /^1[3|4|5|8][0-9]\d{4,8}$/.test(value);
    },
    tphone: function (value) {
        return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(value);
    },
    idCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    },
    postal: function (value) {
        return /^[a-zA-Z0-9 ]{3,12}$/g.test(value);
    }
};