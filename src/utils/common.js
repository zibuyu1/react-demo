import api from '../api/index';

/**
 *列表接口
 *
 * @class CommonApiData
 */
class CommonApiData{
  /**
   *获取列表数据
   *
   * @static
   * @param {接口地址} url
   * @param {分页} page
   * @param {页面传过来的this} _this
   * @memberof CommonApiData
   */
  static getListData(url, page,  _this) {
    api.projectAll(url, page)
    .then((res) => {
      if (res) {
        const bizCode = res.rspResult.bizCode;
        if (bizCode === 200) {
          const data = res.rspPageData.list;
          data.forEach((element, index) => {
            element.key = index;
          });
          _this.setState({
            dataSource: res.rspPageData.list,
            loading: false,
            total: res.rspPageData.totalNum,
          });
        } else {
          _this.setState({
            dataSource: [],
            loading: false,
          });
        }
      }
    })
    .catch((err) => {
      _this.setState({
        dataSource: [],
        loading: false,
      });
    });
  }
}
export default CommonApiData;