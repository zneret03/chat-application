import React from 'react';
import "./InfoBar.css";

const InforBar = ({room}) => {
    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src="/image/onlineIcon.png" alt="online icon"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src="/image/closeIcon.png" alt="close Icon"/></a>
            </div>
        </div>
    )
}

export default InforBar;
