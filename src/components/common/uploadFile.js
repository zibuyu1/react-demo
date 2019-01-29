import React, { Component } from 'react';
import {
  Upload
} from 'antd';

class UploadFile extends Component {
  constructor(props) {
    super(props);
    
    // this指针丢失，通过bind,this指向都是当前实例化对象。
    this.arrAddItem = this.arrAddItem.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleError = this.handleError.bind(this);
    this.beforeUpload = this.beforeUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUploading = this.handleUploading.bind(this);
  }
  
  beforeUpload(file, fileList) {
    const result = this.props.limitSizeAndType(file, this);
    if (!result) {
      return false;
    }
    this.arrAddItem(file);
  }

  handleChange(info) {
    // 状态有：uploading, done, error, removed
    const uid = info.file.uid;
    const status = info.file.status;
    const arr = this.props.fileList;
    switch (status) {
      case 'uploading':
        this.handleUploading(info, arr, uid)
        break;
      case 'done':
        this.handleDone(info, arr, uid);
        break;
      case 'error':
        this.handleError(arr, uid);
        break;
      case 'removed':
        this.handleError(arr, uid);
        break;
      default:
        break;
    }
  }

  /**
   * 上传新文件
   * 
   * @param {*} file
   * @memberof UploadFile
   */
  arrAddItem(file) {
    const tempObj = {
      uid: file.uid, // uid用于辨别文件
      originalName: file.name, // 列表显示的文件名
      progress: 0, // 进度条
      status: 'uploading', // 上传状态
    };
    let arr = this.props.fileList;
    arr.push(tempObj);
    this.props.changeFileList(arr);
  }

  /**
   * 文件上传中的处理
   *
   * @param {*} info
   * @param {*} arr
   * @param {*} uid
   * @returns
   * @memberof UploadFile
   */
  handleUploading(info, arr, uid) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr[i].uid === uid) {
        // 更新这个uid下的进度
        const progress = Math.floor(info.file.percent);
        // 防止上传完接口还没有返回成功值，所以此处给定progress的最大值为99，成功的钩子中再置为100
        element.progress = progress === 100 ? 99 : progress;
        this.props.changeFileList(arr);
        return;
      }
    }
  }

  /**
   * 文件上传完成的处理
   *
   * @param {*} info
   * @param {*} arr
   * @param {*} uid
   * @returns
   * @memberof UploadFile
   */
  handleDone(info, arr, uid) {
    const bizCode = info.file.response.rspResult.bizCode;
    const response = info.file.response;
    if (bizCode === 200) {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (arr[i].uid === uid) {
          element.progress = 100;
          element.status = 'done';
          element.hashCode = response.data.hashCode;
          element.url = response.data.url; 
          this.props.changeFileList(arr);
          return;
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].uid === uid) {
          arr.splice(i, 1);
          this.props.changeFileList(arr);
          return;
        }
      }
    }
  }

  /**
   * 文件上传失败的处理
   *
   * @param {*} arr
   * @param {*} uid
   * @returns
   * @memberof UploadFile
   */
  handleError(arr, uid) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].uid === uid) {
        arr.splice(i, 1);
        this.props.changeFileList(arr);
        return;
      }
    }
  }

  render() {
    const props = {
      name: 'file',
      accept: this.props.accept,
      action: this.props.action,
      multiple: true,
      withCredentials: true,
      showUploadList: false,
      beforeUpload: this.beforeUpload,
      onChange: this.handleChange,
    }
    return (
      <Upload {...props}>
        <this.props.soltHtml />
      </Upload>
    );
  }
}

export default UploadFile;