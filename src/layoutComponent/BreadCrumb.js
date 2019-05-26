import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {Breadcrumb} from "antd";

class _BreadCrumb extends React.Component {
  state = {
    path: ''
  };

  componentWillReceiveProps(nextProps) {
    const pathname = nextProps.location.pathname;
    this.setState({path: pathname});
  }

  render() {
    const pathPartial = this.state.path.split('/');
    let prefix = '';
    const pathItem = pathPartial
      .filter(e => e !== '')
      .map((e, step) => {
        const link = prefix + '/' + e;
        let name = e.substring(0, 1).toUpperCase() + e.substring(1);
        return (
          <Breadcrumb.Item key={step}><Link to={link}>{name}</Link></Breadcrumb.Item>
        )
      });

    return (
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        {pathItem}
        {/*<Breadcrumb.Item><Link to='/experiment'>Experiment</Link></Breadcrumb.Item>*/}
        {/*<Breadcrumb.Item><Link to='/experiment/data'>Data</Link></Breadcrumb.Item>*/}
      </Breadcrumb>
    )
  }
}

const BreadCrumbBar = withRouter(_BreadCrumb);
export default BreadCrumbBar;
