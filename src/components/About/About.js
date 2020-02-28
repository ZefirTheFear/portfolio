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
          <div className="about__skills-description">
            <pre>
              {props.language === "ru"
                ? `- 2004-2010: Национальный технический университет Украины 'Киевский Политехнический Институт' (Институт энергосохранения и энергоменеджмента)
- Десятки платных и бесплатных онлайн курсов. В основном, на Udemy.`
                : `- 2004-2010: National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute' (Institute of Energy Saving and Energy Management)
- Dozens of paid and free online courses. On Udemy, mostly`}
            </pre>
          </div>
        </div>
        <div className="about__experience">
          <h3 className="about__subtitle">{props.language === "ru" ? "Опыт" : "Experience"}</h3>
          <div className="about__experience-description">
            <pre>
              {props.language === "ru"
                ? `Создание проектов с использованием React, Node.js, MongoDB. Ссылки на демо и github-репозиторий можно посмотреть в разделе 'примеры кода'.`
                : `Creating projects using React, Node.js, MongoDB. Links to demos and github repository you could see in section 'code examples'.`}
            </pre>
          </div>
        </div>
        <div className="about__skills">
          <h3 className="about__subtitle">{props.language === "ru" ? "Навыки" : "Skills"}</h3>
          <div className="about__skills-description">
            <div className="about__logos">
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/HTML5_logo.svg")}
                alt="html"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/CSS3_logo.svg")}
                alt="css"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Sass_logo.svg")}
                alt="sass"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Boostrap_logo.svg")}
                alt="bootstrap"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/JavaScript_logo.svg")}
                alt="js"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/React_logo.svg")}
                alt="react"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Redux_logo.svg")}
                alt="redux"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/JQuery_logo.svg")}
                alt="jquery"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Node.js_logo.svg")}
                alt="nodejs"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Mongodb_logo.svg")}
                alt="mongodb"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Mongoose_logo.svg")}
                alt="mongoose"
              />
              <img
                className="about__logo"
                src={require("../../assets/img/svg_logos/Git_logo.svg")}
                alt="git"
              />
            </div>
            <ul className="about__skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Bootstap 4</li>
              <li>JS</li>
              <li>React JS</li>
              <li>Redux</li>
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
