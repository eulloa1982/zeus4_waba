import { map } from 'lodash';
import React from 'react';
import './Menuheader.css';

const Menuheader = (props) => (
  <div class="sidebar-header">
    <img src="images/me.jpg" />
      <div class="sidebar-header-icons">
        <h3>Mobile</h3><p class="contact-data">{props.usrAll.Mobile}</p><br />
        <h3>Title</h3><p class="contact-data">{props.usrAll.Title}</p><br />
        <h3>Lead Source</h3><span class="contact-data">{props.usrAll.Lead_Source}</span>
        <h3>Created Time</h3><span class="contact-data">{props.usrAll.Created_Time}</span>
              
        
        <img src="../../../public/images/status.svg" />
        <img src="../../../public/images/message-icon.svg" />
         <img src="../../../public/images/menu-icon.svg" />
       </div>
  </div>
);

Menuheader.propTypes = {};

Menuheader.defaultProps = {};

export default Menuheader;

