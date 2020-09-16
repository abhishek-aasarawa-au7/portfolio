import React from "react";

import "./sidenav.css";

export const SideNav = ({ handleSectionClick }) => {
  return (
    <div className="sidenav">
      <img
        src="https://res.cloudinary.com/dqephruum/image/upload/v1600189480/jbig8okvg5gj6ebokadl.jpg"
        className="avatar"
        alt="avatar"
      />
      <h2 className="main-name">Abhishek Asarawa</h2>
      <p className="subtitle">"A Cadet Who Codes"</p>
      <div className="sections-list">
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("contactInfo")}
        >
          Contact Info
        </p>
      </div>
    </div>
  );
};
