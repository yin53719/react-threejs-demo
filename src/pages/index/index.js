import React, { Component } from 'react';
import Header from '../common/header'
import Footer from '../common/footer'
import { loginPost} from '../../services';

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
              <div>
                  <ul>
                      <li>11111</li>
                  </ul>
              </div>
              <Footer />
        </div>
        )
    }

}