'use client'

import Image from 'next/image'
import React from 'react'

// Import images
import reactnative from '../public/images/cell-phone.png'
import csharp from '../public/images/c-sharp.png'
import javascript from '../public/images/icons8-javascript-96.png'
import mysql from '../public/images/icons8-mysql-logo-100.png'
import react from '../public/images/icons8-react-native-96.png'
import html from '../public/images/icons8-html-5-96.png'
import css from '../public/images/icons8-css-filetype-100.png'
import typescript from '../public/images/typescript.png'

const skills = [
  { src: html, alt: 'HTML', label: 'HTML' },
  { src: css, alt: 'CSS', label: 'CSS' },
  { src: javascript, alt: 'JavaScript', label: 'JavaScript' },
  { src: typescript, alt: 'TypeScript', label: 'TypeScript' },
  { src: react, alt: 'React', label: 'React' },
  { src: reactnative, alt: 'React Native', label: 'React Native' },
  { src: csharp, alt: 'C#', label: 'C# .Net' },
  { src: mysql, alt: 'MySQL', label: 'SQL' },
]

export default function Skills() {
  return (
    <div id="skills">
      <h1 id="skill-main">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.label} className="skills-item">
            <Image src={skill.src} alt={skill.alt} width={80} height={80} />
            <h4 className="skill-label">{skill.label}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
