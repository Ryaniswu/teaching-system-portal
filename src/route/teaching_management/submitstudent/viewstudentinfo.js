import React from 'react';
import {connect} from "react-redux";

import {Layout, Table, Select, Button, message} from 'antd';
import {ExcelViewer} from "./ExcelViewer";
import fetch from '../../../util/fetch'

const {Content} = Layout;
const Option = Select.Option;

class Data extends React.Component {
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
      message.warning('请输入科目/日期/学号!');
    }
  }

  render() {
    return (
      <div>
        <Select
          placeholder="选择选课表"
          style={{width: 600}}
          onChange={this.handleSelect}
        >
          {this.state.optionData}
        </Select>
        <Button
          type="primary"
          style={{float: 'right', marginRight: "24px"}}
          onClick={this.handleClick}
        >
          查询
        </Button>
        <br/><br/>
        <ExcelViewer {...this.state.expData} />
      </div>
    )
  }
}

export default connect(state => {
  return {data: state.analysis}
})(Data);
