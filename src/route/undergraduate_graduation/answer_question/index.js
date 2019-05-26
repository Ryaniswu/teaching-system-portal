import React, {Component} from 'react';
import {Menu, Dropdown, Button, Table, Modal,Input } from 'antd';
import {data} from './data';
import CommentIndex from "./commentindex";

const mydata = data;
const { TextArea } = Input;

class AnswerQuestion extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visible: false,
            question: ''
        };
    }

    showModal = (record) => {

        console.log(record)
        this.setState({
            visible: true,
            question: record.name
        });
    };
    /**
     *
     * 提交问题后的进一步处理
     */
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,

        });
    };

    /**
     * 选择相应的课程得到问题
     */
    handleClick() {


    }

    render() {
        const menu = (
            <Menu>
                {mydata.map(
                    (value, index) => {
                        const item = (
                            <Menu.Item key={"item" + index}>
                                <a onClick={this.handleClick}>
                                    {value.class_name}
                                </a>
                            </Menu.Item>);
                        return item;
                    }
                )}
            </Menu>);

        const nameArray = mydata[0].data;
        const columns = [
            {
                title: '问题名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '操作',
                dataIndex: 'answer',
                key: 'answer',
                render: (text, record) => {
                    return <Button type="primary" onClick={() => this.setState({visible:true})}>
                        回答
                    </Button>
                }
            }
        ]
        const dataNames = nameArray.map((value, index) => {
            const dataName = {
                key: index + 1,
                name: value.question,
                answer: '回答',
            };
            return dataName;

        })
        return (
            this.state.visible?<CommentIndex />
            : <div>
                {/* <Dropdown overlay={menu} placement="bottomCenter">
                    <Button size={'large'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程名称
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </Button>
                </Dropdown> */}
                <p></p><p></p>
                <p>问题展示：</p>
                <Table columns={columns} dataSource={dataNames}/>
            </div>
        )
    }
}

export default AnswerQuestion;