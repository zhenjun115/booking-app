import React, { Component } from 'react';
import './App.css';

import LoginProfile from './login-profile/index';
import Menu from './menu/index';
import OrderGuestCard from './order-guest-card/index';
import OrderDetailCard from './order-detail-card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Column1">
          <LoginProfile />
          <Menu />
        </div>
        <div className="Column2">
          <OrderGuestCard />
        </div>
        <div className="Column3">
          <OrderDetailCard style={{ height: '100%' }}/>
        </div>
      </div>
    );
  }
}

export default App;