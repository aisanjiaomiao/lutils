/**
* @desc 根据keycode获得键名
* @param  {Number} keycode 
* @return {String}
*/
function getName(keycode) {
    if (keycode) {
        var k = ({//自行修改
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
            "255": "Fn",
        }[keycode]);
        return (k ? k : String.fromCharCode(keycode));
    }
}
export default   {
    getName
};