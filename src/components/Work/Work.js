import React from "react";
import "./Work.scss";

const Work = props => {
  return (
    <div className="work">
      <h1 className="work__lg-heading">
        {props.language === "ru" ? "Примеры" : "Code"}{" "}
        <span className="work__text-secondary">
          {props.language === "ru" ? "Кода" : "Examples"}
        </span>
      </h1>
      <h2 className="work__sm-heading">
        {props.language === "ru"
          ? "Посмотрите мои некоторые проекты..."
          : "Check out some of my projects..."}
      </h2>
      <div className="work__projects">
        <div className="work__project">
          <img
            className="work__project-img"
            src={require("../../assets/img/projects/project1.jpg")}
            alt="project1"
          />
          <a href="#!" className="work__project-link">
            {props.language === "ru" ? "Демо" : "Demo"}
          </a>
          <a href="#!" className="work__project-github-link">
            Github
          </a>
        </div>
        <div className="work__project">
          <img
            className="work__project-img"
            src={require("../../assets/img/projects/project2.jpg")}
            alt="project2"
          />
          <a href="#!" className="work__project-link">
            {props.language === "ru" ? "Демо" : "Demo"}
          </a>
          <a href="#!" className="work__project-github-link">
            Github
          </a>
        </div>
        <div className="work__project">
          <img
            className="work__project-img"
            src={require("../../assets/img/projects/project3.jpg")}
            alt="project3"
          />
          <a href="#!" className="work__project-link">
            {props.language === "ru" ? "Демо" : "Demo"}
          </a>
          <a href="#!" className="work__project-github-link">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
