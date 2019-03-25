import React, { Component } from 'react';

import './index.css';
import print from './print.svg';
import badge_check from './badge-check.png';
import side from '../login-profile/rolands-unsplash.jpg';

class OrderDetailCard extends Component {

    render() {
        return (
            <div className="OrderDetailCard">
                <div className="CardHeader">
                    bookings <span className="orderNum">#A14XD54</span>
                    <span className="menu"> <img src={print} alt="" /> Print</span>
                </div>
                <div className="CardContent">
                    <div className="Alert">
                        <p className="message">Notify guest</p>
                        <div className="btnGroup alignToRight">
                            <button className="btn confirm">Confirm</button>
                            <button className="btn reject">Reject</button>
                        </div>
                        <div className="clearBoth"></div>
                    </div>

                    <div className="pane">
                        <div className="pane-header">
                            <p>Todd Ward</p>
                        </div>

                        <div className="pane-content">
                            <div style={{ float: "left", marginRight: "20px", fontSize: "14px" }}>
                                <p><label style={{ color: "#59626A"}}>From</label> Sydnes, Australia</p>
                                <p><label style={{ color: "#59626A"}}>Local time</label> 19:47</p>
                            </div>
                            <div style={{ marginRight: "20px", fontSize: "14px" }}>
                                <p><label style={{ color: "#59626A"}}>Phone</label> +61 (02) 4321 9876</p>
                                <p><label style={{ color: "#59626A"}}>Secured with</label> Credit Card <img src={badge_check} /></p>
                            </div>
                        </div>
                    </div>

                    <div className="pane-side">
                        <div className="column-pane-wrapper">
                            <div className="column-side-wrapper">
                                <div className="side">
                                    <img src={side} alt="" width="100%" height="100%"/>
                                </div>
                                <div className="pane">
                                    <div className="pane-header">
                                        <p>Superior Premium (84sqm)</p>
                                    </div>
                                    <div className="pane-content">
                                        <div style={{ fontSize: "14px", color: "#59626A" }}>
                                            <p><label>Cost: </label>THB50,000 per month</p>
                                            <p><label>Check in: </label>Jan 18th, 2018</p>
                                            <p><label>Minimum stay: </label>1 month</p>
                                            <p><label>Security deposit of </label>THB50,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearBoth"></div>
                    </div>

                    <div className="pane">
                        <div className="pane-header">
                            <p>Emails</p>
                        </div>

                        <div className="pane-content">
                            <div className="email">
                                <div className="tag">H</div>
                                <div className="content">
                                    <p className="title">Dear Todd,</p>

                                    <p>Yes, the apartment includes both a desk for </p>
                                    <p>working and a comfortable chair.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form">
                        <div className="form-group">
                            <div className="form-item">
                                <input type="submit" value="send reply" />
                            </div>
                            <div className="form-item">
                                <input type="search" placeholder="Write a reply..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetailCard;