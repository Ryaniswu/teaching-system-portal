import React from 'react';
import { Input, Col, Button, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

const options = [
//   {
//     value: '上机验收',
//     label: '上机验收',
//     children: [
//       {
//         value: 20%,
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
];

class InputRate extends React.Component {
  state = {
    dataSource: [],
  };

 

  render() {
    return (
      <div>
       <Col span={5}>
        <InputGroup compact>
          <Select defaultValue="研讨讲解">
            <Option value="上机验收">上机验收</Option>
            <Option value="研讨讲解">研讨讲解</Option>
            <Option value="作业提交">作业提交</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue={0}/>
        </InputGroup>
        </Col>
        <Col span={3}><Button type="primary" >确认</Button></Col>
      </div>
    );
  }
}

export default InputRate;