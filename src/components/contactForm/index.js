import React from "react";
import LocationIcon from "../../assets/images/icons/location-icon.svg";
import PhoneIcon from "../../assets/images/icons/phone-vector.svg";

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-left">
        <div className="contact-left-text">
        <h4 className="contact-title">CONTACT US</h4>
        <h3 className="contact-subtitle">Get in touch!</h3>
        <p className="contact-text">
          Fill in a form and contact us at any time. Our support team is always
          there for you! 👋
        </p>
        </div>
        <button className="contact-button">
          <img src={LocationIcon} className="contact-icons"/>
          <p className="contact-data">Drabantvägen 4, 194 33 Upplands Väsby, Sverige</p>
        </button>
        <button className="contact-button">
        <img src={PhoneIcon} className="contact-icons"/>
          <p className="contact-data">076 027 41 51</p>
        </button>
      </div>
      <div className="contact-right">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="5" />
        <button>SUBMIT MESSAGE</button>
      </div>
    </div>
  );
};

export default ContactForm;
