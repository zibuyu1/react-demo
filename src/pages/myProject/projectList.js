import React, { Component } from 'react';
import ProjectItem from '../../components/projectItem';
import CommonApiData from '../../utils/common';
import axios from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class ProjectList extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      url: 'oss/buyer/project/list',
      dataSource: [],
      pages: 1,
    }
  }

  currentPage(page){
    this.setState({
      pages: page
    });
    this.getListData(page, this);
  }

  getListData(page, _this) {
    const config = {
      cancelToken: source.token
    };
    CommonApiData.getListData(this.state.url, page, config, _this);
  }

  componentWillMount() {
    console.log(9999)
    // this.getListData(this.state.pages, this);
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  render() {
    return (
      <div>
        <ProjectItem 
        dataSource={this.state.dataSource}
        pages={this.state.pages}
        currentPage={page=>this.currentPage(page)} />
      </div>
    );
  }
}

export default ProjectList;