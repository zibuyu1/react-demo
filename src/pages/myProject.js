import React, { Component } from 'react';
import { Tabs, Empty } from 'antd';
import '../assets/css/myProject.css';
import { ROUTES } from '../config/router';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const TabPane = Tabs.TabPane;

class myProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'left',
      activeKey: ROUTES[0].key,
      projectRoute: ROUTES,

    }
  }

  componentWillMount() {
    const pathname = this.props.history.location.pathname;
    this.setCHeckedUrl(pathname);
  }

  componentDidMount() {
    this.props.history.listen((route) => {
      this.setCHeckedUrl(route.pathname)
    })
  }
  
  setCHeckedUrl(activeKey) {
    if (activeKey === '/myProject') {
      this.props.history.push(ROUTES[0].key);
    } else {
      this.setState({ activeKey });
    }
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  
  render() {
    return (
      <Router>
        <div className="tabs_name">
          <Tabs activeKey={this.state.activeKey}
            tabPosition={this.state.tabPosition}
            onChange={this.onChange}>
            {
              this.state.projectRoute.map(route =>
                <TabPane tab={<Link to={route.link}>{route.label}</Link>} key={route.key}>
                  {
                    this.state.projectRoute.map((route, index) =>
                      {
                        let routerHtml;
                        if (route.link === this.state.activeKey) {
                          routerHtml = (
                            <Route key={route.key} path={route.link} component={route.component} />
                          )
                        }
                        return routerHtml;
                      })
                  }
                </TabPane>)
            }
          </Tabs>
        </div>
      </Router>
    );
  }
}

export default myProject;