import React from 'react';
import {EditableFormTable} from './index';
import {Layout} from 'antd';
import Selectsubject from './selectsubject';



const {Content} = Layout;
class ScoreManagement extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <Content>
            <Selectsubject />
            <br />
            <EditableFormTable />
        </Content>
    }
}
 export default ScoreManagement;