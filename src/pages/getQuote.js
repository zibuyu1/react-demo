import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage  } from 'react-intl';
import '../assets/css/getQuote.scss';
import UploadFile from '../components/common/uploadFile';
import {
  Form, Input, Row, Col, Button, Card, Icon, Table, Mention,
} from 'antd';

const { Meta } = Card;
const { toString } = Mention;
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
class getQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      fileList: [],
      accept: '.jpg, .png, .pdf, .zip, .rar',
      action: 'https://qa-oss-api.haizol.com/oss/attach/upload'
    }
    this.soltHtml = this.soltHtml.bind(this);
    this.limitSizeAndType = this.limitSizeAndType.bind(this);
    this.helloComponent = this.helloComponent.bind(this);
    this.onChange = this.onChange.bind(this);
  };
  onChange(editorState) {
    this.setState({
      count: toString(editorState).length || 0,
    })
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
    this.props.form.setFieldsValue({
      fileList: arr.length > 0 ? arr : []
    });
    this.props.form.validateFields(['fileList'], {force: true});
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
      htmlStr = null;
    }
    return htmlStr;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        return;
      }
    });
  }
  handleConfirmFile = (rule, value, callback) => {
    if (this.state.fileList.length === 0) {
      callback('请上传');
    } else {
      callback();
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const props = {
      action: this.state.action,
      accept: this.state.accept,
      fileList: this.state.fileList,
      soltHtml: this.soltHtml,
      limitSizeAndType: this.limitSizeAndType,
      changeFileList: arr => this.changeFileList(arr)
      
    };
    return (
      <div className="getQuote">
        <div className="getQuote_title">
          <h4>Submit My Sourcing Project</h4>
          <p>You may upload a ZIP file if you have more parts to source.
              We will analyzed and get in touch with you as soon as posibble.</p>
        </div>
        <div className="quote_submit">
          <Row>
            <Col span={15}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Item
                  {...formItemLayout}
                  label="Project Name"
                >
                  {getFieldDecorator('projectName', {
                    rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                  })(
                    <Input />
                  )}
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Attachments"
                  required
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('fileList', {
                        rules: [
                          { validator: this.handleConfirmFile },
                        ],
                      })(
                        <div>
                          <UploadFile {...props} /><span>（Max 25MB per file）</span>
                          <this.helloComponent fileList={this.state.fileList} />
                        </div>
                      )}
                    </Col>
                    <Col span={12}>
                    <FormattedHTMLMessage
                    id="register" />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Requirement"
                  extra={<div>
                    Please let us know the <b>Quantity</b> needed to be quote and other <b>information</b> that might not included in the drawing(s) such as materials, tolerance, finishes, lead times and certifications.
                  </div>}
                >
                  {getFieldDecorator('requirement', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })(
                    <div className="mention-wrap">
                      <Mention
                        style={{ width: '100%', height: 100 }}
                        onChange={this.onChange}
                        defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
                        multiLines
                      />
                      <i className="count">{`${this.state.count}/1000`}</i>
                    </div>
                  )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    <FormattedMessage
                    id="agree"
                    values={{count: <b>{this.state.count}</b>}} />
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={9}>
              <Card
                hoverable
                style={{ width: 360, borderRadius: 10 }}
                title="Our Commitments"
              >
                <Meta
                  description="Our Commitments"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const getQuote = Form.create({ name: 'register' })(getQuotes);
export default getQuote;