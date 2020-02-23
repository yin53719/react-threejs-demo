import axios from 'axios'
import { message } from 'antd';

class Http {
	constructor() {
		axios.defaults.baseURL = window.location.origin + '/api/';
		this.request()
		this.response()
	}

	request() {
		// 添加请求拦截器
		axios.interceptors.request.use( function (config) {
			// 在发送请求之前做些什么
			config.headers['token'] = window.sessionStorage.token || '';
			return config;
		}, function (error) {
			// 对请求错误做些什么
			//return Promise.reject(error);
		});
	}

	response() {
		
		// 添加响应拦截器
		axios.interceptors.response.use(function (response) {
			if (response.error) {
				message.error(response.data.msg)
			}
			// 对响应数据做点什么
			if (response.data.resultCode !== 200) {
				message.error(response.data.msg)
			}
			return response.data;
		}, function (error) {
			if (error.response && error.response.data) {
				message.error(error.response.data)
			} else {
				message.error('网络异常，请重试')
			}

			// 对响应错误做点什么
			return Promise.reject(error);
		});
	}
	get(url, params = {},token) {
		return axios.get(url, {
			params: params,
			headers:{
				token:token || ''
			}
		})
	}

	post(url, data,paramsObj = {}) {
		return axios.post(url, data,{
			headers:{
				token:paramsObj.token || '',
				'watch-man-token':paramsObj.watchMainToken || '',
			},
			params: paramsObj.params ? paramsObj.params : {}
		})
	}
}

export default new Http()

