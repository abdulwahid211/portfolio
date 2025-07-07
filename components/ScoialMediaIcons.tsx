'use client'
import { useState } from 'react'
import linkedinNon from '../public/images/linkNon.png'
import twitterNon from '../public/images/twitterNon.png'
import gitNon from '../public/images/gitNon.png'

import linkedinHov from '../public/images/linkHov.png'
import twitterHov from '../public/images/twitterHov.png'
import gitHov from '../public/images/gitHov.png'

import cvNon from '../public/images/cvNon.png'
import cvHov from '../public/images/cvHov.png'

interface SocialMediaIconsProps {
  switchLinked: boolean
  switchGit: boolean
  switchTwitter: boolean
  switchCV: boolean
}

export default function SocialMediaIcons({
  classNamePosition,
}: {
  classNamePosition: string
}) {
  const [switchIcons, setSwitchIcons] = useState<SocialMediaIconsProps>({
    switchLinked: true,
    switchGit: true,
    switchTwitter: true,
    switchCV: true,
  })

  const iconSize = {
    social_media_icon_width: 30,
    social_media_icon_height: 30,
  }

  return (
    <div className={classNamePosition}>
      <a
        href="https://www.linkedin.com/in/abdul-wahid-4baa8684/"
        className="linkedin"
        id="linkedin"
        onMouseOver={() =>
          setSwitchIcons((prev) => ({ ...prev, switchLinked: false }))
        }
        onMouseOut={() =>
          setSwitchIcons((prev) => ({ ...prev, switchLinked: true }))
        }
      >
        <img
          src={switchIcons.switchLinked ? linkedinNon.src : linkedinHov.src}
          width={iconSize.social_media_icon_width}
          height={iconSize.social_media_icon_height}
        />
      </a>
      <a href="https://github.com/abdulwahid211" className="github">
        {' '}
        <img
          src={switchIcons.switchGit ? gitNon.src : gitHov.src}
          onMouseOver={() =>
            setSwitchIcons((prev: SocialMediaIconsProps) => ({
              ...prev,
              switchGit: false,
            }))
          }
          onMouseOut={() =>
            setSwitchIcons((prev: SocialMediaIconsProps) => ({
              ...prev,
              switchGit: true,
            }))
          }
          width={iconSize.social_media_icon_width}
          height={iconSize.social_media_icon_height}
        />{' '}
      </a>
      {/* <a href="../files/AbdulWahid.pdf" className="cv"> <img src={this.state.switchCV ? cvNon : cvHov} onMouseOver={() => this.setState({ switchCV: false })} onMouseOut={() => this.setState({ switchCV: true })}
                    width={this.social_media_icon_width} height={this.social_media_icon_height} /> </a> */}
    </div>
  )
}
