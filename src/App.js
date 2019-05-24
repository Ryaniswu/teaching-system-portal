import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Icon, Layout, Row, Col,Button} from 'antd';
import {ContentRouter, Navigation} from "./Router.js";
// import BreadCrumbBar from "./layoutComponent/BreadCrumb";
// import HomePage from './homePage.jpg';
// import Ten from './route/map/chinese-flavor/essential-feature/spectrum.png';


const {Header, Sider, Footer} = Layout;


class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    collapsed: false,
    isClick: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick(e){
    e.preventDefault();
    this.setState({
      isClick: false,
    })
  };

  render() {
    return (
      <Router>
        {/* {this.state.isClick ?

          <Layout style={{height: "100%"}} >
            <Button onClick={this.handleClick} style={{width: '100%',height: '100%'}}>
              <img src={HomePage} style={{width: '100%',height: '100%'}}/>
            </Button>

          </Layout>
          : */}
          <Layout style={{height: "100%",width: '100%'}}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className='logo'/>
              <Navigation/>
            </Sider>
            <Layout style={{height: '100%', display: "inline-block", width: '100%'}}>
              <Header style={{position: 'relative', background: '#fff', padding: 0, width: '100%'}}>
                <Row>
                  <Col span={4}>
                    <Icon
                      className="trigger"
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.toggle}
                    />
                  </Col>
                  <Col span={12} offset={8}>
                    {/* <LoginBar /> */}
                  </Col>
                </Row>
              </Header>
              <Layout style={{paddingLeft: '24px', display: "inline-block", width: '100%'}}>
                {/* <BreadCrumbBar/> */}
                <ContentRouter/>
              </Layout>
              {/*<Footer style={{textAlign: 'center'}}>*/}
              {/*食品风味地图后台操作平台©2018 Created by Zeroized*/}
              {/*</Footer>*/}
            </Layout>
          </Layout>}

      </Router>
    );
  }
}

export default PageLayout;
