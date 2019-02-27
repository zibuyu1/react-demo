import React, { Component } from 'react';
import UploadFile from '../components/common/uploadFile';
import { Table, Empty, Button, Icon } from 'antd';

/**
 * text: 当前行的值 
 * record: 当前行对象
 * index: 索引
 */
const columns = [
  {
    title: '文件id',
    dataIndex: 'uid',
    key: 'uid',
    type: 1,
  },
  {
    title: '文件名',
    dataIndex: 'originalName',
    key: 'originalName',
    type: 1,
  },
  {
    title: '文件状态',
    dataIndex: 'status',
    key: 'status',
    type: 2,
  },
  {
    title: '上传进度',
    dataIndex: 'progress',
    type: 1,
    render: (text, record, index) => <i>{text}</i>,
  },
  {
    title: 'Action',
    key: 'Action',
    type: 1,
    render: () => <i>324</i>,
  }
];

class projectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      accept: '.jpg, .png, .pdf, .zip, .rar',
      action: 'https://qa-oss-api.haizol.com/oss/attach/upload'
    }
    this.soltHtml = this.soltHtml.bind(this);
    this.limitSizeAndType = this.limitSizeAndType.bind(this);
    this.helloComponent = this.helloComponent.bind(this);
  }

  /**
   *父组件改变值
   *
   * @param {*} arr
   * @memberof projectDetail
   */
  changeFileList(arr) {
    arr.forEach((element, index) => {
      element.key = index;
    });
    this.setState({
      fileList: arr
    });
  }

  /**
   *限制文件上传的类型及大小
   *
   * @param {*} file
   * @param {*} _this
   * @returns
   * @memberof projectDetail
   */
  limitSizeAndType(file, _this) {
    // 文件类型限制
    const name = file.name ? file.name : '';
    const ext = name
      ? name.substr(name.lastIndexOf('.') + 1, name.length)
      : true;
    const isExt = _this.props.accept.indexOf(ext) < 0;
    if (isExt) {
      return false;
    }
    // 文件大小限制
    const isLt25M = file.size / 1024 / 1024;
    // 空文件
    if (file.size === 0 ) {
      return false;
    }
    if (isLt25M > 25) {
      return false;
    }
    return true;
  }

  /**
   *函数组件传参
   *
   * @param {*父组件传过来的参数} props
   * @returns
   * @memberof projectDetail
   */
  helloComponent(props) {
    let htmlStr;
    if (props.fileList.length) {
      const type = 1;
      htmlStr = (()=>{
        if (type === 1) {
          return (<Table dataSource={props.fileList} columns={columns.filter((item)=>{
            return item.type === 1;
          })} />)
        } else if (type === 2) {
          return (<Table dataSource={props.fileList} columns={columns.filter((item)=>{
            return item.type === 2;
          })} />)
        }
      })();
    } else {
      htmlStr = (<Empty />);
    }
    return htmlStr;
  }

  /**
   *插值
   *
   * @returns
   * @memberof projectDetail
   */
  soltHtml() {
    return (
      <Button>
        <Icon type="upload" /> 上传
      </Button>
    )
  }

  render() {
    const props = {
      soltHtml: this.soltHtml,
      action: this.state.action,
      accept: this.state.accept,
      fileList: this.state.fileList,
      limitSizeAndType: this.limitSizeAndType,
      changeFileList: arr => this.changeFileList(arr)
    }
    return (
      <div>
        <UploadFile {...props} />
        {/* 自定义上传列表样式 */}
        <this.helloComponent fileList={this.state.fileList} />
      </div>
    );
  }
}

export default projectDetail;