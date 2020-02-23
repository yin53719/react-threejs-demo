import React, { Component } from 'react';
import Header from '../common/header'
import Footer from '../common/footer'
import { registerPost } from '../../services';
import {Link} from 'react-router-dom';
import {Button} from 'antd'
import './index.less';


export default class Register extends Component {
    constructor(props) {
      super(props)
      this.state = {
          isDisabled:false,
          mobile:'',
          password:'',
          repassword:'',
          code:'',
          imgCode:'',
          level:0,
          showTime:false,
          timeOut:120
      }
    }
    componentWillMount(){
        
    }
    
    inputOnChange(){
        
    }
    submit(){
        registerPost()
    }
    render(){
        const {isDisabled,level,timeOut,showTime,password,repassword} = {...this.state };

        return (
            <div>
              <Header />
              <Button type="primary">Primary</Button>
              <div className="body-register">
                  <div className="register">
                      <ul>
                          <li className="label">手机号 </li>
                          <li className="input" ><input type="tel" maxLength="11" onChange={this.inputOnChange.bind(this,'mobile')} /> </li>
                          <li className="passwordcheck">
                          </li>
                      </ul>
                      <ul>
                          <li className="label">密码 </li>
                          <li className="input" ><input type="password" ref="password" onChange={this.inputOnChange.bind(this,'password')} /> </li>
                          <li className="passwordcheck">
                              { level <= 1 && <span><span >弱</span><br/><strong>●</strong></span> }
                              { level === 2 && <span className="level2"><span >中</span><br/><strong>●</strong></span> }
                              { level >2 && <span className="level3"><span >强</span><br/><strong>●</strong></span> }
                          </li>
                      </ul>
                      <ul>
                          <li className="label">确认密码 </li>
                          <li className="input" ><input type="password" onChange={this.inputOnChange.bind(this,'repassword')} /> </li>
                          <li className="passwordcheck">
                             { repassword && repassword !==password && <span>两次密码<br/>不一致</span> }
                          </li>
                      </ul>
                  </div>

                <div className="submit">
                    <li> <a className="register-btn" href="javascript:void(0)" style={{opacity:isDisabled?1:''}} onClick={this.submit.bind(this)} > 立即注册 </a><Link to="/login"> 登录 </Link></li>
                </div>
                <div id="captcha_div" ref="captchaDiv" ></div>
              </div>
              <Footer />
            
        </div>
        )
    }

}