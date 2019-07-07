import React from 'react';
import './SideBarContent.css';
import xWhiteCross from '../images/cross-white.svg'

const SideBarContent = (props) => {
  return (
    <div className="sidebar-content-wrap">
      <div className="sidebar-content-left-panel">
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Social Profiles</a></li>
          <li><a href="#">Hashtags</a></li>
          <li><a href="#">Mentions</a></li>
          <li><a href="#">Brands</a></li>
        </ul>
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Internal Notes</a></li>
        </ul>
      </div>
      <div className="sidebar-content-right-panel">
        <div className="top">right-top panel</div>
        <div>right-bottom panel</div>
      </div>
      { props.isOpen &&
        <div onClick={props.onClose} className="closing-btn">
          <img src={xWhiteCross} alt="x cross logo"/>
        </div>
       }
    </div>
  );
};

export default SideBarContent;