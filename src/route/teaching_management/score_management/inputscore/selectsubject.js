import React from 'react';
// import {connect} from "react-redux";

import {Layout, Table, Select, Button, message} from 'antd';
// import {ExcelViewer} from "../ExcelViewer"
// import fetch from '../../util/fetch'

const {Content} = Layout;
const Option = Select.Option;

class SelectSubject extends React.Component {
  constructor() {
    super();
    this.expId = '';
    this.state = {
      optionData: [],
    };
  }

  componentDidMount() {
    this.loadExp();
  };

  handleSelect = (value, option) => {
    this.expId = value;
  };

  loadExp = () => {
    fetch('/exp/list', {}, (data) => {
      let arr = [];
      for (let d of data.data) {
        arr.push(<Option key={d.id}>{d.name}</Option>);
      }
      console.log(arr);
      this.setState({optionData: arr});
    });
  };

  handleClick = () => {
    if (this.expId) {
      fetch('/exp/detail', {'id': this.expId}, (data) => {
        this.setState({
          expData: data.experimentData
        });
      })
    } else {
      message.warning('请输入课程!');
    }
  }

  render() {
    return (
      <div>
        <Select
          placeholder="选择课程"
          style={{width: 600}}
          onChange={this.handleSelect}
        >
          {this.state.optionData}
        </Select>
        </div>
    )
  }
}

export default SelectSubject;