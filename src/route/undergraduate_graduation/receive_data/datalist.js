import React from "react";
import { List, message, Avatar, Spin } from 'antd';
// import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
import {Col} from 'antd';
import MyDownLoad from "./mydownload";

// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
  state = {
    data: [{
        id:"1",
        name:"吴杰",
        file:"18721825_吴杰_数据结构作业.doc"
    }],
    loading: false,
    hasMore: true,
  };

//   componentDidMount() {
//     this.fetchData(res => {
//       this.setState({
//         data: res.results,
//       });
//     });
//   }

//   fetchData = callback => {
//     reqwest({
//       url: fakeDataUrl,
//       type: 'json',
//       method: 'get',
//       contentType: 'application/json',
//       success: res => {
//         callback(res);
//       },
//     });
//   };

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
}
//     this.fetchData(res => {
//       data = data.concat(res.results);
//       this.setState({
//         data,
//         loading: false,
//       });
//     });
//   };

  render(){
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
              <Col span={14}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.name}
                  description={item.file}
                />
                </Col>
                <Col span ={3}>
                <div><MyDownLoad /></div>
                </Col>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteListExample;
// ReactDOM.render(<InfiniteListExample />, mountNode);