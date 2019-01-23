import React, { Component } from 'react';
import { Table } from 'antd';
import '../assets/css/components/projectItem.css';

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

class ProjectItem extends Component {
  constructor(props){
    super(props);

    this.columns = [{
      title: '项目',
      key: 'coverPhoto',
      align: 'left',
      render: (item) => (
        <div className="projectStyle">
          {/* {item.projectVo.name} */}
          {/* <img src="http://react-china.org/uploads/default/38/c4b96a594bd352e0.png" alt=""/> */}
        </div>
      ),
    }, {
      title: '订单总额',
      key: 'order',
      align: 'left',
      render: (item) => (
        <span>
          {item.key}
          {/* {item.projectVo.name} */}
        </span>
      ),
    }, {
      title: '状态',
      key: 'type',
      align: 'left',
      render: () => {
        let userMsg;
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
    }, {
      title: '操作',
      key: 'option',
      align: 'center',
    }];
  }

  render() {
    return (
      <div>
        <div className="table_header">
          <Table showHeader={true} columns={this.columns} dataSource={[]} />
        </div>
        <div className="table_body">
          <div className="table_body_header">
            <ul className="clearfix">
              <li onClick={()=>{this.props.currentPage(2)}}>项目编号：{this.props.pages}</li>
              <li className="fr">
                <Link to="/projectDetail">详情</Link>
              </li>
            </ul>
          </div>
          <Table showHeader={false} bordered={true} columns={this.columns} dataSource={this.props.dataSource} />
        </div>
      </div>
    );
  }
}

export default ProjectItem;