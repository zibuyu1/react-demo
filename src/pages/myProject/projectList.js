import React, { Component } from 'react';
import ProjectItem from '../../components/projectItem';
import CommonApiData from '../../utils/common';
import { Empty, Spin } from 'antd';

class ProjectList extends Component {
  constructor(props){
    super(props);

    this.state = {
      url: 'oss/buyer/project/list',
      details: '/project/list/detail',
      loading: true,
      dataSource: [],
      total: 0,
      pages: 1,
    }
    this.currentPage = this.currentPage.bind(this);
  }
  
  currentPage(page){
    this.setState({
      pages: page
    });
    this.getListData(page, this);
  }

  getListData(page, _this) {
    CommonApiData.getListData(this.state.url, page, _this);
  }

  componentWillMount() {
    this.getListData(this.state.pages, this);
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  render() {
    return (
      <div>
        {
          this.state.loading
          ? <Spin />
          : (this.state.dataSource.length === 0
            ? <Empty />
            : (<ProjectItem 
              pages={this.state.pages}
              total={this.state.total}
              loading={this.state.loading}
              details={this.state.details}
              dataSource={this.state.dataSource}
              currentPage={page=>this.currentPage(page)} />)
            )
        }
      </div>
    );
  }
}

export default ProjectList;