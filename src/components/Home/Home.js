import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <h1 className="home__lg-heading">
        Алексей <span className="home__text-secondary">Клименко</span>
      </h1>
      <h2 className="home__sm-heading">Web Developer</h2>
      <div className="home__icons">
        <a className="home__icon-link" href="/">
          <div className="home__icon-gitnub" />
        </a>
        <a className="home__icon-link" href="/">
          <div className="home__icon-twitter" />
        </a>
        <a className="home__icon-link" href="/">
          <div className="home__icon-facebook" />
        </a>
        <a className="home__icon-link" href="/">
          <div className="home__icon-linkedin" />
        </a>
      </div>
    </main>
  );
};

export default Home;
