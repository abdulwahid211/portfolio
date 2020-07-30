import React, { Component } from "react";
import { Link, scroller as scroll } from "react-scroll";

export default class NavBar extends Component {

  constructor(props) {
    super();
    this.state = {
      style: { position: 'absolute' },
    }
  }


  scrollToTop = () => {
    scroll.scrollToTop();
  };

  showFixedNavBar = () => {
    this.setState({ style: { position: 'fixed', display: 'block', transition: 'opacity 8s ease-out-in', fontSize: '1.5rem', backgroundColor: '#333' } })
  }

  notShowFixedNavBar = () => {
    this.setState({ style: { position: 'absolute' } })
  }

  render() {
    return (
      <nav className="nav" id="navbar" style={this.state.style}>
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={this.notShowFixedNavBar}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={this.showFixedNavBar}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={this.showFixedNavBar}
              >
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={this.showFixedNavBar}
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}