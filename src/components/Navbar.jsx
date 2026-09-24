import { useState, useEffect } from 'react'
import {
  Sun,
  Moon,
  List,
  X,
  FilePdf,
  ArrowRight,
} from '@phosphor-icons/react'
import rcLogo from '../assets/rc-logo.png'
import '../styles/navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [themeAnimating, setThemeAnimating] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  // ------------------------------------------------------------
  // Scroll detection
  // ------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // ------------------------------------------------------------
  // Active section detection
  // ------------------------------------------------------------
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  // ------------------------------------------------------------
  // Close mobile menu when resizing back to desktop
  // ------------------------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ------------------------------------------------------------
  // Prevent body scroll while mobile menu is open
  // ------------------------------------------------------------
  useEffect(() => {
    if (menuOpen && window.innerWidth <= 768) {
      document.body.classList.add('nav-menu-open')
    } else {
      document.body.classList.remove('nav-menu-open')
    }

    return () => {
      document.body.classList.remove('nav-menu-open')
    }
  }, [menuOpen])

  // ------------------------------------------------------------
  // Navigation click
  // ------------------------------------------------------------
  const handleNavClick = (id) => (e) => {
    e.preventDefault()

    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setActiveSection(id)
    setMenuOpen(false)
  }

  // ------------------------------------------------------------
  // Theme toggle
  // ------------------------------------------------------------
  const handleThemeToggle = () => {
    if (themeAnimating) return

    setThemeAnimating(true)
    toggleTheme()

    setTimeout(() => {
      setThemeAnimating(false)
    }, 500)
  }

  // ------------------------------------------------------------
  // Logo click
  // ------------------------------------------------------------
  const handleLogoClick = (e) => {
    e.preventDefault()

    const home = document.getElementById('home')

    if (home) {
      home.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setActiveSection('home')
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-inner">

        {/* ------------------------------------------------------
            Logo
        ------------------------------------------------------ */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLogoClick}
          aria-label="Go to home"
        >
          <span className="navbar-logo-glow" />

          <img
            src={rcLogo}
            alt="RC Logo"
          />

          <span className="navbar-logo-line" />
        </a>

        {/* ------------------------------------------------------
            Desktop navigation
        ------------------------------------------------------ */}
        <div className="nav-desktop">
          {navLinks.map((link) => {
            const active = activeSection === link.id

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className={`nav-link ${active ? 'active' : ''}`}
              >
                <span>{link.label}</span>

                <span className="nav-link-indicator" />
              </a>
            )
          })}
        </div>

        {/* ------------------------------------------------------
            Right controls
        ------------------------------------------------------ */}
        <div className="navbar-actions">

        

          {/* Theme */}
          <button
            onClick={handleThemeToggle}
            className={`theme-toggle ${
              themeAnimating ? 'theme-toggle-animate' : ''
            }`}
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            <span className="theme-icon">
              {theme === 'dark' ? (
                <Sun size={19} weight="light" />
              ) : (
                <Moon size={19} weight="light" />
              )}
            </span>
          </button>

          {/* CV */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            <span className="cv-icon">
              <FilePdf size={16} weight="bold" />
            </span>

            <span className="cv-text">
              Download CV
            </span>

            <ArrowRight
              className="cv-arrow"
              size={16}
              weight="bold"
            />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-icon">
              {menuOpen ? (
                <X size={21} weight="light" />
              ) : (
                <List size={21} weight="light" />
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* --------------------------------------------------------
          Mobile menu
      -------------------------------------------------------- */}
      <div
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu-open' : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">

          <div className="mobile-menu-label">
            <span>Navigation</span>
            <span className="mobile-menu-line" />
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((link, index) => {
              const active = activeSection === link.id

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={`mobile-nav-link ${
                    active ? 'active' : ''
                  }`}
                  style={{
                    '--mobile-index': index,
                  }}
                >
                  <span className="mobile-nav-indicator" />

                  <span className="mobile-nav-number">
                    0{index + 1}
                  </span>

                  <span className="mobile-nav-label">
                    {link.label}
                  </span>

                  <ArrowRight
                    className="mobile-nav-arrow"
                    size={18}
                    weight="light"
                  />
                </a>
              )
            })}
          </div>

          <div className="mobile-menu-bottom">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cv-button"
            >
              <FilePdf size={17} weight="bold" />
              <span>Download CV</span>
              <ArrowRight size={17} weight="bold" />
            </a>


          </div>
        </div>
      </div>

      {/* --------------------------------------------------------
          Animated navbar bottom light
      -------------------------------------------------------- */}
      <div className="navbar-scan-line">
        <span />
      </div>
    </header>
  )
}