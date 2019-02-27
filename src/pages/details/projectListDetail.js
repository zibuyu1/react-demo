import React, { Component } from 'react';
import ProjectItemDetail from '../../components/common/projectItemDetail';

class projectListDetail extends Component {
  render() {
    return (
      <ProjectItemDetail url={this.props.location.pathname} /> 
    );
  }
}

export default projectListDetail;