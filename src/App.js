import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </div>
    </BrowserRouter>
  );
}

export default App;
