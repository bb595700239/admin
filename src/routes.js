import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Table from './views/nav1/图书列表.vue'
import Form from './views/nav1/新增图书.vue'
import Edit from './views/nav1/编辑图书.vue'
import Detail from './views/nav1/图书详情.vue'
import user from './views/nav1/订单列表.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'




let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        hidden: false,
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/table', component: Table, name: '图书列表' },
            { path: '/form', component: Form, name: '新增图书' },
            { path: '/edit', component: Edit, name: '编辑图书' },
            { path: '/detail', component: Detail, name: '图书详情' },
            { path: '/user', component: user, name: '订单列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'el-icon-setting',
        hidden: false,
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;