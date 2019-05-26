import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '课程名称',
    dataIndex: 'courcename',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
  },
  {
    title: '学号',
    dataIndex: 'id',
    defaultSortOrder: 'descend',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    
    sortDirections:'descend',
  },
  {
    title: '总成绩',
    dataIndex: 'score',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.score - b.score,
  },
];

const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
];

// function onChange(pagination, filters, sorter) {
//   console.log('params', pagination, filters, sorter);
// }

class ScoreTable extends React.Component{
    render(){
        return <Table columns={columns} dataSource={data}  />;
    }
}
export default ScoreTable;