import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

import LanguageContext from "./context/languageContext";

import "./App.scss";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );

  return (
    <LanguageContext.Provider value={{ language: language, setLanguage: setLanguage }}>
      <BrowserRouter>
        <main className="app">
          <Menu />
          <div className="app__inner">
            <Switch>
              <Route exact path="/" render={props => <Home {...props} language={language} />} />
              <Route
                exact
                path="/about"
                render={props => <About {...props} language={language} />}
              />
              <Route exact path="/work" render={props => <Work {...props} language={language} />} />
              <Route
                exact
                path="/contact"
                render={props => <Contact {...props} language={language} />}
              />
              <Redirect to="/" />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
