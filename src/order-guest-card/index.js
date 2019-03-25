import React, { Component } from 'react';

import './index.css';

import inbox from './inbox.svg';
import ellipsis_v from './ellipsis-v.svg';
import guest_1 from './guest_1.svg';
import guest_2 from './guest_2.svg';
import guest_3 from './guest_3.svg';
import guest_4 from './guest_4.svg';
import guest_5 from './guest_5.svg';

class OrderGuestCard extends Component {

    render() {
        return (
            <div className="OrderGuestCard">
                <div className="CardHeader">
                    <img src={inbox} alt="" className="icon" />
                    bookings <span className="count">(5)</span>
                    <img src={ellipsis_v} alt="" className="menu" />
                </div>
                <div className="CardContent">
                    <ul>
                        <li>
                            <div className="Item">
                                <div className="userHeader"><img src={guest_1} alt="" /></div>
                                <div className="orderInfo">
                                    <p className="userName">tood ward</p>
                                    <p className="checkLocation">Superior Premium</p>
                                    <p className="checkTime">Check in: Jan 18 -- 1 month</p>
                                </div>
                                <div className="orderNum">
                                    <p> B393OE <span className="tag"></span></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Item Active">
                                <div className="userHeader"><img src={guest_2} alt="" /></div>
                                <div className="orderInfo">
                                    <p className="userName">tood ward</p>
                                    <p className="checkLocation">Superior Premium</p>
                                    <p className="checkTime">Check in: Jan 18 -- 1 month</p>
                                </div>
                                <div className="orderNum">
                                    <p> B393OE <span className="tag"></span></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Item">
                                <div className="userHeader"><img src={guest_3} alt="" /></div>
                                <div className="orderInfo">
                                    <p className="userName">tood ward</p>
                                    <p className="checkLocation">Superior Premium</p>
                                    <p className="checkTime">Check in: Jan 18 -- 1 month</p>
                                </div>
                                <div className="orderNum">
                                    <p> B393OE <span className="tag"></span></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Item">
                                <div className="userHeader"><img src={guest_4} alt="" /></div>
                                <div className="orderInfo">
                                    <p className="userName">tood ward</p>
                                    <p className="checkLocation">Superior Premium</p>
                                    <p className="checkTime">Check in: Jan 18 -- 1 month</p>
                                </div>
                                <div className="orderNum">
                                    <p> B393OE <span className="tag"></span></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Item">
                                <div className="userHeader"><img src={guest_5} alt="" /></div>
                                <div className="orderInfo">
                                    <p className="userName">tood ward</p>
                                    <p className="checkLocation">Superior Premium</p>
                                    <p className="checkTime">Check in: Jan 18 -- 1 month</p>
                                </div>
                                <div className="orderNum">
                                    <p> B393OE <span className="tag"></span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default OrderGuestCard;