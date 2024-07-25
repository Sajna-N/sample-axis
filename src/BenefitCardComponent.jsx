import React from 'react'

const BenefitCardComponent = (props) => {
  return (
    <div className="benefit-card">
        <div className="benefit-card-left">
            <img src={props.image} alt='' />
        </div>
        <div className="benefit-card-right">
            <div className="benefit-card-title">
                {props.title}
            </div>
            <div className="benefit-card-desc">
                {props.desc}
            </div>
        </div>
    </div>
  )
}

export default BenefitCardComponent