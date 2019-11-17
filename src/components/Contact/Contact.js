import React from "react";
import "./Contact.scss";

const Contact = props => {
  return (
    <div className="contact">
      <h1 className="contact__lg-heading">
        {props.language === "ru" ? "Мои" : "Contact"}{" "}
        <span className="contact__text-secondary">
          {props.language === "ru" ? "Контакты" : "Me"}
        </span>
      </h1>
      <h2 className="contact__sm-heading">
        {props.language === "ru"
          ? "Вы можете со мной связаться..."
          : "This is how you can reach me..."}
      </h2>
      <div className="contact__contacts">
        <div className="contact__contact">
          <span className="contact__text-secondary">
            {props.language === "ru" ? "Почта:" : "Email:"}
          </span>{" "}
          alexeyklimenkojs@gmail.com
        </div>
        <div className="contact__contact">
          <span className="contact__text-secondary">
            {props.language === "ru" ? "Телефон:" : "Phone:"}
          </span>{" "}
          +380664383868
        </div>
      </div>
    </div>
  );
};

export default Contact;
