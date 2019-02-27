import React, { Component } from 'react';
import { Tabs } from 'antd';
import '../assets/css/myProject.css';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import LevelTwo from './router/LevelTwo';

const TabPane = Tabs.TabPane;
// const activeStyle = {
//   'borderLeft': '2px solid #066EB7',
//   'color': '#066EB7'
// }
const ROUTES = [
  {
    label: '全部项目',
    link: '/myProject/projectAllList',
  },
  {
    label: '新询价项目',
    link: '/myProject/projectNewList',
  },
  {
    label: '收到报价',
    link: '/myProject/receiveQuoteList',
  },
  {
    label: '待付款',
    link: '/myProject/pendingPaymentList',
  },
  {
    label: '待收货',
    link: '/myProject/pendingReceiveList',
  },
  {
    label: '已收货',
    link: '/myProject/projectReceiveList',
  },
  {
    label: '待付尾款',
    link: '/myProject/tailedPaymentList',
  },
  {
    label: '已完成',
    link: '/myProject/projectCompleteList',
  },
];

class MyProjectLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '/myProject/projectAllList',
    }
    this.changeValue = this.changeValue.bind(this);
  }
  changeValue(key) {
    this.setState({
      activeKey: key
    });
  }
  componentWillReceiveProps(nextProps) {
    const str = nextProps.location.pathname === '/myProject' ? '/myProject/projectAllList' : nextProps.location.pathname;
    this.changeValue(`${str}`);
  }
  render() {
    return (
      <div className="tabs_name">
        <Tabs tabPosition="left" activeKey={this.state.activeKey} onChange={this.changeValue}>
          {
            ROUTES.map(route =>
              <TabPane tab={<Link to={route.link}>{route.label}</Link>} key={route.link}>
                {
                  (() => {
                    let str = null;
                    if (this.state.activeKey === route.link) {
                      str = <LevelTwo />;
                      return str;
                    }
                  })()
                }
              </TabPane>)
          }
        </Tabs>
      </div>
    );
  }
}

export default withRouter(MyProjectLayout);