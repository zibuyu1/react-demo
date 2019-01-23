import Axios from '../service/index';
const api = {
  /**
   * 获取用户信息
   */
  loginInfo() {
    const config = {
      url: '/oss/user/login-info',
      method: 'GET',
    };
    return Axios(config);
  },
  /**
   * 获取项目列表
   */
  projectAll(url, curPage, newConfig) {
    const config = {
      url: `${url}/${curPage}`,
      method: 'GET',
    };
    return Axios(Object.assign(config, newConfig));
  },
}
export default api;
