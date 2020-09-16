import React from "react";

import "./contactInfo.css";

export default ({ contactInfo }) => {
  return (
    <div className="container">
      <h3>Contact Details</h3>
      <ul className="contact-container">
        <li className="contact-container-child">
          Phone Number : {contactInfo.phoneNumber}
        </li>
        <li className="contact-container-child">
          Email ID : {contactInfo.emailId}
        </li>
        <li className="contact-container-child">Github</li>
        <li className="contact-container-child">LinkedIn</li>
      </ul>
    </div>
  );
};
