import React from 'react';
import { Link, Route, Switch, withRouter, Redirect } from "react-router-dom";
//-------------------Router-------------------------------
// import {EditableFormTable} from "./route/teaching_management/score_management/index";
import ScoreManagement from "./route/teaching_management/score_management/scoreandsum";
import UploadContent from "./route/teaching_management/submitstudent/uploadContent";
import Home from './route/teaching_management/score_management/home';
import SetSeminar from "./route/teaching_management/seminar_course/index";
import AnalysisData from './route/undergraduate_graduation/analysisdata/uploadContent';
import ReceiveData from './route/undergraduate_graduation/receive_data/index1';
import Editable from './route/undergraduate_graduation/analysis_view/index';
import AnswerQuestion from './route/undergraduate_graduation/answer_question/index';
import BasicCommunication from "./route/teaching_management/basic_communication/index";
import ScientificProject from "./route/scientific_management/scientific_project/index";
//-------------------Router End---------------------------
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

const nav = [{
  key: 'home',
  path: '/',
  name: '首页',
  component: Home,
  icon: 'home'
}, {
  key: 'teachingManagement',
  path: '/teachingManagement',
  name: '教学管理',
  component: Home,
  icon: 'file',
  children: [{
    key: 'submitstudent',
    path: '/submitstudent',
    name: '提交选课学生',
    component: UploadContent
  },{//这里的path是以父的path为前缀的path
    key: 'score',
    path: '/score',
    name: '成绩管理',
    component:ScoreManagement
  }, {
    key: 'notice',
    path: '/notice',
    name: '基本交流',
    component: BasicCommunication
  },
  {
    key: 'discuss',
    path: '/discuss',
    name: '研讨课',
    component: SetSeminar
  },
  ]
},
{
  key: 'analysis',
  path: '/analysis',
  name: '本科毕设',
  // component: AnalysisHome,
  icon: 'pie-chart',
  children: [{
    key: 'analysis_data',
    path: '/create',
    name: '发布资料',
    component: AnalysisData
  }, {
    key: 'receive_data',
    path: '/view',
    name: '接收资料',
    component: ReceiveData
  },
  {
    key: 'analysis_view',
    path: '/manage',
    name: '成绩管理',
    component: Editable
  },
  {
     key: 'answer_question',
     path: '/question',
     name: '回答问题',
     component: AnswerQuestion
  }

  ]
},, {
    key: 'map',
    path: '/map',
    name: '研究生管理',
    // component: VisualHome,
    icon: 'radar-chart',
    children: [
    {
      key: 'spectrum',
      path: '/spectrum',
      name: '发布资料',
      // component:Spectrum
    },
    {
      key: 'sensitivity',
      path: '/sensitivity',
      name: '接收文档',
      // component:FoodGraph
    },
    {
      key: 'preferences',
      path: '/preferences',
      name: '讨论',
      // component: TastePrefernce
    },
    // {
    //   key: 'favor',
    //   path: '/favor_pre',
    //   name: '味感喜好',
    //   component:TastePrefernce
    // },

  ]}, {
    key: 'taste_map',
    path: '/taste_map',
    name: '科研管理',
    icon: 'cloud',
    children: [
      {
        key: 'map_favor',
        path: '/flavor',
        name: '执行项目',
        component: ScientificProject,
      },{
        key: 'rec',
        path: '/rec',
        name: '分发资料',
        // component: FoodRec,
      },
    ]
  },{
    key: 'huoguo',
    path: '/huoguo',
    name: '娱乐休闲',
    icon: 'heart',
    children: [
      {
        key: 'prefer',
        path: '/prefer',
        name: '五子棋',
        // component: PeoplePrefer,
      },{
        key: 'taste',
        path: '/taste',
        name: '象棋',
        // component: PopPrefer,
      },
    ]  
},
];

// 登录验证
function requireAuth(Layout, props) {
  console.log(props);
  // if(sessionStorage.getItem("isLogin") !== '1') { // 未登录
  //   return<Redirect to={`/login?redirect=${props.location.pathname}`}/>;
  // } else {
  return <Layout {...props} />

}

class ContentRouter extends React.Component {
  render() {
    const contentRoutes = nav.map(e => {
      if (e.children) {
        const prefixPath = e.path;
        const subRouters = e.children.map(e => {
          const path = prefixPath + e.path;
          return (
            <Route key={e.key} path={path} component={e.component} />
          )
        });
        subRouters.unshift(<Route key={e.key} exact path={e.path} component={e.component} />);
        //console.log(subRouters.length);
        return {
          type: 'arr',
          value: subRouters
        }
      } else {
        return {
          type: 'ele',
          value: (
            <Route key={e.key} exact path={e.path} component={(props) => requireAuth(e.component, props)} />
          )
        }
      }
    });
    
    const routes = [
      // <Route path="/login" component={Login} key='login' />
    ];
    contentRoutes.forEach(e => {
      // console.log(e.type);
      if (e.type === 'ele') {
        routes.push(e.value);
      } else {
        e.value.forEach(e => {
          routes.push(e);
        })
      }
    });

    return (
      <Switch>
        {routes}
      </Switch>
    )
  }
}

class _Navigation extends React.Component {
  state = { selectedKey: "" };

  componentWillReceiveProps(nextProps) {
    let pathname = nextProps.location.pathname;
    if (pathname !== this.state.selectedKey) {
      this.setState({ selectedKey: pathname })
    }
  }

  render() {
    const menu = nav
      .filter(e => e.key !== 'home')
      .map(e => {
        if (e.children) {
          const prefixPath = e.path;
          const subMenus = e.children.map(e => {
            const path = prefixPath + e.path;
            return (
              <Menu.Item key={path}><Link to={path}>{e.name}</Link></Menu.Item>
            )
          });
          return (
            <SubMenu
              key={e.path}
              title={<span>
                <Icon type={e.icon} />
                <span>{e.name}</span>
              </span>}
            >
              {subMenus}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={e.path}>
              <Link to={e.path}>
                <Icon type={e.icon} />
                <span>{e.name}</span>
              </Link>
            </Menu.Item>
          )
        }
      });

    return (
      <Menu theme="dark" mode="inline" selectedKeys={[this.state.selectedKey]}>
        {menu}
      </Menu>
    )
  }
}

const Navigation = withRouter(_Navigation);
export { ContentRouter, Navigation };
