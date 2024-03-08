import React, { Component } from "react";
import reactnative from '../../public/images/cell-phone.png';
import csharp from '../../public/images/c-sharp.png';
import javascript from '../../public/images/icons8-javascript-96.png';
import mysql from '../../public/images/icons8-mysql-logo-100.png';
import react from '../../public/images/icons8-react-native-96.png';
import html from '../../public/images/icons8-html-5-96.png';
import css from '../../public/images/icons8-css-filetype-100.png';
import typescript from '../../public/images/typescript.png';
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
                    <img src={typescript} alt="Typescript" />
                    <h4>Typescript</h4>
                    
                </div>

                    <div className="skill-row">
                        <img src={react} alt="React" />
                        <h4>React</h4>
                    </div>

                    <div className="skill-row">
                        <img src={reactnative} alt="react-native" />
                        <h4>React Native</h4>
                    </div>

                    <div className="skill-row">
                        <img src={csharp} alt="c#" />
                        <h4>C# .Net</h4>
                    </div>

                    <div className="skill-row">
                        <img src={mysql} alt="mysql" />
                        <h4>SQL</h4>
                    </div>
                </div>


            </div>




        );
    }




}