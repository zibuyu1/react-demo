import React, { Component } from 'react';
import { Tabs } from 'antd';
import '../assets/css/myProject.css';
import projectList from './myProject/projectList';
import projectNewList from './myProject/projectNewList';
import receiveQuoteList from './myProject/receiveQuoteList';
import pendingPaymentList from './myProject/pendingPaymentList';
import pendingReceiveList from './myProject/pendingReceiveList';
import projectReceiveList from './myProject/projectReceiveList';
import tailedPaymentList from './myProject/tailedPaymentList';
import projectCompleteList from './myProject/projectCompleteList';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const TabPane = Tabs.TabPane;
const projectRoute = [
  {
    label: '全部项目',
    routeUrl: '/projectList',
    component: projectList,
    key: '/projectList',
  },
  {
    label: '新询价项目',
    routeUrl: '/projectNewList',
    component: projectNewList,
    key: '/projectNewList',
  },
  {
    label: '收到报价',
    routeUrl: '/receiveQuoteList',
    component: receiveQuoteList,
    key: '/receiveQuoteList',
  },
  {
    label: '待付款',
    routeUrl: '/pendingPaymentList',
    component: pendingPaymentList,
    key: '/pendingPaymentList',
  },
  {
    label: '待收货',
    routeUrl: '/pendingReceiveList',
    component: pendingReceiveList,
    key: '/pendingReceiveList',
  },
  {
    label: '已收货',
    routeUrl: '/projectReceiveList',
    component: projectReceiveList,
    key: '/projectReceiveList',
  },
  {
    label: '待付尾款',
    routeUrl: '/tailedPaymentList',
    component: tailedPaymentList,
    key: '/tailedPaymentList',
  },
  {
    label: '已完成',
    routeUrl: '/projectCompleteList',
    component: projectCompleteList,
    key: '/projectCompleteList',
  },
];
class myProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'left',
      activeKey: projectRoute[0].key,
      projectRoute: projectRoute,
    }
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
    // this.props.history.push(activeKey);
  }

  render() {
    return (
      <div className="tabs_name">
        <Tabs activeKey={this.state.activeKey}
          tabPosition={this.state.tabPosition}
          onChange={this.onChange}>
          {
            this.state.projectRoute.map(item =>
              <TabPane tab={<Link to={item.routeUrl}>{item.label}</Link>} key={item.key}>
                <Route path={this.state.projectRoute[0].routeUrl} component={this.state.projectRoute[0].component} />
              </TabPane>)
          }
        </Tabs>
      </div>
    );
  }
}

export default myProject;