import React from 'react';
// import {connect} from "react-redux";
import fetch from '../../../util/fetch';
// import {ExcelViewer} from "../../../../../../../food-master/src/route/ExcelViewer";

import {Layout, Upload, Icon, Button, message, Tag, Row, Col, Modal,Input} from 'antd';

const { CheckableTag } = Tag;

const {Content} = Layout;

class UploadContent extends React.Component {
  render() {
    return (
      <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
        <MyUpload {...this.props} />
      </Content>
    )
  }
}
class MyTag extends React.Component {
  state = { checked: true };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
    );
  }
}
class MyUpload extends React.Component {
  constructor() {
    super();
    this.uplodList = [];
    this.content = '';
    this.state = {
      uploaded: false,
      datas: [],
      visible: false,
    }
  }

  handleClick = () => {
    let list = []
    for (let item of this.uplodList) {
      list.push(item.name);
    }
    fetch('/exp/save', {'names': list}, (data) => {
      console.log(data);
      if (data.errorList.length == 0) {
        this.content = '上传成功';
      } else {
        this.content = ''
        for (let name of data.errorList) {
          this.content += (name + ',')
        }
        this.content += '上传失败';
      }
      this.setState({visible: true});
    },'POST')
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    //测试用
    console.log(this.state.response);

    const uploadConfig = {
      name: 'file',
      action: '/exp/excelRead',
      headers: {
        authorization: 'authorization-text',

      },
      onChange: (info) => {
        if (info.file.status !== 'uploading') {

          //测试用
          this.setState({uploaded: true});

          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
          let datas = info.file.response.data;
          this.setState({
            uploaded: true,
            datas: datas
          });
          console.log(info.file.response);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
        this.uplodList = info.fileList;
      }
    };

    return (
      <div>
        <Row>
          <Col span={3}><Upload {...uploadConfig}>
            <Button>
              <Icon type='upload'/>上传选课学生
            </Button>
          </Upload></Col>
          {/* <Col span={3}><MyTag>请输入课程：</MyTag></Col> */}
          <Col span={3}><Button type="primary" onClick={this.handleClick}>请输入课程：</Button></Col>
          <Col span={4}><Input placeholder="default size" /></Col>
          <Col span={5}><Button type="primary" onClick={this.handleClick}>确认上传</Button></Col>
        </Row>
        <Modal
          title="提示"
          visible={this.state.visible}
          onOk={this.handleOk}
        >
          <p>{this.content}</p>
        </Modal>
        <h3>预览学生数据:</h3>
        {/* <ExcelViewer {...this.state.datas} /> */}
      </div>
    )
  }
}

export default UploadContent;
