import React, { Component } from 'react';
import { Tooltip } from 'antd';
import '../../assets/css/common/ellipsis.scss';

class Ellipsis extends Component {
  constructor(props){
    super(props);
    
    this.getHeight = this.getHeight.bind(this);
  }

  getHeight() {
    const ellipsis_wrap  =  this.refs.ellipsis_wrap;
    const ellipsis_content  =  this.refs.ellipsis_content;
    let flag = false;
    if (ellipsis_wrap) {
      if (ellipsis_content.offsetHeight > ellipsis_wrap.offsetHeight) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
  }

  render() {
    return (
      <div>
        <Tooltip placement="topLeft" title={this.getHeight() ? this.props.text : ''}>
          <div ref="ellipsis_wrap" className="ellipsis_wrap">
            <div ref="ellipsis_content" className="ellipsis_content">
              {this.props.text}
            </div>
            {
              this.getHeight() ? (<i className="dot">...</i>) : null
              // (()=>{
              //   if (this.getHeight()) {
              //     return (<i className="dot">...</i>)
              //   } else {
              //     return;
              //   }
              // })()
            }
          </div>
        </Tooltip>
      </div>
    );
  }
}

export default Ellipsis;