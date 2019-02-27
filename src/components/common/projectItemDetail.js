import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import {
  Link,
} from 'react-router-dom';
import StepDetail from './stepDetail';

class ProjectItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  BreadcrumbComp(props) {
    let str;
    let url;
    switch (props.details) {
      case '/project/list/detail':
        url = '/myProject/projectAllList';
        str = '全部项目';
        break;
      default:
        break;
    }
    return <Breadcrumb separator=">">
      <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
      <Breadcrumb.Item><Link to={url}>{str}</Link></Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  }
  render() {
    const path = this.props.url;
    return (
      <div>
        <this.BreadcrumbComp details={path} />
        <StepDetail />
      </div>
    );
  }
}

export default ProjectItemDetail;