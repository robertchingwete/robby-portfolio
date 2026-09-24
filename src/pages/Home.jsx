import { useState, useRef } from 'react'
import { ArrowRight, EnvelopeSimple, X, ArrowSquareOut } from '@phosphor-icons/react'
import { SiReact, SiKotlin, SiJavascript, SiPhp, SiFirebase, SiOpenjdk } from 'react-icons/si'
import winkingAvatar from '../assets/winking-avatar.json'
import '../styles/home.css'
import { Player } from '@lottiefiles/react-lottie-player'
import wavingCharacter from '../assets/waving-character.json'
const techStack = [
  { label: 'React Native', icon: SiReact, color: '#61DAFB' },
  { label: 'React', icon: SiReact, color: '#61DAFB' },
  { label: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { label: 'Java', icon: SiOpenjdk, color: '#f89820' },
  { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { label: 'PHP', icon: SiPhp, color: '#777BB4' },
  { label: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
]

const playStoreUrl = 'https://play.google.com/store'
const appStoreUrl = 'https://apps.apple.com'

function scrollToSection(id) {
  return function(e) {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}



export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal() { setModalOpen(true) }
  function closeModal() { setModalOpen(false) }
  function stopProp(e) { e.stopPropagation() }


  const playerRef = useRef(null)

  return (
    <div className="home-wrapper">

      <div className="home-glow-1" />
      <div className="home-glow-2" />

      <div className="home-container">

        <div className="home-text">

          <div className="home-greeting">
           <div className="home-avatar">
  <div className="home-avatar-ring" />
  <Player
    autoplay
    loop
    src={winkingAvatar}
    style={{
      width: '36px',
      height: '36px',
      background: 'transparent'
    }}
  />
</div>
            <div className="home-greeting-text">
              <span className="home-greeting-dot" />
              HELLO, I'M
            </div>
          </div>

          <h1 className="home-name">
            I'm <span className="home-name-accent">Robert</span>
            <br />
            <span className="home-name-sub">Chingwete</span>
          </h1>

          <p className="home-bio">
            Building mobile applications, web apps and digital solutions
            while exploring networking, telecommunications and emerging technologies
            that connect people and systems.
          </p>

          <div className="home-tech">
            {techStack.map(function(tech) {
              const Icon = tech.icon
              return (
                <span key={tech.label} className="home-tech-pill">
                  <Icon size={14} style={{ color: tech.color, flexShrink: 0 }} />
                  {tech.label}
                </span>
              )
            })}
          </div>

          <div className="home-cta">
            <a href="#projects" onClick={scrollToSection('projects')} className="btn-primary">
              Explore My Work
              <ArrowRight size={18} weight="bold" />
            </a>

            <button className="btn-secondary" onClick={openModal}>
              <ArrowSquareOut size={18} weight="bold" />
              Latest Project
            </button>

            <a href="#contact" onClick={scrollToSection('contact')} className="btn-ghost">
              <EnvelopeSimple size={18} weight="bold" />
              Contact Me
            </a>
          </div>

        </div>

      <div className="home-photo-wrapper">
  <div className="home-photo-glow" />
 <Player
  ref={playerRef}
  autoplay
  loop
  src={wavingCharacter}
  style={{ 
    height: '420px', 
    width: '100%',
    background: 'transparent'
  }}
  onEvent={event => {
    if (event === 'complete') {
      playerRef.current?.seek(0)
      playerRef.current?.play()
    }
  }}
/>
</div>

      </div>

      <div className="home-scroll-indicator">
        <div className="home-scroll-dot" />
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={stopProp}>

            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-tag">Latest Project</span>
                <h2 className="modal-title">BoreHive</h2>
                <p className="modal-subtitle">Mobile Application — React Native</p>
              </div>
              <button className="modal-close" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>

            <p className="modal-desc">
              A cross-platform mobile application providing access to Botswana borehole
              information including location, status and detailed data. Built with React Native,
              Expo, and integrated with maps and live APIs.
            </p>

            <div className="modal-tech-row">
              <span className="modal-tech-pill">React Native</span>
              <span className="modal-tech-pill">Expo</span>
              <span className="modal-tech-pill">Maps API</span>
              <span className="modal-tech-pill">Firebase</span>
            </div>

            <div className="modal-links">
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="modal-store-btn modal-playstore">
                Google Play
              </a>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="modal-store-btn modal-appstore">
                App Store
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}