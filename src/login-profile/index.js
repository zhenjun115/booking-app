import React, { Component } from 'react';

import './index.css';
import chevron_down from './chevron-down.svg';
import eastin_tan_hotel from './eastin_tan_hotel_04.svg';

class LoginProfile extends Component {

    render() {
        return (
            <div className="LoginProfile">
                <div className="imgDesc">
                    {/* <img src={eastin_tan_hotel} alt="" /> */}
                </div>
                <div className="textDesc">
                    <p className="userName">charming views</p>
                    <p className="userRole"> <img src={chevron_down} alt="" /> manager</p>
                </div>
            </div>
        );
    }
}

export default LoginProfile;