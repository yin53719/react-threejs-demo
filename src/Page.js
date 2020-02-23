import React from 'react';
import {HashRouter as Router,Redirect, Route, Switch} from 'react-router-dom';
import NotFound from './pages/common/NotFound';
import Loadable from 'react-loadable';
import Loading from './pages/common/loading-component';
import Index from './pages/index'
import todolist from './pages/todolist'



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
				console.log(1111);
				return <Redirect to="/todolist" push />
			}} />        
			{/* 登录 */}
			<Route path="/login" component={Login} />
			{/* 注册 */}
			<Route path="/register" component={Register} />
			{/* 注册 */}
			<Route path="/todolist" component={todolist} />
			{/* 首页 */}
			{/*404页面*/}
			<Route component={NotFound} />
		</Switch>
	</Router>
)
