import React from 'react';
import nfo_icon from "./assets/nfo-icon.svg";
import down_arrow from "./assets/down_arrow.svg"
import step1_icon from "./assets/step1_icon.svg"
import step2_icon from "./assets/step2_icon.svg"
import step3_icon from "./assets/step3_icon.svg"
import right_arrow from "./assets/right_arrow.svg"
import benefit1_icon from "./assets/benefit1_icon.svg";
import benefit2_icon from "./assets/benefit2_icon.svg"
import benefit3_icon from "./assets/benefit3_icon.svg"
import benefit4_icon from "./assets/benefit$_icon.svg"
import mutualfund1_icon from "./assets/mutualfunds1_icon.svg"
import mutualfund2_icon from "./assets/mutualfunds2_icon.svg"
import mutualfund3_icon from "./assets/mutualfunds3_icon.svg"
import advmutual1_icon from "./assets/advmutual1_icon.svg"
import advmutual2_icon from "./assets/advmutual2_icon.svg"
import advmutual3_icon from "./assets/advmutual3_icon.svg"
import uparrow from "./assets/up_arrow.svg"
import downarrow from "./assets/down_arrowblack.svg"
import mobile_icon from "./assets/mobile_icon.svg"
import NfoCardComponent from './NfoCardComponent';
import BenefitCardComponent from './BenefitCardComponent';
import AdvMutualCardComponent from './AdvMutualCardComponent';

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
        <div className="fourth-content">
                <div className="query-div">
                    <div className="query-title">
                    What is an NFO?
                    </div>
                    <div className="query-desc">
                    <div>A new scheme launched by an asset management company (AMC) is called a new fund offer (NFO). An AMC is a company that manages the investments of its clients in different securities such as mutual funds, stocks, bonds, etc.</div>
                    <div>NFOs can be classified into three main types based on the structure and features of the mutual fund schemes: open-ended, closed-ended, and interval funds.</div>
                    <div>A new fund offer (NFO) can provides multiple benefits to its investors. Mutual funds launch NFOs to bridge gaps in their own and customer’s portfolios. This allow investors to participate in new schemes at their inception, enabling them to take advantage of new innovation & investment opportunities.</div>
                    <div>Furthermore, NFO in mutual funds aim to provide investors with diversification of portfolios by introducing new asset classes, market sectors, or themes. They provide professional management of the funds and ensure that experts handle investments. In addition, NFOs offer investors flexibility in how much money they can invest.</div>
                    </div>
                </div>
                <div className="query-div">
                    <div className="query-title">
                    Why should you Invest in NFO with Axis MF? 
                    </div>
                    <div className="query-desc">
                    With the Axis NFO, you can have various benefits, some of which are as follows:
                    <ul>
                        <li><span>Different mutual funds assign different values, for instance, one unit of a mutual fund may be obtained at a face value of Rs. 10. This helps you track the growth more intuitively – vs other NAV entry points.</span></li>
                        <li><span>You can explore the new concept based on different goals & investment objectives</span></li>
                        <li><span>Discover a new mutual fund strategy with different options for investment, such as SIPs or lump sums    </span> </li>
                        <li><span>Track & explore more details from the Axis Mutual Funds app</span></li>
                    </ul>
                    </div>
                </div>
                <div className="query-divvv">
                    <div className="query-div">
                        <div className="query-title">
                        Steps to Invest in NFO with Axis Mutual Fund
                        </div>
                        <div className="query-desc">
                        To invest in an NFO mutual fund, you can choose online platforms or invest through the app of Axis Mutual Fund for a safe and secure investment. Follow the below steps to invest in NFO.
                        </div>
                    </div>
                    <div className="query-step-div">
                        <div className="query-steps">
                            <img src={step1_icon} width="30px" alt='' />
                            <div className="step-head">Step 1</div>
                            <div className="step-desc">First, create an account on your online trading platform by logging in using your email and password. You can also view the available new fund offers on the Axis MF website.</div>
                        </div>
                        <img src={right_arrow} alt='' />
                        <div className="query-steps">
                            <img src={step2_icon} width="30px" alt='' />
                            <div className="step-head">Step 2</div>
                            <div className="step-desc">The online platform will provide the full investment details of the new fund offer.</div>
                        </div>
                        <img src={right_arrow} alt='' />
                        <div className="query-steps">
                            <img src={step3_icon} width="30px" alt='' />
                            <div className="step-head">Step 3</div>
                            <div className="step-desc">Based on your proposed allocation, choose the ideal mutual fund for investment and set an amount to be invested. </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="fifth-component">
            <div className="benefit-title">Benefits</div>
            <div className="benefit-content">
                <BenefitCardComponent 
                image = {benefit1_icon}
                title = "Global Exposure"
                desc = "Exposure to global opportunities/themes: Access to global companies and sunrise sectors not available in India"
                />
                <BenefitCardComponent
                image = {benefit2_icon}
                title = "Schroders' Legacy"
                desc = "Schroders’ Expertise: Leverage 200+ years of rich investing experience and global expertise"
                />
                <BenefitCardComponent
                image = {benefit3_icon}
                title = "Global Diversification"
                desc = "Risk Diversification: Global exposure diversifies portfolio risk and has potential to deliver better risk-adjusted returns"
                />
                <BenefitCardComponent
                image = {benefit4_icon}
                title = "Global Investing"
                desc = "Ease of investing: Invest globally through domestic fund with minimum application of Rs.5000 and multiples."
                />
                <BenefitCardComponent
                image = {benefit4_icon}
                title = "Long-Term Wealth"
                desc = "Ease of investing: Invest globally through domestic fund with minimum application of Rs.5000 and multiples."
                />
            </div>
        </div>
        <div className="sixth-content">
            <div className="mutualfunds-title">Features of Mutual Fund NFOs</div>
            <div className="mutualfunds-content">
                <div className="mutualfund-card yellow">
                    <div className="mutual-card-left">
                        <img src={mutualfund1_icon} alt='' />
                    </div>
                    <div className="mutual-card-right">
                        <div className="mutual-card-titl">Types of NFOs</div>
                        <div className="mutual-card-desc">
                        NFOs can be classified into three main types based on the structure and features of the mutual fund schemes: Open-ended, Closed-Ended, and Interval Funds.
                        </div>
                    </div>
                </div>
                <div className="mutualfund-card pink">
                    <div className="mutual-card-left">
                    <img src={mutualfund2_icon} alt='' />
                    </div>
                    <div className="mutual-card-right">
                        <div className="mutual-card-titl">New offerings/Startegies</div>
                        <div className="mutual-card-desc">NFOs often introduce new investment strategies or themes to the market.</div>
                    </div>
                </div>
                <div className="mutualfund-card orange">
                    <div className="mutual-card-left">
                    <img src={mutualfund3_icon} alt='' />
                    </div>
                    <div className="mutual-card-right">
                        <div className="mutual-card-titl">Returns</div>
                        <div className="mutual-card-desc">The returns from an NFO depend on the performance of the underlying assets.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="seventh-content">
            <div className="adv-mutualfund-title">
                Advantages of Mutual Fund NFOs
            </div>
            <div className="adv-mutualfund-content">
                <AdvMutualCardComponent 
                title = "Portfolio Diverstification"
                data = "You can start investing in equity fund by either filling up a physical form with the fund house or the distributor or by  "
                image = {advmutual1_icon}
                isClickHere = {true}
                />
                <AdvMutualCardComponent 
                title = "Access to New Sectors"
                data = "Select either lumpsum or SIP mode"
                image = {advmutual2_icon}
                isClickHere = {false}
                />
                <AdvMutualCardComponent 
                title = "Long-term Investment"
                data = "Make the payment by cheque or online as per the mode of registration."
                image = {advmutual3_icon}
                isClickHere = {false}
                />
            </div>

        </div>
        <div className="eightth-content">
            <div className="freq-ask-title">Frequently asked questions</div>
            <div className="freq-ask-content">
                <div className="freq-asked-opened">
                    <div className="freq-asked-div none">
                    <div className="freq-asked-qn">How does the new fund offer work?</div>
                    <div className="freq-asked-img">
                        <img src={uparrow} alt='' />
                    </div>
                    </div>
                    <div className="freq-asked-ans">The fund house invites investors to subscribe to the units of the new scheme during the NFO. This is the first stage in which the fund is opened for investment, and it is usually a fixed subscription period, after which the NFO is closed and trading begins.</div>
                </div>
                <div  className="freq-asked-div">
                <div className="freq-asked-qn">How is NAV calculated for NFO?</div>
                <div className="freq-asked-img">
                <img src={downarrow} alt='' />
                </div>
                </div>
                <div className="freq-asked-div">
                <div className="freq-asked-qn">What is the time limit for NFO?
                </div>
                <div className="freq-asked-img">
                <img src={downarrow} alt='' />
                </div>
                </div>
                <div className="freq-asked-div">
                <div className="freq-asked-qn">What is the starting price of NFO?
                    </div>
                <div className="freq-asked-img">
                <img src={downarrow} alt='' />
                </div>
                </div>
            </div>
        </div>
        <div className="ninth-content">
            <div className="download-left">
                <div className="download-title">Download our Mobile App</div>
                <input
                                        className="enter-name-bar"
                                        maxLength={25}
                                        placeholder="Enter Mobile Number"
                                    />
            </div>
            <div className="download-right">
                <img src={mobile_icon} width="75px" alt='' />
            </div>
        </div>
    </div>
  )
}
