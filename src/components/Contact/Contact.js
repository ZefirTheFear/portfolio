import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__lg-heading">
        Contact <span className="contact__text-secondary">Me</span>
      </h1>
      <h2 className="contact__sm-heading">This is how you can reach me...</h2>
      <div className="contact__contacts">
        <div className="contact__contact">
          <span className="contact__text-secondary">Email:</span> johndoe@test.test
        </div>
        <div className="contact__contact">
          <span className="contact__text-secondary">Phone:</span> (555) 555-5555
        </div>
      </div>
    </div>
  );
};

export default Contact;
