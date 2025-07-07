'use client'

import { useState, useCallback } from 'react'
import { Link, scroller as scroll } from 'react-scroll'

export default function NavBar() {
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'absolute',
  })

  const scrollToTop = useCallback(() => {
    scroll.scrollTo('home', {
      duration: 500,
      smooth: 'easeInOutQuad',
      offset: -70,
    })
  }, [])

  const showFixedNavBar = useCallback(() => {
    setStyle({
      position: 'fixed',
      display: 'block',
      transition: 'opacity 0.8s ease-in-out',
      fontSize: '1.5rem',
      backgroundColor: '#333',
    })
  }, [])

  const notShowFixedNavBar = useCallback(() => {
    setStyle({ position: 'absolute' })
  }, [])

  return (
    <nav className="nav" id="navbar" style={style}>
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={notShowFixedNavBar}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={showFixedNavBar}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={showFixedNavBar}
            >
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={showFixedNavBar}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
