import React from 'react'
import arrow from './assets/Vector.svg'
import cal_icon from './assets/calendar_icon.svg'
import info_icon from "./assets/info_icon.svg"

const NfoCardComponent = (props) => {
  return (
    <div className="nfo-card">
        <div className="nfo-card-title">
            <div>{props.data}</div>
            <img src={arrow} alt='' />
            </div>
        <div className="nfo-card-eq-time">
            <div className="nfo-card-eq">
                Equity
            </div>
            {props.dateState ?
            <div className="nfo-card-time">
                <img src={cal_icon} alt='' />
                06 D: 10 Hr: 26 Mins
            </div>
            : "" }
        </div>
        <div className="nfo-card-content">
            <div className="right-side">
                <div className="righttop-side">{props.dateHead}
                <img src={info_icon} width="9px" alt='' />
                </div>
                <div className="rightbottom-side">1 July 2024</div>
            </div>
            <div className="left-side">
            <div className="lefttop-side">Start investing with
            <img src={info_icon} width="9px" alt='' />
            </div>
            <div className="leftbottom-side">$100</div>
            </div>
        </div>
        <div className="nfo-card-btn-actions">
            <div className="know-more-left">Know more</div>
            <div className="action-right">{props.actionData}</div>
        </div>
    </div>
  )
}

export default NfoCardComponent