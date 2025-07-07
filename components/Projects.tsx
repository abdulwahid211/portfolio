'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll'

import rajrani from '../public/images/rajrani.png'
import landsea from '../public/images/landsea.png'
import lembu from '../public/images/lembu.png'
import rfc from '../public/images/rfc.png'
import arrow from '../public/images/arrow.png'
import arrowHov from '../public/images/arrowHov.png'

import SocialMediaIcons from './ScoialMediaIcons'

const Projects: React.FC = () => {
  const [switchArrow, setSwitchArrow] = useState(true)

  const scrollToTop = useCallback(() => {
    scroll.scrollToTop()
  }, [])

  const getYear = () => new Date().getFullYear()

  const projects = [
    {
      name: 'Lembu App',
      src: lembu,
      href: 'https://www.lembu.app',
      alt: 'Lembu App IOS and Android app',
      techStack: 'React Native  \u2022  C# ASP.NET  \u2022  SQL',
      desc: 'helping local businesses track their orders',
    },
    {
      name: 'LandSea Recruitment',
      src: landsea,
      href: '/landsea',
      alt: 'LandSea Recruitment',
      techStack: 'React  \u2022  C# ASP.NET  \u2022  SQL',
      desc: 'Helping people find local jobs',
    },
    {
      name: 'Raj Rani Takeway',
      src: rajrani,
      href: '/rajrani',
      alt: 'Raj Rani takeway website',
      techStack: 'React  \u2022  TailwindCSS \u2022  NextJS',
      desc: 'static Indian takeway site',
    },
    {
      name: 'NFC Doorlock System',
      src: rfc,
      href: 'https://csproject.wordpress.com/',
      alt: 'NFC Doorlock System',
      techStack: 'Python  \u2022  Raspberry Pi  \u2022  NFC Reader',
      desc: 'NFC Doorlock System using Raspberry Pi',
    },
  ]

  return (
    <div id="projects" className="projects-container">
      <h1 id="projects-title" className="projects-title">
        Projects
      </h1>

      <div className="gallery">
        {projects.map((project, index) => (
          <div key={index} className="items">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.src}
                alt={project.alt}
                className="project-image"
              />
              <span className="text-wrapper">
                <span className="project-name">{project.name}</span>
                <br />
                <span className="tech-stack">{project.techStack}</span>
              </span>
            </a>
          </div>
        ))}
      </div>

      <footer className="projects-footer">
        <div
          onClick={scrollToTop}
          onMouseOver={() => setSwitchArrow(false)}
          onMouseOut={() => setSwitchArrow(true)}
          className="arrow-wrapper"
        >
          <Image
            src={switchArrow ? arrow : arrowHov}
            alt="Scroll to top arrow"
            width={40}
            height={40}
            id="bottom-arrow"
          />
        </div>

        <SocialMediaIcons classNamePosition="social-media-icons-bottom" />

        <p>© {getYear()} Abdul Wahid</p>
      </footer>
    </div>
  )
}

export default Projects
