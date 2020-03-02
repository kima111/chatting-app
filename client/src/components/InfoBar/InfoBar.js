import React from 'react'
import './InfoBar.css'
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';


export default function InfoBar({room}) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>
            <div className="RightInnerContainer">
                <a href='/'><img className="closeIcon" src={closeIcon} alt="close" /></a>
            </div>
            
        </div>
    )
}
