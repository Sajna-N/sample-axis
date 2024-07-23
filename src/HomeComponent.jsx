import React from 'react';
import nfo_icon from "./assets/nfo-icon.svg";
import down_arrow from "./assets/down_arrow.svg"
import NfoCardComponent from './NfoCardComponent';

export const HomeComponent = () => {
  return (
    <div className="home-content">
        <div className="first-content">
            <div className="nfo-notification">
                <div className="nfo-img">
                    <img src={nfo_icon} alt='' />
                </div>
                <div className="data-content">
                    <div className="nfo-title"><h3><b>NFOs Corner</b></h3></div>
                    <div className="nfo-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</div>
                </div>
            </div>
            <div className="lang-box">
                <div><b>Change the languaue</b></div>
                <div className="select-input-div">
                    <div className="select-input">
                        <div className="option-title">English</div>
                        <div><img src={down_arrow} alt='' /></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second-content">
            <div className="cover-nfo">
            <div className="upcomingnfo-title"><b>Upcoming NFOs</b></div>
            <div className="card-row">
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Starting on"
                actionData = "Pre-Invest with smart switch"
                dateState= {true}
                />
            </div>
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Starting on"
                actionData = "Send me updates"
                dateState= {true}
                
                />
            </div>
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Starting on"
                actionData = "Pre-Invest with smart switch"
                dateState= {true}
                
                />
            </div>
            </div>
            </div>
            <div className="cover-nfo">
            <div className="upcomingnfo-title"><b>Ongoing NFOs</b></div>
            <div className="card-row">
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Closing on"
                actionData = "Invest in NFO"
                dateState= {false}

                />
            </div>
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Closing on"
                actionData = "Invest in NFO"
                dateState= {false}

                />
            </div>
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Closing on"
                actionData = "Invest in NFO"
                dateState= {false}

                />
            </div>
            </div>
            </div>
            <div className="cover-nfo">
            <div className="upcomingnfo-title"><b>Recently closed NFOs</b></div>
            <div className="card-row">
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Opening at"
                actionData = "Notify me"
                dateState= {false}

                />
            </div>
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Opening at"
                actionData = "Notify me"
                dateState= {false}
                
                />
            </div>
            <div className="cards-part">
                <NfoCardComponent 
                data = "Axis Nifty 500 Index Fund"
                dateHead = "Opening at"
                actionData = "Notify me"
                dateState= {false}
                
                />
            </div>
            </div>
            </div>
        </div>
        <div className="third-content">
            <div className="small-invst-head">
                <div className="small-invst-title">
                <b>Make small investment for bigger returns</b>
                </div>
                <div className="small-invst-desc">
                Invest small amount periodically in scheme of your choice
                </div>
            </div>
            <div className="small-invst-data">
            <input
                                        className="enter-name-bar"
                                        maxLength={25}
                                        placeholder="Enter name"
                                    />
            <input
                                        className="enter-name-bar"
                                        maxLength={25}
                                        placeholder="Enter mobile number"
                                    />
            <input
                                        className="enter-name-bar"
                                        maxLength={25}
                                        placeholder="Enter email ID"
                                    />
            <div className="qckcall-btn">
                Get a quick call
            </div>
            </div>
        </div>
    </div>
  )
}
