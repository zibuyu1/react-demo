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
}
export default api;
