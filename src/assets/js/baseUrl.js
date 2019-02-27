let lang;
let baseUrl;
const path = window.location.hostname;
switch(path) {
  case 'localhost':
    lang = 'lang-h-dev';
    baseUrl = 'https://qa-oss-api.haizol.com';
    break;
  default:
    lang = 'lang-h-dev';
    baseUrl = 'https://qa-oss-api.haizol.com';
    break;
}
export default {
  baseUrl, // 接口地址baseurl
  lang, // 语言标识变量
}