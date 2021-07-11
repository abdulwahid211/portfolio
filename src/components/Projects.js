import React, { Component } from "react";
import rajrani from '../../public/images/rajrani.png';
import startuition from '../../public/images/startuition.png';
import rfc from '../../public/images/rfc.png';
import arrow from '../../public/images/arrow.png';
import arrowHov from '../../public/images/arrowHov.png';
import SocialMediaIcons from "./SocialMediaIcons"
import { Link, animateScroll as scroll } from "react-scroll";


export default class Projects extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    constructor(props) {
        super();
        this.state = {
            switchArrow: true,
        }
    }

    getYear = ()=>{
        return new Date().getFullYear()
    }


    render() {
        return (
            <div id="projects">

                <h1 id="projects-title">Projects</h1>

                <div className="gallery">

                    <div className="items">
                        <a href="https://rajrani.herokuapp.com">
                            <img src={rajrani} alt="raj rani" />
                            <span className="text-wrapper">
                                <span className="project-name">Raj Rani</span>
                                <br></br>
                                <span className="tech-stack">HTML | CSS | Javascript | Django</span>
                            </span>
                        </a>
                    </div>

                    <div className="items">
                    <a href="https://csproject.wordpress.com/">
                        <img src={rfc} alt="NFC Doorlock System" />
                        <span className="text-wrapper">
                            <span className="project-name">NFC Doorlock System</span>
                            <br></br>
                            <span className="tech-stack">Python | Raspberry Pi | NFC Reader</span>
                        </span>
                        </a>
                    </div>
                </div>

                <footer>
                    <img src={this.state.switchArrow ? arrow : arrowHov} onClick={this.scrollToTop}
                        alt="Arrow" height="40px" width="40px" id="bottom-arrow"
                        onMouseOver={() => this.setState({ switchArrow: false })} onMouseOut={() => this.setState({ switchArrow: true })} />
                    <SocialMediaIcons ClassName="social-media-icons-bottom" />
                ©  {this.getYear()}  Abdul Wahid
                </footer>
            </div>
        );
    }


}