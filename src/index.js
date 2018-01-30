/**
 * @desc webpack打包入口文件
 */
const json = require('./json');
const str = require("./str");
const support = require("./support");
const keycode = require("./keycode");
const file = require("./file");
const date = require("./date");
const validate = require("./validate")
const url = require("./url");
const random = require("./random");
const fun = require("./fun");
const num=require("./num");
const clipboard = require("./clipboard");
const cookie = require("./cookie");
//不常用
// const dom = require("./dom");
// const mime = require("./mime");
// const device = require("./device");
// const xml = require("./xml");
module.exports = {
    cookie,
    json,
    str,
    support,
    keycode,
    file,
    date,
    validate,
    url,
    fun,
    random,
    num,
    clipboard,
    //不常用
    // dom,
    // mime,
    // xml,
    // device
};