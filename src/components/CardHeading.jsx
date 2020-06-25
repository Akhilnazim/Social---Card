import React from 'react'

function CardHeading({profPic,time,profName}) {
    return (
        <div className="card-header">
            <div className="float-right">{time}</div>
            <img src={profPic} Style={  "display: inline-block;" } className="rounded-circle" alt="hai"/> {profName}
        </div>

    )
}

export default CardHeading
