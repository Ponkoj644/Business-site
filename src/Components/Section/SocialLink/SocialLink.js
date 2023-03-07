import React from "react";
import "./SocialLink.css";

const SocialLink = ({ LinkHeading }) => {
  return (
    <div className="social-icon">
      <h3>{LinkHeading}</h3>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://www.dribbble.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-dribbble"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default SocialLink;
