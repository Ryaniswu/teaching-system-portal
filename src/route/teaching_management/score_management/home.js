import React from 'react';

import {Layout} from 'antd';

const {Content} = Layout;

class Home extends React.Component {
  render() {
    return (
      <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
        This is Home Page
      </Content>
    )
  }
}

export default Home;

