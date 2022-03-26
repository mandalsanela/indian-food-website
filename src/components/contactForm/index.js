import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-left">
        <h4 className="contact-title">CONTACT US</h4>
        <h3 className="contact-subtitle">Get in touch!</h3>
        <p className="contact-text">
          Fill in a form and contact us at any time. Our support team is always
          there for you! 👋
        </p>
        <button className="contact-button">
            <p>hi</p>
        </button>
        <button className="contact-button">
            <p>hi</p>
        </button>
      </div>
      <div className="contact-right">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5"/>
          <button>SUBMIT MESSAGE</button>

      </div>
    </div>
  );
};

export default ContactForm;
