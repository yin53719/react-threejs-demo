import React, { Component } from 'react';

export default class App extends Component {
    render() {
      return <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
                <div style={{ textAlign: 'center', position:"absolute", left: 0, right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="lds-spinner white"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>;
    }
}