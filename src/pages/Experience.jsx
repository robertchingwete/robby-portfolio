import { useEffect, useRef, useCallback } from 'react'
import {
  GraduationCap,
  WifiHigh,
  Briefcase,
  Globe,
  HardDrives,
  Desktop,
  Warehouse,
  Phone,
  Leaf,
  Wallet,
  Signature,
  Scissors,
  Brain,
} from '@phosphor-icons/react'
import '../styles/experience.css'

const timeline = [
  {
    id: 'bac-start',
    year: '2022',
    side: 'left',
    icon: GraduationCap,
    color: '#3b82f6',
    badge: 'Degree',
    title: 'BSc Mobile & Web Technologies',
    company: 'Botswana Accountancy College',
    period: '2022 — 2026',
    description:
      'Started a four-year degree covering the full spectrum of modern software development — mobile, web, databases, networking and telecommunications. The programme blends theory with practical projects each semester.',
    points: [
      'Core modules: Mobile Development, Web Development, OOP & Data Structures',
      'Systems modules: Database Design, Software Engineering, System Analysis',
      'Infrastructure modules: Networking Fundamentals, Telecommunications',
    ],
    techs: ['Java', 'Python', 'React', 'React Native', 'SQL', 'HTML/CSS'],
  },
  {
    id: 'ccna',
    year: '2023',
    side: 'right',
    icon: WifiHigh,
    color: '#1BA0D7',
    badge: 'Certification',
    title: 'Networking Fundamentals',
    company: 'Cisco Networking Academy',
    period: '2023',
    description:
      'Completed the first module of the Cisco Certified Network Associate curriculum, building a solid foundation in how data moves across networks — from physical cables to IP addressing and routing.',
    points: [
      'Studied OSI & TCP/IP models, Ethernet, and switching concepts',
      'Configured basic routers and switches in Packet Tracer labs',
      'Learned subnetting, VLSM, and IPv4/IPv6 addressing schemes',
    ],
    techs: ['Cisco Packet Tracer', 'IPv4 / IPv6', 'Subnetting', 'Routing', 'Switching'],
  },
  {
    id: 'mobile-network',
    year: '2023',
    side: 'left',
    icon: Phone,
    color: '#06b6d4',
    badge: 'Academic Project',
    title: 'Mobile Network Simulation',
    company: 'Botswana Accountancy College',
    period: '2023',
    description:
      'Designed and simulated a complete cellular mobile network topology for a university telecommunications module. The simulation modelled base stations, core network components, and handoff behaviour between cells.',
    points: [
      'Built a multi-cell GSM/LTE topology inside Cisco Packet Tracer',
      'Simulated handoff (handover) between adjacent base stations',
      'Documented signal propagation paths and network load distribution',
      'Presented findings covering coverage planning and frequency reuse',
    ],
    techs: ['Cisco Packet Tracer', 'LTE Concepts', 'GSM Architecture', 'Network Design'],
  },
  {
    id: 'bgi',
    year: '2024',
    side: 'right',
    icon: Briefcase,
    color: '#22c55e',
    badge: 'Industry Attachment',
    title: 'Software Development Attachment',
    company: 'Botswana Geoscience Institute (BGI)',
    period: 'Early 2024',
    description:
      'Joined the BGI ICT team as an industry attachment student, contributing to real production software used by field geologists and staff across Botswana. Worked inside a professional Agile team for the first time.',
    points: [
      'Integrated REST APIs and Firebase services into the BoreHive mobile app',
      'Participated in sprint planning, stand-ups, and code reviews',
      'Assisted with ICT helpdesk — system maintenance and software installation',
      'Gained hands-on experience deploying to Android via Expo EAS Build',
    ],
    techs: ['React Native', 'Expo', 'Firebase', 'REST APIs', 'Android', 'Git'],
  },
  {
    id: 'smallstock',
    year: '2024',
    side: 'left',
    icon: Globe,
    color: '#f59e0b',
    badge: 'Web Project',
    title: 'Smallstock Expo — Event Website',
    company: 'Personal Project',
    period: 'Mid 2024',
    description:
      'Built a responsive promotional website for a livestock and smallstock agricultural expo. The site presented event schedules, exhibitor listings, and registration info in a clean, mobile-first layout.',
    points: [
      'Designed and coded a fully responsive multi-section landing page',
      'Implemented smooth-scroll navigation and an exhibitor directory',
      'Optimised assets and layout for low-bandwidth rural visitors',
    ],
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'borehive',
    year: '2024',
    side: 'right',
    icon: HardDrives,
    color: '#10b981',
    badge: 'Mobile App',
    title: 'BoreHive — Borehole Data App',
    company: 'BGI Attachment Project',
    period: 'Mid 2024',
    description:
      'A cross-platform mobile application that gives BGI field teams and engineers on-demand access to Botswana\'s national borehole database. Data is fetched from a REST API and cached in Firebase for offline resilience.',
    points: [
      'Built with React Native and Expo for both Android and iOS targets',
      'Integrated Firebase Firestore for offline-first data caching',
      'Implemented map view overlaying borehole locations on a national grid',
      'Added search and filtering by district, depth, and water yield',
    ],
    techs: ['React Native', 'Expo', 'Firebase', 'REST API', 'Maps', 'Android / iOS'],
  },
  {
    id: 'garage',
    year: '2024',
    side: 'left',
    icon: Desktop,
    color: '#8b5cf6',
    badge: 'Desktop App',
    title: 'Garage Parts System',
    company: 'Academic Project',
    period: 'Late 2024',
    description:
      'A Java Swing desktop application for managing a vehicle repair garage\'s spare parts inventory, supplier records, and sales transactions. Built as a core software engineering module deliverable.',
    points: [
      'Designed a normalised relational schema with MySQL for parts and suppliers',
      'Implemented full CRUD operations via JDBC with prepared statements',
      'Built a Swing GUI with search, filtering, and stock-level alerts',
      'Packaged as a runnable JAR with an embedded database config',
    ],
    techs: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'OOP', 'MVC Pattern'],
  },
  {
    id: 'assets',
    year: '2024',
    side: 'right',
    icon: Warehouse,
    color: '#ec4899',
    badge: 'Web App',
    title: 'Asset Inventory System',
    company: 'Academic Project',
    period: 'Late 2024',
    description:
      'A React web application for tracking organisational assets — computers, furniture, and equipment — across departments. Includes assignment history, depreciation tracking, and exportable reports.',
    points: [
      'Built with React, using Context API for global state management',
      'Firebase Firestore as the real-time database backend',
      'Role-based views for admins (full CRUD) and staff (read & request)',
      'Export to CSV for audit reporting',
    ],
    techs: ['React', 'Firebase', 'Context API', 'CSS Modules', 'CSV Export'],
  },
  {
    id: 'voip',
    year: '2025',
    side: 'left',
    icon: Phone,
    color: '#F67819',
    badge: 'Telecoms Project',
    title: 'VoIP System — Asterisk PBX',
    company: 'Self-directed / Telecommunications Module',
    period: 'Early 2025',
    description:
      'Set up a fully functional office VoIP system using Asterisk open-source PBX software on a Linux server. The system handled internal extension dialling, inbound/outbound SIP trunks, IVR menus, voicemail, and conference rooms.',
    points: [
      'Installed and configured Asterisk on Ubuntu Server with FreePBX GUI',
      'Set up SIP trunks, dial plans, and extension blocks in extensions.conf',
      'Built an IVR menu with time-based routing for business hours',
      'Configured voicemail-to-email, music on hold, and conference bridges',
      'Tested end-to-end calls using Zoiper softphones on mobile and desktop',
    ],
    techs: ['Asterisk PBX', 'FreePBX', 'SIP Protocol', 'Ubuntu Server', 'Zoiper', 'Dial Plans'],
  },
  {
    id: 'greengarden',
    year: '2026',
    side: 'right',
    icon: Leaf,
    color: '#16a34a',
    badge: 'Mobile App',
    title: 'Green Garden — Plant Care App',
    company: 'Personal Project',
    period: 'Early 2026',
    description:
      'A React Native mobile app that helps gardeners track their plants, set watering reminders, and identify common issues. Users can log each plant with photos, care notes, and a custom watering schedule.',
    points: [
      'Built with React Native (Expo) and Firebase for user data and image storage',
      'Push notifications via Expo Notifications for watering reminders',
      'Plant identification feature using a third-party image recognition API',
      'Clean, nature-inspired UI with light and dark mode support',
    ],
    techs: ['React Native', 'Expo', 'Firebase', 'Push Notifications', 'Image API'],
  },
  {
    id: 'kaylanluxe',
    year: '2026',
    side: 'left',
    icon: Scissors,
    color: '#f43f5e',
    badge: 'Web Project',
    title: 'Kaylan Luxe Salon — Beauty Website',
    company: 'Personal Project',
    period: 'Early 2026',
    description:
      'Designed and built an elegant promotional website for Kaylan Luxe, a local beauty salon. The site showcases services, pricing and a contact/booking section with a feminine and modern aesthetic.',
    points: [
      'Designed a multi-section landing page with an elegant feminine look and feel',
      'Built a services and pricing showcase with smooth hover interactions',
      'Implemented a gallery section to display salon work and transformations',
      'Fully responsive layout optimised for mobile and desktop browsers',
      'Deployed live on Netlify with a custom domain',
    ],
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify'],
  },
  {
    id: 'graduation',
    year: '2026',
    side: 'right',
    icon: GraduationCap,
    color: '#3b82f6',
    badge: 'Milestone',
    title: 'Graduated — BSc Mobile & Web Technologies',
    company: 'Botswana Accountancy College',
    period: '2026',
    description:
      'Completed four years of study and graduated with a BSc in Mobile & Web Technologies. The programme covered the full stack of modern software — from low-level networking to production mobile apps — and included an industry attachment at BGI.',
    points: [
      'Completed 8 semesters covering mobile, web, databases, and networking',
      'Industry attachment at Botswana Geoscience Institute (BGI)',
      'Final-year projects: Green Garden app, VoIP System and CyberSecurity App',
    ],
    techs: ['React Native', 'React', 'Java', 'Firebase', 'MySQL', 'Cisco Networking', 'Asterisk' ],
  },
  {
    id: 'minemind',
    year: '2026',
    side: 'left',
    icon: Brain,
    color: '#f59e0b',
    badge: 'Mobile App',
    title: 'MineMind AI — Mining Procurement Platform',
    company: 'Personal Project',
    period: '2026',
    description:
      'An AI-powered procurement and inventory platform built for the mining industry. MineMind uses artificial intelligence to predict stockouts, reduce equipment downtime and automate the procurement process through a smart supplier marketplace.',
    points: [
      'AI-powered stockout prediction with automated alerts for critical parts',
      'Automated purchase order generation and supplier marketplace integration',
      'Real-time inventory monitoring with smart reorder point calculations',
      'Downtime analytics and reporting dashboard for operations teams',
      'Built with React Native and Firebase for cross-platform mobile delivery',
    ],
    techs: ['React Native', 'Expo', 'Firebase', 'AI / ML', 'React', 'Analytics'],
  },
  {
    id: 'madi',
    year: '2026',
    side: 'right',
    icon: Wallet,
    color: '#22c55e',
    badge: 'In Progress',
    title: 'MADI Wallet — Digital Wallet App',
    company: 'Personal Project',
    period: '2026 — Present',
    description:
      'A fintech mobile wallet application built for the Botswana market. MADI allows users to store value, send and receive money, pay bills, and view transaction history — all within a secure, clean mobile experience.',
    points: [
      'React Native (Expo) with a Firebase backend for auth and real-time data',
      'Biometric authentication (fingerprint / face ID) for secure login',
      'P2P transfers, QR code payments, and transaction history with receipts',
      'Custom design system with a finance-focused dark and light theme',
    ],
    techs: ['React Native', 'Expo', 'Firebase', 'Biometrics', 'QR Payments', 'Fintech'],
  },
  {
    id: 'digsig',
    year: '2026',
    side: 'left',
    icon: Signature,
    color: '#a855f7',
    badge: 'In Progress',
    title: 'USign — Digital Signature Web App',
    company: 'Personal Project',
    period: '2026 — Present',
    description:
      'A web application built with PHP and JavaScript that lets users upload documents and collect digital signatures. Signatories receive an email link, sign via a canvas pad or typed signature, and a stamped PDF is returned to the sender.',
    points: [
      'Built with PHP (CodeIgniter 4) backend and vanilla JavaScript frontend',
      'PDF stamping with TCPDF — embeds signature image and metadata onto the document',
      'Email delivery via PHPMailer with tokenised, time-limited signing links',
      'Signature capture using an HTML5 Canvas pad with mouse and touch support',
      'Audit trail stored in MySQL — timestamp, IP address, and signer identity per signature',
      'Microsoft Azure AD sign-in integration for organisational user authentication',
    ],
    techs: ['PHP', 'CodeIgniter 4', 'JavaScript', 'MySQL', 'TCPDF', 'PHPMailer', 'Canvas API', 'Azure AD'],
  },
]

/* =========================================
   MOUSE TILT
========================================= */

function handleCardMouseMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
  card.style.setProperty('--card-rotate-x', `${((y / rect.height) - 0.5) * -3}deg`)
  card.style.setProperty('--card-rotate-y', `${((x / rect.width) - 0.5) * 3}deg`)
}

function handleCardMouseLeave(e) {
  const card = e.currentTarget
  card.style.setProperty('--card-rotate-x', '0deg')
  card.style.setProperty('--card-rotate-y', '0deg')
}

/* =========================================
   CARD
========================================= */

function EntryCard({ entry }) {
  const Icon = entry.icon
  return (
    <div
      className="exp-card"
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="exp-card-inner">

        <div className="exp-card-header">
          <div
            className="exp-icon-wrap"
            style={{
              background: entry.color + '1a',
              border: `1px solid ${entry.color}35`,
              '--icon-color': entry.color,
            }}
          >
            <Icon size={20} weight="duotone" style={{ color: entry.color }} />
          </div>

          <div className="exp-card-meta">
            <h3 className="exp-card-title">{entry.title}</h3>
            <p className="exp-card-company">{entry.company}</p>
            <div className="exp-card-period-row">
              <span className="exp-period">{entry.period}</span>
              <span className="exp-badge">{entry.badge}</span>
            </div>
          </div>
        </div>

        <p className="exp-card-desc">{entry.description}</p>

        {entry.points && entry.points.length > 0 && (
          <ul className="exp-points">
            {entry.points.map((point, i) => (
              <li
                key={point}
                className="exp-point"
                style={{ '--point-index': i }}
              >
                <span className="exp-point-dot" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.techs && entry.techs.length > 0 && (
          <div className="exp-techs">
            {entry.techs.map((tech, i) => (
              <span
                key={tech}
                className="exp-tech-pill"
                style={{ '--pill-index': i }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

/* =========================================
   EXPERIENCE PAGE
========================================= */

export default function Experience() {
  const wrapperRef   = useRef(null)
  const trackFillRef = useRef(null)
  const entryRefs    = useRef([])

  useEffect(() => {
    const header = wrapperRef.current?.querySelector('.exp-header')
    if (!header) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { header.classList.add('revealed'); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(header)
    return () => obs.disconnect()
  }, [])

  const onScroll = useCallback(() => {
    const wrapper = wrapperRef.current
    const fill    = trackFillRef.current
    if (!wrapper || !fill) return

    const { top, height } = wrapper.getBoundingClientRect()
    const vh = window.innerHeight

    const progress = Math.min(1, Math.max(0, (-top + vh * 0.55) / (height + vh * 0.3)))
    fill.style.transform = `scaleY(${progress})`

    entryRefs.current.forEach((el) => {
      if (!el) return
      const nodeTop = el.getBoundingClientRect().top + 26
      if (nodeTop < vh * 0.85) el.classList.add('node-active')
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <div className="exp-wrapper" ref={wrapperRef}>
      <div className="exp-bg-orb exp-bg-orb-one" />
      <div className="exp-bg-orb exp-bg-orb-two" />

      <div className="exp-container">

        <div className="exp-header reveal reveal-scale">
          <div className="exp-eyebrow">
            <span className="exp-eyebrow-dot" />
            MY JOURNEY
          </div>
          <h2 className="section-title">
            My <span className="accent">Experience</span>
          </h2>
          <p className="section-subtitle">
            From my first semester at BAC to shipping real products — a
            chronological look at everything I've built and learned.
          </p>
        </div>

        <div className="exp-timeline">

          <div className="exp-timeline-track">
            <div className="exp-timeline-track-rail" />
            <div className="exp-timeline-track-fill" ref={trackFillRef} />
          </div>

          {timeline.map((entry, index) => {
            const isLeft = entry.side === 'left'
            const Icon   = entry.icon

            return (
              <div
                key={entry.id}
                className="exp-entry"
                ref={(el) => (entryRefs.current[index] = el)}
              >
                <div className={isLeft ? 'exp-entry-left' : 'exp-entry-empty'}>
                  {isLeft && <EntryCard entry={entry} />}
                </div>

                <div className="exp-node-col">
                  <div className="exp-node">
                    <div className="exp-node-ring" />
                    <div className="exp-node-dot" />
                    <div className="exp-node-icon">
                      <Icon
                        size={20}
                        weight="duotone"
                        style={{ color: entry.color }}
                      />
                    </div>
                    <div className="exp-node-ripple" />
                  </div>
                  <span className="exp-node-year">{entry.year}</span>
                </div>

                <div className={!isLeft ? 'exp-entry-right' : 'exp-entry-empty'}>
                  {!isLeft && <EntryCard entry={entry} />}
                </div>

                <div
                  className={`exp-connector ${
                    isLeft ? 'exp-connector-left' : 'exp-connector-right'
                  }`}
                />
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}