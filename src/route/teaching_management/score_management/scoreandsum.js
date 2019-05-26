import React, { Component } from 'react';
// import ReactEcharts from 'echarts-for-react';
import { Tabs } from 'antd';
import ScoreManagement from "./inputscore/index1";
import CalculateSumScore from './calculatescore/index';
// import './index.css';
// import { chartsOption, emptyMapOption } from './config';
// import { radarDataBuilder, barDataBuilder, addItem, removeItem, switchSelected } from './util';

const TabPane = Tabs.TabPane;

class ScoreManagementTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    
    return (
      <Tabs className='tabs-content' defaultActiveKey="1" size={"large"}>
        <TabPane className='tab-essential' tab="输入成绩" key="1">
        <ScoreManagement />
        </TabPane>
        <TabPane tab="统计成绩" key="2"><CalculateSumScore /></TabPane>
      </Tabs>
    )
  }
}

export default ScoreManagementTwo;
