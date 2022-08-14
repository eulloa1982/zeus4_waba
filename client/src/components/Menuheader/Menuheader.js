import { map, isEmpty } from 'lodash';
import React from 'react';
import './Menuheader.css';

const Menuheader = (props) => (
  <div id="left-column">
    <div class="sidebar-notifications">
      <img src="images/notifications.svg" alt="Default img"/>
        <div class="sidebar-notifications-message">
          <span>Zeus4 WABA</span>
        </div>
    </div>
       
    <div class="sidebar-header">
      <img src="./images/no-user.jpg" alt="attach"/>
      <span class="contact-data">{props.usrAll.Full_Name}</span>
      <div class="sidebar-header-icons">
        <img src="images/status.svg" alt="Default img" />
        <img src="images/message-icon.svg" alt="Default img" />
        <img src="images/menu-icon.svg" alt="Default img"  />
      </div>
    </div>
    
    <div className='contact-data'>
      <span><strong>Account Name: </strong></span><span class="contact-data">{!isEmpty(props.usrAll.Account_Name) ? props.usrAll.Account_Name.name : 'No account associated'}</span><br />
      <span><strong>Mobile: </strong></span><span class="contact-data">{props.usrAll.Mobile}</span><br />
      <span><strong>Title: </strong></span><span class="contact-data">{props.usrAll.Title}</span><br />
      <span><strong>Lead Source: </strong></span><span class="contact-data">{props.usrAll.Lead_Source}</span><br />
      <span><strong>Created Time: </strong></span><span class="contact-data">{props.usrAll.Created_Time}</span>

    </div>
  </div>
   
);

Menuheader.propTypes = {};

Menuheader.defaultProps = {};

export default Menuheader;

