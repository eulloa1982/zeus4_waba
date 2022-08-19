import { isEmpty } from 'lodash';
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
       
    <div id="inner-nav"></div>
      <div id="container">
        <div id="profile">
          <div id="image">
            <img id="profile-photo" src="./images/no-user.jpg" alt="attach"/>
              <a href="daya"><i class="fas fa-pen stroke-transparent"></i></a>
          </div>
          <p id="name">{props.usrAll.Full_Name}<br />
            <span id="email">{props.usrAll.Email}</span>
          </p>
          <p id="designation">{props.usrAll.Title}<br />
            <span id="college">{props.usrAll.Description}</span>
          </p>
          <p id="designation">LeadSource : {props.usrAll.Lead_Source}</p>

          <p id="designation">Created Time : {props.usrAll.Created_Time}</p>
          <p id="designation">Last Activity Time : {props.usrAll.Last_Activity_Time}</p>
        
          <p>Type <code>/tmptext to add a WABA Text Template </code></p>
          <p>Type <code>/tmpmedia to add a WABA Media Template </code></p>
        </div>

        <div id="info-cards">
          <div class="card">
            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Account Name</p>
            <a href="#">{!isEmpty(props.usrAll.Account_Name) ? props.usrAll.Account_Name.name : 'No account associated'}</a>
          </div>
          <div class="card">
            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Contact Data</p>
            <a href="#"><img src='./images/mobile-2.jpg' alt='mobile' /> {props.usrAll.Mobile}</a><br />
            <a href="#"><img src='./images/phone-2.png' alt='mobile' />{props.usrAll.Phone}</a>
          </div>
          <div class="card">
            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Address Data</p>
            <a href="#"><img src='./images/state-2.png' alt='mobile' />{props.usrAll.State}</a><br />
            <a href="#"><img src='./images/location-2.png' alt='mobile' />{props.usrAll.City}, {props.usrAll.Street}</a>
          </div>
          
        </div>
        

    </div>




    
  </div>
   
);

Menuheader.propTypes = {};

Menuheader.defaultProps = {};

export default Menuheader;

/*
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
      <span><strong>Created Time: </strong></span><span class="contact-data">{props.usrAll.Created_Time}</span><br />
      <span><strong>Last Activity Time: </strong></span><span class="contact-data">{props.usrAll.Last_Activity_Time}</span>
      <span><h3>Address</h3>
        <span><strong>City: </strong></span><span className='contact-data'>{props.usrAll.City}</span><br />
        <span><strong>State: </strong></span><span className='contact-data'>{props.usrAll.State}</span><br />
        <span><strong>Street: </strong></span><span className='contact-data'>{props.usrAll.Street}</span><br />
      </span>

    </div>

*/

