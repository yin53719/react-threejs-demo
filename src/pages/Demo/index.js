import React, { Component } from 'react';
import Header from '../common/header'
import Footer from '../common/footer'
import { loginPost} from '../../services';
import './index.less'

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
        
    }
    inputOnChange(){

    }
    submit(){
        loginPost()
    }
    
    render(){
        const {isDisabled} = {...this.state };

        return (
            <div>
              <Header />
              <div className="body">
                  <div className="login">
                      <ul>
                          <li> <input type="tel" onChange={this.inputOnChange.bind(this,'mobile')} maxLength="11" placeholder="请输入手机号" /> </li>
                          <li> <input type="tel" onChange={this.inputOnChange.bind(this,'mobile')} maxLength="11" placeholder="请输入密码" /> </li>
                          {/* <li> <input type="password" ref="password" maxLength="32" onChange={this.passwordOnChange.bind(this)} placeholder="请输入密码"  /> </li> */}
                         <li> <a className="btn" style={{opacity:isDisabled?1:''}} onClick={this.submit.bind(this)} >登录</a></li>
                          <li className="link"> <span> 还没有账户？</span><a onClick={()=>{this.props.history.push('/register')}}>立即创建 </a> <a onClick={()=>{this.props.history.push('/resetPwd')}}  className='fr'>忘记密码？</a> </li>
                      </ul>
                  </div>
                  <div id="captcha_div"  ref="captchaDiv"></div>
              </div>
              <Footer />
        </div>
        )
    }

}