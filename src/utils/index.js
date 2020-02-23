import querystring from 'querystring';
import Cookies from 'js-cookie'
/**
 * Created by hardy.yin on 2019/4/12.
 */
// 获取url的参数
export const queryValue = (() => {
    let _queryString = querystring.parse(window.location.search.slice(1));
    return _queryString;
})();
// 获取token 
export function getToken(){
    if(Cookies.get('token') && Cookies.get('token').length>0){
        return Cookies.get('token')
    }else{
        return false
    }
}


export function loadJssdk(url,callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    var fScript = document.getElementsByTagName('head')[0];
    script.onload = function(){
      if(callback && typeof callback === 'function' ){
        callback()
      }
    }
    script.onerror = function(){
      console.log('注入文件失败')
    }
    fScript.parentNode.appendChild(script);
}
