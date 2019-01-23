import axios from 'axios';
import urls from '../assets/js/baseUrl';

axios.defaults.baseURL = urls.baseUrl;
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

class AxiosClass {
  configs;
  constructor(configs) {
    this.configs = configs;
  }
  request() {
    return axios(this.configs);
  }
}



export default function Axios(config) {
  const wip = new AxiosClass(config);
  return wip.request();
}
