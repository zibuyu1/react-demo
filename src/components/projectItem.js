import React, { Component } from 'react';
import { Table, Pagination } from 'antd';
import '../assets/css/components/projectItem.css';
import Ellipsis from './common/ellipsis.js';

import {
  // BrowserRouter as Router,
  Link,
} from 'react-router-dom';

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      text: `fsfksjfsfsfksjfsfsfksjfsfsjfsfsfksjfsfsfksjfsfsfksjfsfsfksjfsfsfksjfsfsfksjfs`,
      text2: `njnjnk`
    }

    this.columns = [
      {
        title: '项目',
        key: 'coverPhoto',
        align: 'left',
        render: (record) => (
          <div className="projectStyle">
            {record.projectVo.name}
            <img style={{width: "40px"}} src="http://react-china.org/uploads/default/38/c4b96a594bd352e0.png" alt="" />
          </div>
        ),
        width: 400,
      },
      {
        title: '订单总额',
        key: 'order',
        align: 'left',
        render: (item) => (
          <span>
            {item.key}
            {/* {item.projectVo.name} */}
          </span>
        ),
      },
      {
        title: '状态',
        key: 'type',
        align: 'left',
        width: 100,
        render: () => {
          let userMsg = null;
          if (this.props.dataSource.length) {
            userMsg = (
              <span>有数组</span>
            )
          } else {
            userMsg = (
              <span>没有数组</span>
            )
          }
          return userMsg;
        },
      },
      {
        title: '操作',
        key: 'option',
        align: 'center',
      }
    ];
  }

  // onChange(pageNumber) {
  //   this.props.currentPage(pageNumber);
  // }

  render() {
    return (
      <div>
        <div className="table_header">
          <Table showHeader={true} columns={this.columns} dataSource={[]} />
        </div>
        <Ellipsis text={this.state.text} />
        <Ellipsis text={this.state.text2} />
        <div className="table_body">
          <div className="table_body_header">
            <ul className="clearfix">
              <li onClick={() => { this.props.currentPage(2) }}>项目编号：{this.props.pages}</li>
              <li className="fr">
                <Link to={`${this.props.details}?id=MHFS-822960`}>详情</Link>
              </li>
            </ul>
          </div>
          {/* 列表 */}
          <Table 
          bordered={true} 
          pagination={false}
          showHeader={false} 
          columns={this.columns} 
          dataSource={this.props.dataSource} />
          {/* 分页 */}
          <Pagination 
          defaultCurrent={this.props.pages} 
          total={this.props.total} 
          onChange={this.props.currentPage} />
          
          
          {/* <Picker set='emojione' />
          <Picker onSelect={this.addEmoji} />
          <Picker title='Pick your emoji…' emoji='point_up' />
          <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
          <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} /> */}
        </div>
      </div>
    );
  }
}

export default ProjectItem;