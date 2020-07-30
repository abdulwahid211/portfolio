import React, { Component } from "react";
import linkedinNon from '../../public/images/linkNon.png';
import twitterNon from '../../public/images/twitterNon.png';
import gitNon from '../../public/images/gitNon.png';

import linkedinHov from '../../public/images/linkHov.png';
import twitterHov from '../../public/images/twitterHov.png';
import gitHov from '../../public/images/gitHov.png';

import cvNon from '../../public/images/cvNon.png';
import cvHov from '../../public/images/cvHov.png';


export default class ScoialMediaIcons extends Component {

    constructor(props) {
        super();

        this.social_media_icon_width = "40"
        this.social_media_icon_height = "40"

        this.state = {
            switchLinked: true,
            switchGit: true,
            switchTwitter: true,
            switchCV: true,
        }
    }


    render() {
        return (
            <div className={this.props.ClassName}>
                <a href="https://www.linkedin.com/in/abdul-wahid-4baa8684/" className="linkedin" id="linkedin" onMouseOver={() => this.setState({ switchLinked: false })} onMouseOut={() => this.setState({ switchLinked: true })}>
                    <img src={this.state.switchLinked ? linkedinNon : linkedinHov} width={this.social_media_icon_width} height={this.social_media_icon_height} />
                </a>
                <a href="https://github.com/abdulwahid211" className="github"> <img src={this.state.switchGit ? gitNon : gitHov} onMouseOver={() => this.setState({ switchGit: false })} onMouseOut={() => this.setState({ switchGit: true })}
                    width={this.social_media_icon_width} height={this.social_media_icon_height} /> </a>
                <a href="https://twitter.com/abdulwahid211" className="twitter"> <img src={this.state.switchTwitter ? twitterNon : twitterHov}
                    onMouseOver={() => this.setState({ switchTwitter: false })} onMouseOut={() => this.setState({ switchTwitter: true })}
                    width={this.social_media_icon_width} height={this.social_media_icon_height} /> </a>
                <a href="../files/AbdulWahid.pdf" className="cv"> <img src={this.state.switchCV ? cvNon : cvHov} onMouseOver={() => this.setState({ switchCV: false })} onMouseOut={() => this.setState({ switchCV: true })}
                    width={this.social_media_icon_width} height={this.social_media_icon_height} /> </a>
            </div>
        );
    }


}