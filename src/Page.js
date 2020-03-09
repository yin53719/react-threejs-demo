import React from 'react';
import {HashRouter as Router,Redirect, Route, Switch} from 'react-router-dom';
import NotFound from './pages/common/NotFound';
import Loadable from 'react-loadable';
import Loading from './pages/common/loading-component';
import Index from './pages/index'
import todolist from './pages/todolist'
import BoxBufferGeometry from './pages/threejs/BoxBufferGeometry'
import baseDemo_demo1 from './pages/threejs/baseDemo/demo1'

// 用户中心
const Login = Loadable({
	loader: () => import('./pages/login'),
	loading: Loading,
});
const Register = Loadable({
	loader: () => import('./pages/register'),
	loading: Loading,
});

export default () => (
	<Router>
		<Switch>
			
			<Route exact path="/" render={() => {
				return <Redirect to="/baseDemo/demo1" push />
			}} />        
			{/* 登录 */}
			<Route path="/login" component={Login} />
			{/* 注册 */}
			<Route path="/register" component={Register} />
			{/* 注册 */}
			<Route path="/todolist" component={todolist} />
			{/* 汽车3d内景 */}
			<Route path="/BoxBufferGeometry" component={BoxBufferGeometry} />
			{/* demo1 */}
			<Route path="/baseDemo/demo1" component={baseDemo_demo1} />

			{/* 首页 */}
			{/*404页面*/}
			<Route component={NotFound} />
		</Switch>
	</Router>
)
