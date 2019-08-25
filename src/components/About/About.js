import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__lg-heading">
        Обо <span className="about__text-secondary">Мне</span>
      </h1>
      <h2 className="about__sm-heading">Let me tell you a few things...</h2>
      <div className="about__info">
        <img className="about__img" src={require("../../assets/img/portrait.jpg")} alt="portrait" />
        <div className="about__bio">
          <h3 className="about__text-secondary">BIO</h3>
          <p className="about__about-me">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aut asperiores
            debitis excepturi eius facere ipsam obcaecati, nobis molestiae reiciendis maxime
            voluptatibus eos repudiandae accusamus soluta quae deleniti porro? Officia!
          </p>
        </div>
        <div className="about__job about__job_1">
          <h3 className="about__company">123 Webshop</h3>
          <h6 className="about__position">Full Stack Developer</h6>
          <p className="about__position-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eius quod eos porro
            laborum blanditiis repellat praesentium nobis excepturi iste.
          </p>
        </div>
        <div className="about__job about__job_2">
          <h3 className="about__company">Designer ABC</h3>
          <h6 className="about__position">Front End Developer</h6>
          <p className="about__position-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eius quod eos porro
            laborum blanditiis repellat praesentium nobis excepturi iste.
          </p>
        </div>
        <div className="about__job about__job_3">
          <h3 className="about__company">Graphic Designer</h3>
          <h6 className="about__position">Full Stack Developer</h6>
          <p className="about__position-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eius quod eos porro
            laborum blanditiis repellat praesentium nobis excepturi iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
