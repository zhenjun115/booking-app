import React, { Component } from 'react';
import './index.css';
import inbox from './inbox.svg';
import calendar from './calendar-check.svg';
import bed from './bed.svg';
import browser from './browser.svg';
import cog from './cog.svg';
import chart_bar from './chart-bar.svg';
import life_ring from './life-ring.svg';
import external_link_square from './external-link-square.svg';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul>
            <li>bookings
                <ul>
                    <li className="active"> <img src={inbox} className="icon" /> bookings</li>
                    <li> <img src={calendar} className="icon" /> calender</li>
                    <li> <img src={bed} className="icon" /> guests</li>
                </ul>
            </li>
            <li>management
              <ul>
                <li> <img src={browser} className="icon" /> listing</li>
                <li> <img src={cog} className="icon" /> settings</li>
                <li> <img src={chart_bar} className="icon" /> review</li>
              </ul>
            </li>
            <li>support
              <ul>
                <li> <img src={life_ring} className="icon" /> contract us</li>
                <li> <img src={external_link_square} className="icon" /> view listing</li>
              </ul>
            </li>
        </ul>

        <div className="loginStatus alignToBottom">
          <span className="icon"></span>
          <span className="label">log off</span>
        </div>
      </div>
    );
  }
}

export default Menu;