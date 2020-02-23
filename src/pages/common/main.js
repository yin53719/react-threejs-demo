import React, { Component } from 'react';

export default class NavMenu extends Component {
  
    componentDidMount(){
        
    }
    render(){
        return (<div>
         {this.props.children}
        </div>)
    }

}