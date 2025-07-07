'use client'

import React from 'react'

const About: React.FC = () => {
  return (
    <div id="about" className="px-4 py-8">
      <h1 id="about-me-title" className="text-2xl font-bold mb-4">
        About Me
      </h1>
      <p className="about-info text-base leading-relaxed max-w-prose">
        An IT professional with strong interests in software development,
        seeking a new opportunity to transition from test engineering to
        software development. Currently working on multiple projects, which I
        will soon share on my portfolio page. Meanwhile, you can check out my{' '}
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          GitHub repository
        </a>{' '}
        to watch my ongoing projects and connect with me on{' '}
        <a
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          LinkedIn
        </a>{' '}
        for updates.
      </p>
    </div>
  )
}

export default About
