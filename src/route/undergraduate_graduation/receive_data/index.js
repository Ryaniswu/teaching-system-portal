import React, {Component} from 'react';
import {Row, Col, Menu, Dropdown, Button, DatePicker, Table} from 'antd';
import {data} from './data';

const mydata = data;
const {MonthPicker} = DatePicker;


class ReceiveData extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleClick(e) {


    }

    onChange(date, dateString) {


    }


    render() {

        /**
         *数据需要传过来，这里用假数据
         *
         */
        const menu = (
            <Menu>
                {mydata.map(
                    (value, index) => {
                        const item = (
                            <Menu.Item key={"item" + index}>
                                <a onClick={this.handleClick}>
                                    {value.name}
                                </a>
                            </Menu.Item>);
                        return item;
                    }
                )}
            </Menu>);

        /**
         *数据需要传过来，这里用假数据
         *
         */
        const nameArray = mydata[0].data;
        const columns = [
            {
                title: '资料名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '操作',
                dataIndex: 'download',
                key: 'download',
                render: (text, record) =>
                    <a href="javascript:;">下载</a>
            }

        ]
        const dataNames = nameArray.map((value, index) => {
            const dataName = {
                key: index+1,
                name: value.docName,
                download: '下载',
            };
            return dataName;

        })
        return (
            <div>
                <Row>
                    <Col span={6} offset={2}>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button size={'large'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程名称
                                &nbsp;&nbsp;&nbsp;&nbsp;</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6} offset={2}>
                        <Button size={'large'}>查看作业提交情况</Button>
                    </Col>
                    <Col span={6} offset={2}>
                        <span>设置截止日期：</span><DatePicker onChange={this.onChange}/>
                    </Col>
                </Row>
                <p></p><p></p>
                <p>资料展示：</p>
                <Table columns={columns} dataSource={dataNames} />
            </div>

        )
    }
}

export default ReceiveData;