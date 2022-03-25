import React from "react";
import IndianPalace from "../../assets/images/indian-palace.svg";
import BackToTopIcon from "../../assets/images/icons/back-to-top.svg";
import FacebookIcon from "../../assets/images/icons/facebook.svg";
import InstagramIcon from "../../assets/images/icons/instagram.svg";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="logo-div">
        <img src={IndianPalace} className="logo" />
      </div>
      <div className="back-to-top-wrapper">
        <img src={BackToTopIcon} className="back-to-top" />
        <p>Denna hemsida är skapad med hemsida är skapad</p>
      </div>
      <div className="social-media-box">
        <div className="social-media-icons">
          <img src={InstagramIcon} />
          <img src={FacebookIcon} />
        </div>
        <p>© Indian Food Website 2022 • All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
