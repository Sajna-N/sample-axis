import React from 'react'

const AdvMutualCardComponent = (props) => {
  return (
    <div className="adv-mutual-card">
        <div className="adv-mutual-card-title">
            {props.title}
        </div>
        <div className="adv-mutual-card-desc">
            {props.data}
        </div>
        <div className={`adv-mutual-card-img ${props.isClickHere ? 'for-click' : ''}`} >
            {props.isClickHere ?
            <div className="adv-mutual-clickhere">
                Clicking here
            </div>
            : "" }
            <div>
            <img src={props.image} alt='' />
            </div>
        </div>
    </div>
  )
}

export default AdvMutualCardComponent