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
  projectAll(url, curPage) {
    const config = {
      url: `${url}/${curPage}`,
      method: 'GET',
    };
    return Axios(config);
  },
}
export default api;
