import React, { Component } from 'react';
import Header from '../common/header'
import Footer from '../common/footer'
import { loginPost} from '../../services';
import './index.less';
import { Button } from 'antd';

export default class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
          isDisabled:false,
          showTime:false,
          timeOut:60,
          mobile:'',
          code:'',
          password:'123456788',
          watchManToken:'1111'
      }

      this.config = {
        timeOut:60
      }
      this.captchaIns = null;
      
    }
    componentWillMount(){

        window.sessionStorage.setItem('')

        this.setState({
            password:'3333333'
        })

        // loginPost({}).then((res)=>{
        //     console.log(res)
        // })
    }
    inputOnChange(type,event){

    }
    submit(){

        loginPost({}).then((res)=>{
            window.sessionStorage.setItem('token','11111')
            console.log(res)
        })
    }
    
    render(){
        const {isDisabled,password} = this.state;

        return (
            <div>
              <Header />
              <Button type="primary">Primary</Button>
              <div className="body">
                  <div className="login">
                      <ul>
                          { password }
                          <li> <input type="tel" ref="mobile" className="mobile" onChange={this.inputOnChange.bind(this,'mobile','aaaa')} maxLength="11" placeholder="请输入手机号" /> </li>
                          <li> <input type="tel" onChange={this.inputOnChange.bind(this,'mobile')} maxLength="11" placeholder="请输入密码" /> </li>
                          {/* <li> <input type="password" ref="password" maxLength="32" onChange={this.passwordOnChange.bind(this)} placeholder="请输入密码"  /> </li> */}
                           <li> <a className="btn" href="javascript:void(0)" style={{opacity:isDisabled?1:''}} onClick={this.submit.bind(this,'111')} >登录</a></li>
                          <li className="link"> <span> 还没有账户？</span><a href="javascript:void(0)" onClick={()=>{this.props.history.push('/register')}}>立即创建 </a> <a onClick={()=>{this.props.history.push('/resetPwd')}}  className='fr'>忘记密码？</a> </li>
                      </ul>
                  </div>
                  <div id="captcha_div"  ref="captchaDiv"></div>
              </div>
              <Footer />
        </div>
        )
    }

}