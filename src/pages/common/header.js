import React, { Component } from 'react';
import NavMenu from './navMenu'
export default class header extends Component {
  
    componentDidMount(){
        
    }
    render(){
        return (<div >
            <div className="header"> 
                <div className="logo dlb">犀牛帮</div>  
            
                <div className="fr dlb">
                    个人中心
                </div>
            </div>
            <NavMenu />
        </div>)
    }

}