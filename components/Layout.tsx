'use client'

import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

export default function Layout() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
