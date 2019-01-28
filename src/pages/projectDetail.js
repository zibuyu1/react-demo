import React, { Component } from 'react';
import UploadFile from '../components/common/uploadFile';
import { Table, Empty } from 'antd';

/**
 * text: 当前行的值 
 * record: 当前行对象
 * index: 索引
 */
const columns = [
  {
    title: '文件id',
    dataIndex: 'uid',
    key: 'uid'
  },
  {
    title: '文件名',
    dataIndex: 'originalName',
    key: 'originalName'
  },
  {
    title: '文件状态',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: '上传进度',
    dataIndex: 'progress',
    render: (text, record, index) => <i>{text}</i>,
  },
  {
    title: 'Action',
    key: 'Action',
    render: () => <i>324</i>,
  }
];

function HelloComponent(props) {
  let htmlStr;
  if (props.fileList.length) {
    htmlStr = (<Table dataSource={props.fileList} columns={columns} />);
  } else {
    htmlStr = (<Empty />);
  }
  return htmlStr;
}

class projectDetail extends Component {
  state = {
    fileList: [],
    accept: '.jpg, .png, .pdf',
    action: 'https://qa-oss-api.haizol.com/oss/attach/upload'
  }

  changeFileList(arr) {
    arr.forEach((element, index) => {
      element.key = index;
    });
    this.setState({ 
      fileList: arr
    });
  }
  
  render() {
    return (
      <div>
        <UploadFile 
        accept={this.state.accept}
        action={this.state.action}
        fileList={this.state.fileList}
        changeFileList={arr=>this.changeFileList(arr)} />
        {/* 自定义上传列表样式 */}
        <HelloComponent fileList={this.state.fileList} />
      </div>
    );
  }
}

export default projectDetail;