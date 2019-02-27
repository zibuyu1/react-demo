import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../assets/css/common/stepDetail.scss';

class StepDetail extends Component {
  render() {
    return (
      <div className="stepDetail">
        <div className="steps-item steps-item-finished">
          <Icon type="radar-chart" />
          <div className="steps-item-content">
            <p>提交</p>
            <p>2019-01-24</p>
          </div>
        </div>
        <div className="steps-item steps-item-finished">
          <Icon type="frown" />
        </div>
        <div className="steps-item steps-item-finished">
          <Icon type="scan" />
        </div>
        <div className="steps-item steps-item-error">
          <Icon type="scan" />
        </div>
      </div>
    );
  }
}

export default StepDetail;