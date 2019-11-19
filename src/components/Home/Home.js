import React, { useEffect } from "react";
import "./Home.scss";

const Home = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <h1 className="home__lg-heading">
        {props.language === "ru" ? "Алексей" : "Alexey"}{" "}
        <span className="home__text-secondary">
          {props.language === "ru" ? "Клименко" : "Klimenko"}
        </span>
      </h1>
      <h2 className="home__sm-heading">
        {props.language === "ru" ? "Веб Разработчик" : "Web Developer"}
      </h2>
      <div className="home__icons">
        <a
          className="home__icon-link"
          href="https://github.com/ZefirTheFear"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="home__icon-gitnub" />
        </a>
        <a
          className="home__icon-link"
          href="https://www.linkedin.com/in/alexey-klimenko-a0019b192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="home__icon-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Home;
