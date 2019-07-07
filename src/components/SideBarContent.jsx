import React from 'react';
import './SideBarContent.css';
import xWhiteCross from '../images/cross-white.svg';
import profileAvatar from '../images/profile-avatar.jpg';
import bookMarkIcon from '../images/bookmark-saved.svg';
import editIcon from '../images/edit-gray.svg';
import emptyLogo from '../images/empty-img.svg'

const SideBarContent = (props) => {
  return (
    <div className="sidebar-content-wrap">
      <div className="sidebar-content-left-panel">
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Social Profiles<sup>1</sup></a></li>
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
        <div className="top-content-wrap">
          <div className="top-content">
            <div className="profile-avatar-wrap"><img className="profile-avatar" src={profileAvatar} alt="avatar" /></div>
            <div className="profile-text-wrap">
              <div className="top">
                <span>Social Baker</span>
                <span>Non-business</span>
              </div>
              <div className="bottom">
                <div className="content-wrap">
                  <span>Male</span>
                  <span className="divider"></span>
                  <span>18-24 years</span>
                </div>
              </div>
            </div>
            <div className="profile-icons-wrap">
              <div className="icons bookmark-icon">
                <img src={bookMarkIcon} alt="bookmark icon" />
              </div>
              <div className="icons edit-icon">
                <img src={editIcon} alt="edit icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content-wrap">
          <div className="bottom-content">
            <img src={emptyLogo} alt="empty logo" />
            <p>Caroline Receveur does not have any mention.</p>
          </div>
        </div>
      </div>
      {props.isOpen &&
        <div onClick={props.onClose} className="closing-btn">
          <img src={xWhiteCross} alt="x cross logo" />
        </div>
      }
    </div>
  );
};

export default SideBarContent;