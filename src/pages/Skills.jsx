import { useEffect, useRef, useCallback } from 'react'
import {
  SiReact, SiKotlin, SiJavascript, SiPhp, SiFirebase,
  SiOpenjdk, SiTypescript, SiHtml5, SiGit,
  SiGithub, SiFigma, SiMysql, SiPython
} from 'react-icons/si'
import {
  DeviceMobile, Globe, Code, Database,
  WifiHigh, Wrench, Desktop
} from '@phosphor-icons/react'
import '../styles/skills.css'

const skillCategories = [
  {
    id: 'mobile',
    icon: DeviceMobile,
    title: 'Mobile Development',
    color: '#61DAFB',
    skills: [
      { name: 'React Native', icon: SiReact,    color: '#61DAFB', desc: 'Cross-platform mobile apps. Used in BoreHive and MADI Wallet.' },
      { name: 'Kotlin',       icon: SiKotlin,   color: '#7F52FF', desc: 'Native Android development for high-performance mobile apps.' },
      { name: 'Expo',         icon: SiReact,    color: '#000000', desc: 'Rapid React Native development with managed workflows.' },
      { name: 'Android Dev',  icon: SiOpenjdk,  color: '#f89820', desc: 'Android application development using Java and Kotlin.' },
    ],
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    color: '#22c55e',
    skills: [
      { name: 'React',       icon: SiReact,      color: '#61DAFB', desc: 'Component-based UIs. Used in Asset Inventory System and personal projects.' },
      { name: 'JavaScript',  icon: SiJavascript, color: '#F7DF1E', desc: 'Core language for web and mobile development logic.' },
      { name: 'HTML5',       icon: SiHtml5,      color: '#E34F26', desc: 'Semantic markup for modern responsive websites.' },
      { name: 'TypeScript',  icon: SiTypescript, color: '#3178C6', desc: 'Type-safe JavaScript for scalable applications.' },
      { name: 'PHP',         icon: SiPhp,        color: '#777BB4', desc: 'Backend scripting for web applications and CRUD systems.' },
    ],
  },
  {
    id: 'programming',
    icon: Code,
    title: 'Programming Languages',
    color: '#f59e0b',
    skills: [
      { name: 'Java',   icon: SiOpenjdk, color: '#f89820', desc: 'OOP fundamentals and academic projects including Garage Parts System.' },
      { name: 'Kotlin', icon: SiKotlin,  color: '#7F52FF', desc: 'Modern Android development language with concise syntax.' },
      { name: 'PHP',    icon: SiPhp,     color: '#777BB4', desc: 'Server-side scripting for web backends and APIs.' },
      { name: 'Python', icon: SiPython,  color: '#3776AB', desc: 'Currently learning — scripting and basic automation.' },
    ],
  },
  {
    id: 'backend',
    icon: Database,
    title: 'Backend & Database',
    color: '#ef4444',
    skills: [
      { name: 'Firebase',  icon: SiFirebase, color: '#FFCA28', desc: 'Real-time database, auth and cloud functions for mobile apps.' },
      { name: 'MySQL',     icon: SiMysql,    color: '#4479A1', desc: 'Relational database design and querying for web applications.' },
      { name: 'REST APIs', icon: Globe,      color: '#22c55e', desc: 'API integration and consumption in mobile and web projects.' },
    ],
  },
  {
    id: 'networking',
    icon: WifiHigh,
    title: 'Networking & Telecom',
    color: '#8b5cf6',
    skills: [
      { name: 'Network Fundermentals',        icon: WifiHigh, color: '#1BA0D7', desc: 'Networking fundamentals — IP addressing, routing and switching.' },
      { name: 'Asterisk',      icon: WifiHigh, color: '#F67819', desc: 'VoIP server setup with extensions, IVR and voicemail configuration.' },
      { name: 'VoIP / SIP',    icon: WifiHigh, color: '#8b5cf6', desc: 'SIP protocol, softphones and call routing between extensions.' },
      { name: 'Packet Tracer', icon: WifiHigh, color: '#1BA0D7', desc: 'Network simulation and topology design for academic projects.' },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools & Software',
    color: '#06b6d4',
    skills: [
      { name: 'Git',    icon: SiGit,    color: '#F05032', desc: 'Version control for all personal and academic projects.' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', desc: 'Code hosting, collaboration and project management.' },
      { name: 'Figma',  icon: SiFigma,  color: '#F24E1E', desc: 'UI/UX design and prototyping for mobile and web projects.' },
      { name: 'VS Code',icon: Code,     color: '#007ACC', desc: 'Primary code editor for all development work.' },
    ],
  },
  {
    id: 'itsystems',
    icon: Desktop,
    title: 'IT & System Administration',
    color: '#10b981',
    skills: [
      { name: 'Computer Hardware',     icon: Desktop,  color: '#10b981', desc: 'Assembling, troubleshooting and maintaining desktop and laptop hardware.' },
      { name: 'Windows Administration',icon: Desktop,  color: '#0078D4', desc: 'Installing, configuring and managing Windows OS environments.' },
      { name: 'System Troubleshooting',icon: Wrench,   color: '#f59e0b', desc: 'Diagnosing and resolving software, hardware and network issues.' },
      { name: 'Network Setup',         icon: WifiHigh, color: '#8b5cf6', desc: 'Setting up and configuring LAN networks, routers and switches.' },
      { name: 'Software Installation', icon: Desktop,  color: '#06b6d4', desc: 'Deploying and configuring software across different environments.' },
      { name: 'ICT Support',           icon: Wrench,   color: '#22c55e', desc: 'End-user technical support and ICT system maintenance — BGI attachment.' },
    ],
  },
]

/* =========================================
   MOUSE TILT + SPOTLIGHT
========================================= */

function handleCardMouseMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
  card.style.setProperty('--card-rotate-x', `${((y / rect.height) - 0.5) * -4}deg`)
  card.style.setProperty('--card-rotate-y', `${((x / rect.width) - 0.5) * 4}deg`)
}

function handleCardMouseLeave(e) {
  const card = e.currentTarget
  card.style.setProperty('--card-rotate-x', '0deg')
  card.style.setProperty('--card-rotate-y', '0deg')
}

/* =========================================
   SCROLL REVEAL
========================================= */

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.reveal').forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])
  return ref
}

/* =========================================
   SKILLS PAGE
========================================= */

export default function Skills() {
  const ref = useReveal()

  return (
    <div className="skills-wrapper" ref={ref}>
      <div className="skills-container">

        <div className="skills-header reveal">
          <h2 className="section-title">
            My <span className="accent">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with — grouped by what I actually
            use them for, not just a list of logos.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon
            return (
              <div
                key={category.id}
                className="skills-card reveal"
                style={{ transitionDelay: `${catIndex * 0.08}s` }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="skills-card-header">
                  <div
                    className="skills-card-icon"
                    style={{
                      background: category.color + '18',
                      border: `1px solid ${category.color}33`,
                    }}
                  >
                    <CatIcon size={20} style={{ color: category.color }} weight="duotone" />
                  </div>
                  <h3 className="skills-card-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-item-header">
                          <div
                            className="skill-icon-wrap"
                            style={{ background: skill.color + '18' }}
                          >
                            <SkillIcon size={13} style={{ color: skill.color }} />
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <p className="skill-desc">{skill.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="skills-note reveal">
          <p>
            Skill descriptions reflect real project experience and honest
            self-assessment — not arbitrary numbers.
          </p>
        </div>

      </div>
    </div>
  )
}