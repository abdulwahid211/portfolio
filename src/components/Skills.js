import React, { Component } from "react";
import python from '../../public/images/icons8-python-96.png';
import java from '../../public/images/icons8-java-96.png';
import javascript from '../../public/images/icons8-javascript-96.png';
import mysql from '../../public/images/icons8-mysql-logo-100.png';
import react from '../../public/images/icons8-react-native-96.png';
import html from '../../public/images/icons8-html-5-96.png';
import css from '../../public/images/icons8-css-filetype-100.png';
import git from '../../public/images/icons8-git-100.png';
export default class Skills extends Component {


    render() {
        return (


            <div id="skills">
                <h1 id="skill-main"> Skills</h1>

                <div className="skill-col">
                    <div className="skill-row">
                        <img src={html} alt="html" />
                        <h4>HTML</h4>
                    </div>

                    <div className="skill-row">
                        <img src={css} alt="css" />
                        <h4>CSS</h4>
                    </div>

                    <div className="skill-row">
                        <img src={javascript} alt="javascript" />
                        <h4>Javascript</h4>
                    </div>

                    <div className="skill-row">
                        <img src={java} alt="java" />
                        <h4>Java</h4>
                    </div>

                    <div className="skill-row">
                        <img src={python} alt="python" />
                        <h4>Python</h4>
                    </div>

                    <div className="skill-row">
                        <img src={mysql} alt="mysql" />
                        <h4>SQL</h4>
                    </div>

                    <div className="skill-row">
                        <img src={react} alt="react" />
                        <h4>React</h4>
                    </div>

                    <div className="skill-row">
                    <img src={git} alt="git" />
                    <h4>Git</h4>
                </div>
                </div>


            </div>




        );
    }




}