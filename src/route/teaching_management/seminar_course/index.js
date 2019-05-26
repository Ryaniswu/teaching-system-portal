import React from 'react';
import {Tag} from 'antd';
import {Seminar} from './seminar';
import "./tag.css"
class SetSeminar extends React.Component{
    render(){
        return <div>
        <Tag color="blue">设置课程为研讨课</Tag>
        <br/>
        <Seminar />
        </div>
    }
}
export default SetSeminar;