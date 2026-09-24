import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase, MapPin, Rocket, Heart, Code } from '@phosphor-icons/react'
import robbyPhoto from '../assets/Robby.png'
import '../styles/about.css'

const stats = [
  { icon: Code,          label: 'Projects Built',      value: '10+' },
  { icon: GraduationCap, label: 'Years Learning',       value: '4'   },
  { icon: Code,          label: 'Technologies',         value: '15+' },
  { icon: Briefcase,     label: 'Industry Attachment',  value: '1'   },
]

const infoCards = [
  { icon: GraduationCap, label: 'Student',   value: 'BSc Mobile & Web Technologies',     color: '#22c55e' },
  { icon: MapPin,        label: 'Location',  value: 'Botswana',                           color: '#3b82f6' },
  { icon: Heart,         label: 'Passion',   value: 'Mobile Apps • Web Apps • Tech',      color: '#ef4444' },
  { icon: Rocket,        label: 'Goal',      value: 'Build solutions that create real impact', color: '#f59e0b' },
]

const journey = [
  { year: '2022', title: 'Started BSc Mobile & Web Technologies',  place: 'Botswana Accountancy College'              },
  { year: '2023', title: 'Built first web & mobile projects',       place: 'HTML, CSS, JS → React → React Native'      },
  { year: '2024', title: 'Industry Attachment',                     place: 'Botswana Geoscience Institute — BoreHive'  },
  { year: '2025', title: 'Networking, Telecom & VoIP',              place: 'CCNA 1 · Asterisk · VoIP Systems'          },
]

const KB_TEXT   = 'Keep Building'
const KB_DELAY  = 60 // ms per character

/* =========================================
   SCANNER HOOK
========================================= */

function usePhotoScanner(wrapRef) {
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()

        // Small delay so the section has settled
        setTimeout(() => {
          wrap.classList.add('scanning')

          // After animation ends: clean up + show corners
          setTimeout(() => {
            wrap.classList.remove('scanning')
            wrap.classList.add('scan-done')
          }, 1150)
        }, 400)
      },
      { threshold: 0.4 }
    )

    obs.observe(wrap)
    return () => obs.disconnect()
  }, [wrapRef])
}

/* =========================================
   KEEP BUILDING TYPEWRITER HOOK
========================================= */

function useTypewriter(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const textEl   = container.querySelector('.about-keep-building-text')
    const lineEl   = container.querySelector('.about-keep-building-line')
    const subEl    = container.querySelector('.about-keep-building-sub')
    const starEl   = container.querySelector('.about-keep-building-star')
    const cursor   = container.querySelector('.kb-cursor')

    // Build character spans
    KB_TEXT.split('').forEach((ch) => {
      const span = document.createElement('span')
      span.className = 'kb-char'
      span.textContent = ch === ' ' ? '\u00A0' : ch
      textEl.insertBefore(span, cursor)
    })

    const chars = textEl.querySelectorAll('.kb-char')
    let started = false

    function runTypewriter() {
      if (started) return
      started = true

      // Star first
      setTimeout(() => starEl.classList.add('visible'), 100)

      // Type characters one by one
      chars.forEach((char, i) => {
        setTimeout(() => {
          char.classList.add('visible')

          // After last char
          if (i === chars.length - 1) {
            setTimeout(() => {
              cursor.classList.add('blinking')
              lineEl.classList.add('expanded')

              setTimeout(() => subEl.classList.add('visible'), 500)
            }, 180)
          }
        }, 300 + i * KB_DELAY)
      })
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runTypewriter()
          obs.disconnect()
        }
      },
      { threshold: 0.6 }
    )

    obs.observe(container)
    return () => obs.disconnect()
  }, [containerRef])
}

/* =========================================
   ABOUT
========================================= */

export default function About() {
  const photoWrapRef = useRef(null)
  const kbRef        = useRef(null)

  usePhotoScanner(photoWrapRef)
  useTypewriter(kbRef)

  return (
    <div className="about-wrapper">
      <div className="about-container">

        {/* =========================================
            TOP ROW
        ========================================= */}

        <div className="about-top">

          {/* Left — title + stats */}
          <div className="about-top-left">
            <h2 className="section-title">
              Who I <span className="accent">Am</span>
            </h2>
            <p className="section-subtitle">
              A final-year BSc Mobile &amp; Web Technologies student passionate about
              building mobile and web applications that solve real-world problems.
            </p>

            <div className="about-stats">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="about-stat-card">
                    <Icon size={18} weight="duotone" style={{ color: 'var(--accent)' }} />
                    <span className="about-stat-number">{stat.value}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Centre — photo with scanner */}
          <div className="about-top-center">
            <div className="about-photo-card">
              <div className="about-photo-bg" />

              {/* Wrap clips the scanner beam */}
              <div className="about-photo-wrap" ref={photoWrapRef}>
                {/* Mask that scanner wipes away */}
                <div className="about-photo-reveal-mask" />

                {/* Scanner beam */}
                <div className="about-photo-scanner" />

                {/* Corner accents — appear after scan */}
                <div className="about-photo-corner about-photo-corner-tl" />
                <div className="about-photo-corner about-photo-corner-tr" />
                <div className="about-photo-corner about-photo-corner-bl" />
                <div className="about-photo-corner about-photo-corner-br" />

                <img
                  src={robbyPhoto}
                  alt="Robert Chingwete"
                  className="about-photo"
                />
              </div>

              <div className="about-photo-badge">
                <Rocket size={14} weight="bold" style={{ color: 'var(--accent)' }} />
                Turning ideas into real apps
              </div>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="about-top-right">
            {infoCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.label} className="about-info-card">
                  <div className="about-info-icon" style={{ background: card.color + '18' }}>
                    <Icon size={16} weight="duotone" style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="about-info-label">{card.label}</p>
                    <p className="about-info-value">{card.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* =========================================
            BOTTOM ROW
        ========================================= */}

        <div className="about-bottom">

          {/* Story */}
          <div className="about-story-card">
            <span className="about-section-mini">My Story</span>
            <h3 className="about-story-title">
              From <span className="accent">BoreHive</span> to Bigger Dreams
            </h3>
            <p className="about-bio-text">
              I'm a final-year student at Botswana Accountancy College studying BSc Mobile &amp; Web
              Technologies. My journey started with web development — HTML, CSS and JavaScript —
              then evolved into React, mobile development with React Native and Kotlin, and
              eventually into networking and telecommunications.
            </p>
            <p className="about-bio-text">
              In 2024 I completed an industry attachment at the Botswana Geoscience Institute
              where I worked on BoreHive, a real-world mobile application for accessing borehole
              data across Botswana. That experience pushed my skills and confirmed my passion
              for building things that actually matter.
            </p>
            <div className="about-quote">
              <span className="about-quote-mark">"</span>
              Outside of coding I explore networking concepts, VoIP systems using Asterisk, and
              mobile network simulations — areas that make my background different from a
              typical web developer.
            </div>
          </div>

          {/* Journey + Keep Building */}
          <div className="about-journey-card">
            <span className="about-section-mini">My Journey</span>
            <h3 className="about-journey-heading">My Journey</h3>

            <div className="about-timeline">
              {journey.map((item, i) => (
                <div key={i} className="about-timeline-item">
                  <div className="about-timeline-left">
                    <span className="about-timeline-year">{item.year}</span>
                    {i < journey.length - 1 && <div className="about-timeline-line" />}
                  </div>
                  <div className="about-timeline-right">
                    <p className="about-timeline-title">{item.title}</p>
                    <p className="about-timeline-place">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-pills">
              <div className="about-pill">
                <GraduationCap size={13} weight="bold" />
                BSc Mobile &amp; Web Technologies
              </div>
              <div className="about-pill">
                <Briefcase size={13} weight="bold" />
                BGI Attachment — 2024
              </div>
              <div className="about-pill">
                <MapPin size={13} weight="bold" />
                Botswana
              </div>
            </div>

            {/* ---- KEEP BUILDING TYPEWRITER ---- */}
            <div className="about-keep-building" ref={kbRef}>
              <span className="about-keep-building-star">✦ ✦ ✦</span>

              {/* Characters are injected by useTypewriter */}
              <div className="about-keep-building-text">
                <span className="kb-cursor" />
              </div>

              <div className="about-keep-building-line" />
              <span className="about-keep-building-sub">Ideas → Code → Impact</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}