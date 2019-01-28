import React, { Component } from 'react';
import { Tabs } from 'antd';
import '../assets/css/myProject.css';
import { ROUTES } from '../config/router';
import {
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

const TabPane = Tabs.TabPane;
const activeStyle = {
  'borderLeft': '2px solid #066EB7',
  'color': '#066EB7'
}

class myProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'left',
      projectRoute: ROUTES,

    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }
  render() {
    const pathname = this.props.history.location.pathname;
    return (
      <div className="tabs_name">
        <Tabs tabPosition={this.state.tabPosition}>
          {
            this.state.projectRoute.map(route =>
              <TabPane tab={<NavLink to={route.link} activeStyle={activeStyle}>{route.label}</NavLink>} key={route.key}>
                {
                  this.state.projectRoute.map((route, index) => {
                    let routeStr;
                    if (pathname === '/myProject') {
                      routeStr = <Route key={route.key} path="/myProject" exact render={() => (
                        <Redirect to="/myProject/projectAllList" />
                      )} />
                    } else {
                      routeStr = <Route key={route.key} path={route.link} component={route.component} />
                    }
                    return routeStr;
                  }
                  )
                }
              </TabPane>)
          }
        </Tabs>
      </div>
    );
  }
}

export default myProject;