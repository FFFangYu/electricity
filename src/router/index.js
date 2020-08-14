import Vue from 'vue'
import VueRouter from 'vue-router'

/* import Login from '../components/Login' */
const Login = () =>
  import(/* webpackChunkName: "login_home_wel" */ '../components/Login')
// import Home from '../components/Home'
const Home = () =>
  import(/* webpackChunkName: "login_home_wel" */ '../components/Home')
// import Welcome from '../components/Welcome'
const Welcome = () =>
  import(/* webpackChunkName: "login_home_wel" */ '../components/Welcome')

// import Users from '../components/users/Users'
const Users = () => import(/* webpackChunkName: "users_rights_roles" */ '../components/users/Users')
// import Rights from '../components/power/Rights'
const Rights = () => import(/* webpackChunkName: "users_rights_roles" */ '../components/power/Rights')
// import Roles from '../components/power/Roles'
const Roles = () => import(/* webpackChunkName: "users_rights_roles" */ '../components/power/Roles')

// import Categories from '../components/goods/Categories'
const Categories = () => import(/* webpackChunkName: "cate_params" */ '../components/goods/Categories')
// import Params from '../components/goods/Params'
const Params = () => import(/* webpackChunkName: "cate_params" */ '../components/goods/Params')

// import Goods from '../components/goods/Goods'
const Goods = () => import(/* webpackChunkName: "goods_add" */ '../components/goods/Goods')
// import Add from '../components/goods/Add'
const Add = () => import(/* webpackChunkName: "goods_add" */ '../components/goods/Add')

// import Order from '../components/order/Order'
const Order = () => import(/* webpackChunkName: "order_report" */ '../components/order/Order')
// import Report from '../components/reports/Report'
const Report = () => import(/* webpackChunkName: "order_report" */ '../components/reports/Report')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Categories },
      { path: '/params', component: Params },
      { path: '/goods', component: Goods },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order },
      { path: '/reports', component: Report }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* 挂载路由导航守卫 */
router.beforeEach((to, from, next) => {
  // to 表示将要访问的路径
  // from 表示从哪个路径跳转而来
  // next 是一个函数，表示放行
  if (to.path === '/login') return next()
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
