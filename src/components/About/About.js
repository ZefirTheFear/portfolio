import React, { useEffect } from "react";
import "./About.scss";

const About = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <h1 className="about__lg-heading">
        {props.language === "ru" ? "Обо" : "About"}{" "}
        <span className="about__text-secondary">{props.language === "ru" ? "Мне" : "Me"}</span>
      </h1>
      <h2 className="about__sm-heading">
        {props.language === "ru" ? "и о моих навыках" : "and my skills"}
      </h2>
      <div className="about__info">
        <img className="about__img" src={require("../../assets/img/portrait.jpg")} alt="portrait" />
        <div className="about__bio">
          <h3 className="about__text-secondary">
            {props.language === "ru" ? "Алексей Клименко" : "Alexey Klimenko"}
          </h3>
          <div className="about__about-me">
            <p>
              {props.language === "ru"
                ? "Веб-разработчик, который сосредоточен на чистом, понятном и масштабируемом коде."
                : "A web developer who focused on clean, understandable and scalable code."}
            </p>
            <p>
              {props.language === "ru"
                ? "Люблю обучаться, узнавать и практиковать новые технологии."
                : "I like to learn, find out and practice new technologies."}
            </p>
            <p>
              {props.language === "ru"
                ? "Цель - создавать интересные проекты и получать профессиональный рост."
                : "My goal is to create interesting projects and gain professional growth."}
            </p>
          </div>
        </div>
        <div className="about__education">
          <h3 className="about__subtitle">
            {props.language === "ru" ? "Образование" : "Education"}
          </h3>
          <h6 className="about__education-title">2004-2010</h6>
          <div className="about__skills-description">
            {props.language === "ru"
              ? "Национальный технический университет Украины 'Киевский Политехнический Институт' (Институт энергосохранения и энергоменеджмента)"
              : "National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute' (Institute of Energy Saving and Energy Management)"}
          </div>
        </div>
        <div className="about__experience">
          <h3 className="about__subtitle">{props.language === "ru" ? "Опыт" : "Experience"}</h3>
          <h6 className="about__experience-title">Full Stack Web Developer</h6>
          <div className="about__experience-description">
            {props.language === "ru"
              ? "Десятки платных и бесплатных онлайн курсов. В основном, на Udemy."
              : "Dozens of paid and free online courses. On Udemy, mostly"}
          </div>
        </div>
        <div className="about__skills">
          <h3 className="about__subtitle">{props.language === "ru" ? "Навыки" : "Skills"}</h3>
          <div className="about__skills-description">
            <div className="about__logos">
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/HTML5_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/CSS3_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Sass_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Boostrap_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/JavaScript_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/React_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/JQuery_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Node.js_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Mongodb_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Mongoose_logo.svg")}
                alt="html5"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Git_logo.svg")}
                alt="html5"
              />
            </div>
            <ul className="about__skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Bootstap 4</li>
              <li>JS</li>
              <li>React JS</li>
              <li>JQuery</li>
              <li>Node JS (Express)</li>
              <li>Mongo DB (Mongoose)</li>
              <li>Git</li>
              <li>English (intermediate)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
