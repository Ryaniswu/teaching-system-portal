import React, { Component } from 'react';
// import ReactEcharts from 'echarts-for-react';
import { Tabs } from 'antd';
// import ScoreManagement from "./inputscore/index1";
// import CalculateSumScore from './calculatescore/index';
// import './index.css';
// import { chartsOption, emptyMapOption } from './config';
// import { radarDataBuilder, barDataBuilder, addItem, removeItem, switchSelected } from './util';

const TabPane = Tabs.TabPane;

class BasicCommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    
    return (
      <Tabs className='tabs-content' defaultActiveKey="1" size={"large"}>
        <TabPane className='tab-essential' tab="接收作业" key="1">
        {/* <ScoreManagement /> */}
        </TabPane>
        <TabPane tab="回复问题" key="2">
        {/* <CalculateSumScore /> */}
        </TabPane>
      </Tabs>
    )
  }
}

export default BasicCommunication;
