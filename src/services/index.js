import http from '../utils/http'



/** 
 * 登录
 * @type {{mobile: string,code:string,watchManToken:string}}
 * @description 登录
 */
export const loginPost = ({mobile,code,watchManToken})=>{
    return http.post('login/checkPassword',{mobile,code,watchManToken})
}

/** 
 * 注册
 * @type {{mobile: string,code:string,repassword:string,password:string}}
 */
export const registerPost = ({mobile,code,password,repassword,watchManToken})=>{
    return http.post('register',{mobile,code,password,repassword,watchManToken})
}

export const getOssConfig = () =>{
    return http.get('cmyManage/sys/getImageConfig')
}
