import { isEmpty } from 'lodash';
import React, {useState} from 'react';
import DealForm from '../DealForm/DealForm';
import './Menuheader.css';

const Menuheader = (props) => {
  const [visible, setVisible] = useState(false)

  const showDealForm = () => {
    setVisible(true)
  } 

  return (
    <div id="left-column">
      <DealForm visible={visible} data={props.usrAll}/>
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
          
            <p>Type <code>/tpltext </code>to add a WABA Text Template </p>
            <p>Type <code>/tplmedia </code>to add a WABA Media Template </p>
            <p>Type <code>/tplshow </code>to view all templates </p>
            <p>Type <code>/template </code>before template name if you want to send a template </p>
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
            <div class="card" onClick={showDealForm}>
              <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Set a Deal</p>
            </div>
            
          </div>
      </div>
    </div>
    )
   
  }

Menuheader.propTypes = {};

Menuheader.defaultProps = {};

export default Menuheader;