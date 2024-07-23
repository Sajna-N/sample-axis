import React from 'react'
import axis_icon from './assets/axis_icon.svg'
import phone from './assets/phone_in_talk.svg'
import whatsapp_icon from './assets/whatsapp_icon.svg'
import playlist from './assets/playlist_add.svg'
import bell_icon from './assets/bell_icon.svg'
import search from './assets/search.svg'

const HeaderComponent = () => {
  return (
    <div className="header-div">
        <div className="header-leftpart">
            <img src={axis_icon} alt=''/>
            AXIS MUTUAL FUND
        </div>
        <div className="header-rightpart">
            <div className="header-right-top">
                <div>Distributor</div>
                <div>About Us</div>
                <div>Downloads</div>
                <div>Contact Us</div>
                <div>Download  App</div>
                <div>Corporates</div>
                <div className="phnnum-data">
                    <img src={phone} height="16px" alt='' />
                8108622211
                <img src={whatsapp_icon} height="16px" alt='' />
                </div>
                |
                <div className="icon-info">
                    <img src={playlist} height="16px" alt='' />
                    <img src={bell_icon} height="16px" alt='' />
                </div>
            </div>
            <div className="header-right-bottom">
                <div>Our Schemes</div>
                <div>Planning & Solutions</div>
                <div>Service Central</div>
                <div>MoneyPlex Knowledge Nuggets</div>
                <div>
                <input
                        className="search-bar"
                        maxLength={25}
                        placeholder="Search"
                    />
                    <img src={search} className="header-search-icon" alt='' />
                    {/* <img src={grey_search} className={`siporder-search-icon cursor ${darkImg}`}
                        onClick={() => searchInputRef.current.focus()} /> */}
                </div>
                <div className="new-invest-btn">
                    New Investor
                </div>
                <div className="login-btn">
                    Login
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent