const toBlobURL = require('./toBlobURL');
const toDataURL = require('./toDataURL');
const base64UrlToBlob=require("./base64UrlToBlob"); 
const base64UrlToFile=require("./base64UrlToFile"); 
const downloadByUrl=require("./downloadByUrl");
const bytesToSize=require('./bytesToSize');
module.exports = {
    toBlobURL, toDataURL,base64UrlToBlob,downloadByUrl,bytesToSize,base64UrlToFile
};
