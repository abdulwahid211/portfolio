import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects"
class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}

export default Layout;