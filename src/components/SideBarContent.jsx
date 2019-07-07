import React from 'react';
import './SideBarContent.css';

const SideBarContent = () => {
  return (
    <div className="sidebar-content-wrap">
      <div className="sidebar-content-left-panel">
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Overview</a></li>
        </ul>
      </div>
      <div className="sidebar-content-right-panel">
        <div className="top">right-top panel</div>
        <div>right-bottom panel</div>
      </div>
    </div>
  );
};

export default SideBarContent;