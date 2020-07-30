import React, { Component } from "react";
import blackPatternImage from '../../public/images/bkpattern.png';
import whitePatternImage from '../../public/images/whitepattern.png';
import NavBar from "./NavBar";
import SocialMediaIcons from "./SocialMediaIcons"
export default class Home extends Component {

    render() {
        return (
            <div className="home-container" id="home">
                <NavBar />
                <div className="home-content">
                    <h1 className="main-title" ref="/">
                        ABDUL WAHID
                    </h1>
                    <h4 className="sub-title" >SOFTWARE ENGINEER</h4>
                    <SocialMediaIcons ClassName="social-media-icons-top"/>
                    <img src={blackPatternImage} width="800" height="800" id="black-middle-pattern"></img>
                    <img src={whitePatternImage} width="700" height="700" id="white-bottom-pattern"></img>
                    <img src={whitePatternImage} width="700" height="700" id="white-top-pattern"></img>
                </div>
            </div>
        )
    }
}