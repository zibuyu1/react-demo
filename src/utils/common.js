import api from '../api/index';

class CommonApiData{
  static getListData(url, page, config,  _this) {
    api.projectAll(url, page, config)
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
          });
        }
      }
    })
    .catch((err) => {
  
    })
  }
}
export default CommonApiData;