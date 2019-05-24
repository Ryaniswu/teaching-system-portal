import React from 'react';
import { Link, Route, Switch, withRouter, Redirect } from "react-router-dom";
//-------------------Router-------------------------------
import {EditableFormTable} from "./route/teaching_management/score_management/index";
import ExperimentUpload from "./route/teaching_management/submitstudent/uploaddata";
//-------------------Router End---------------------------
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

const nav = [{
  key: 'home',
  path: '/',
  name: '首页',
  component: <div>hhh</div>,
  icon: 'home'
}, {
  key: 'teachingManagement',
  path: '/teachingManagement',
  name: '教学管理',
  // component: ExperimentHome,
  icon: 'file',
  children: [{
    key: 'submit',
    path: '/submit',
    name: '提交选课学生',
    component: ExperimentUpload
  },{//这里的path是以父的path为前缀的path
    key: 'score',
    path: '/score',
    name: '成绩管理',
    component: EditableFormTable
  }, {
    key: 'notice',
    path: '/notice',
    name: '通知',
    // component: ExperimentData
  },
  {
    key: 'discuss',
    path: '/discuss',
    name: '研讨',
    // component: ExperimentData
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
      // component: AnalysisCreate
    }, {
      key: 'analysis_view',
      path: '/view',
      name: '发布通知',
      // component: AnalysisView
    },
    {
      key: 'analysis_view',
      path: '/view',
      name: '成绩管理',
      // component: AnalysisView
    }]
  }, {
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
        // component: FlavorMap,
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
  // },{
  //   key: 'jiaoma',
  //   path: '/jiaoma',
  //   name: '椒麻风味地图',
  //   // component: CaiXi,
  //   icon: 'deployment-unit',
  //   children:[
  //     {
  //       key: 'maweiwuzhi',
  //       path: '/maweiwuzhi',
  //       name: '麻味物质',
  //     },{
  //       key: 'maxiangwuzhi',
  //       path: '/maxiangwuzhi',
  //       name: '麻香物质',
  //       component: HotSpot,
  //     },{
  //       key: 'maweiganjue',
  //       path: '/maweifanjue',
  //       name: '麻味感觉',
  //     },{
  //       key: 'maxiangfanjue',
  //       path: '/maxingfanjue',
  //       name: '麻香感觉',
  //     },{
  //       key: 'dianziganguan',
  //       path: '/dianziganguan',
  //       name: '电子感官'
  //     }
  //   ]
  // }, {
  //   key: 'map_caixi',
  //   path: '/caixi',
  //   name: '中式菜肴地图',
  //   // component: CaiXi,
  //   icon: 'trophy',
  //   children:[
  //     {
  //       key: 'wuzhitezheng',
  //       path: '/wuzhitezhegn',
  //       name: '物质特征',
  //     },{
  //       key: 'ganguantezheng',
  //       path: '/感官特征',
  //       name: '感官特征',
  //     },{
  //       key: 'caixi',
  //       path: '/caixi',
  //       name: '感官特征',
  //       component: CaiXi,
  //     }
  //   ]
  // },{
  //   key: 'map_preference',
  //   path: '/preference',
  //   name: '风味与心理',
  //   icon: 'apple',
  //   // component: PopPrefer
  //   children: [
  //     {
  //       key: 'shenghuomanyidu',
  //       path: '/shengguomanyidu',
  //       name: '生活满意度',
  //       component: LifeSatisfaction,
  //     },{
  //       key: 'qingxuzhuangtai',
  //       path: '/qingxuzhuangtai',
  //       name: '情绪状态'
  //     },{
  //       key: 'ganjuexunqiu',
  //       path: '/ganjuexunqiu',
  //       name: '感觉寻求'
  //     },{
  //       key:'shipinkongxin',
  //       path: '/shipinkongxin',
  //       name: '食品恐新',
  //     },{
  //       key:'jiangchengmingan',
  //       path: '/jingchengmingan',
  //       name: '奖惩敏感',
  //     },{
  //       key:'kouqiangshengli',
  //       path: '/kouqingshegnli',
  //       name: '口腔生理',
  //     }
  //   ]
  // 
// }, 
//   {
//     key: 'other',
//     path: '/other',
//     name: '其它',
//     icon: 'slack',
//     children: [

//       {
//         key: 'map_statis',
//         path: '/statis',
//         name: '数据统计',
//         // component: DataSum
//       },
//       {
//         key: 'map_flavor',
//         path: '/flavor',
//         name: '口味直方图',
//         component: FlavorHistogram
//       },
//     ]
//   
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
