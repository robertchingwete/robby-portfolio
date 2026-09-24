import { useEffect, useRef, useState } from 'react'
import { X, GithubLogo, ArrowSquareOut, WifiHigh, DownloadSimple } from '@phosphor-icons/react'
import { SiReact, SiKotlin, SiFirebase, SiOpenjdk, SiMysql, SiPhp, SiHtml5, SiJavascript } from 'react-icons/si'
import boreHiveImg from '../assets/borehive.png'
import madiWalletImg from '../assets/madiwallet.png'
import assetImg from '../assets/assetinventory.png'
import garageImg from '../assets/garageparts.png'
import greenGardenImg from '../assets/greengarden.png'
import smallstockImg from '../assets/smallstock.png'
import voipImg from '../assets/voip.png'
import omnetImg from '../assets/omnet.png'
import usignImg from '../assets/usign.png'
import kaylanImg from '../assets/kaylanluxe.png'
import minemindimg from '../assets/minemind.png'

import '../styles/projects.css'

const BOREHIVE_PLAY = 'https://play.google.com/store/apps/details?id=com.robby20.GIS&pcampaignid=web_share'
const BOREHIVE_APP = 'https://apps.apple.com/bw/app/borehiveapp/id6749535195'
const MINEMIND_APK = 'https://drive.google.com/uc?export=download&id=1ILhxAYoNmVTIGw6_Bve83QsB-IynVbIx'
const GREENGARDEN_APK = 'https://drive.google.com/uc?export=download&id=1IVWwzdte_oAqYx4NFs654fIoXpbNDvEr'
const KAYLAN_LIVE = 'https://kayluxe.netlify.app'
const SMALLSTOCK_LIVE = 'https://smallstock.netlify.app'
const GITHUB = 'https://github.com/robertchingwete'

const projects = [
  {
    id: 'borehive',
    title: 'BoreHive',
    category: 'Mobile',
    tag: 'React Native',
    image: boreHiveImg,
    techs: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Expo', icon: SiReact, color: '#555' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'Cross-platform mobile app for accessing Botswana borehole data.',
    overview: 'BoreHive is a cross-platform mobile application that provides access to Botswana borehole information including location, status and detailed data. It helps users find and manage boreholes efficiently using maps and filters.',
    problem: 'Borehole data in Botswana was scattered and inaccessible to the public, making it difficult for communities and engineers to locate and assess water sources.',
    features: [
      'Search and filter boreholes by location and status',
      'Interactive maps with location pins',
      'Detailed borehole information and drill logs',
      'User authentication and guest access',
      'API integration with live data',
    ],
    links: [
      { label: 'Google Play', url: BOREHIVE_PLAY, type: 'playstore' },
      { label: 'App Store', url: BOREHIVE_APP, type: 'appstore' },
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'madiwallet',
    title: 'MADI Wallet',
    category: 'Mobile',
    tag: 'React Native',
    image: madiWalletImg,
    techs: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
    status: 'In Progress',
    statusColor: '#f59e0b',
    short: 'Digital wallet mobile application with authentication.',
    overview: 'MADI Wallet is a digital wallet mobile application built with React Native and Kotlin. It features user authentication, account management and a clean modern UI for managing digital transactions.',
    problem: 'A need for a simple, secure and user-friendly digital wallet solution for everyday transactions.',
    features: [
      'User registration and authentication',
      'Account balance and transaction history',
      'Modern and clean mobile UI',
      'Secure data handling with Firebase',
      'Cross-platform support',
    ],
    links: [
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'greengarden',
    title: 'Green Garden',
    category: 'Mobile',
    tag: 'React Native',
    image: greenGardenImg,
    techs: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Expo', icon: SiReact, color: '#555' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'A mobile app for a healthy food and garden lifestyle brand.',
    overview: 'Green Garden is a mobile application built with React Native for a healthy food and garden lifestyle brand. It features a clean modern UI, product showcase and smooth navigation.',
    problem: 'The brand needed a mobile presence that reflected their healthy and modern identity to reach customers on their phones.',
    features: [
      'Responsive mobile layout',
      'Product and menu showcase',
      'Smooth navigation and animations',
      'Clean modern design',
      'Contact and location section',
    ],
    links: [
      { label: 'Download APK', url: GREENGARDEN_APK, type: 'apk' },
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'usign',
    title: 'USign',
    category: 'Web App',
    tag: 'PHP / JS',
    image: usignImg,
    techs: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    status: 'In Progress',
    statusColor: '#f59e0b',
    short: 'eSignature web platform for secure document signing and workflows.',
    overview: 'USign is a web-based eSignature solution that allows users to upload, sign and manage documents digitally. It features secure signature workflows, team collaboration and document management.',
    problem: 'Organizations needed a simple, secure and affordable way to handle document signing digitally without relying on expensive third-party platforms.',
    features: [
      'Upload and sign documents digitally',
      'Signature workflow management',
      'Team collaboration and approvals',
      'Document status tracking',
      'Secure login and user management',
      'Microsoft sign-in integration',
    ],
    links: [
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'assetinventory',
    title: 'Asset Inventory System',
    category: 'Web App',
    tag: 'React',
    image: assetImg,
    techs: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'Web-based inventory management system for tracking assets.',
    overview: 'A web application for tracking and managing assets across an organization. Built with React and Firebase, it allows users to add, update and monitor assets with full CRUD functionality.',
    problem: 'Manual asset tracking using spreadsheets was inefficient and error-prone for organizations managing large numbers of items.',
    features: [
      'Add, edit and delete asset records',
      'Search and filter assets by category',
      'User authentication and role management',
      'Real-time data with Firebase',
      'Responsive design for all screen sizes',
    ],
    links: [
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'minemind',
    title: 'MineMind AI',
    category: 'AI',
    tag: 'AI / React Native',
    image: minemindimg,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    techs: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'AI-powered platform reducing downtime and automating mining procurement.',
    overview: 'MineMind AI is an intelligent procurement and inventory platform built for the mining industry. It uses AI to predict stockouts, reduce equipment downtime and automate the procurement process through a smart supplier marketplace.',
    problem: 'Mining operations suffer massive financial losses due to unplanned equipment downtime caused by parts stockouts and slow, manual procurement processes.',
    features: [
      'AI-powered stockout prediction and alerts',
      'Automated procurement and purchase order generation',
      'Supplier marketplace for parts and equipment',
      'Real-time inventory monitoring and tracking',
      'Downtime analytics and reporting dashboard',
      'Smart reorder point calculations',
    ],
    links: [
      { label: 'Download APK', url: MINEMIND_APK, type: 'apk' },
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'garageparts',
    title: 'Garage Parts System',
    category: 'Java',
    tag: 'Java',
    image: garageImg,
    techs: [
      { name: 'Java', icon: SiOpenjdk, color: '#f89820' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'Java-based inventory system for garage parts and supplies.',
    overview: 'A desktop inventory management system built in Java with MySQL database integration. It allows garage owners to manage parts stock, suppliers and orders efficiently.',
    problem: 'Small garages struggled to manage their parts inventory manually, leading to stock shortages and poor supplier management.',
    features: [
      'Parts inventory management with CRUD',
      'Supplier and order tracking',
      'MySQL database integration',
      'Search and filter functionality',
      'Simple desktop UI',
    ],
    links: [
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'kaylanluxe',
    title: 'Kaylan Luxe Salon',
    category: 'Website',
    tag: 'HTML/CSS/JS',
    image: kaylanImg,
    techs: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiHtml5, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'Elegant beauty salon website with services and booking section.',
    overview: 'Kaylan Luxe Salon is a beauty salon website built with HTML, CSS and JavaScript. It features an elegant and feminine design showcasing salon services, pricing and a contact/booking section.',
    problem: 'The salon needed a professional online presence to attract clients and showcase their services in a clean, elegant way.',
    features: [
      'Services and pricing showcase',
      'Elegant and feminine UI design',
      'Responsive layout for mobile and desktop',
      'Contact and booking section',
      'Smooth scroll and hover animations',
      'Gallery section for salon work',
    ],
    links: [
      { label: 'Live Demo', url: KAYLAN_LIVE, type: 'live' },
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'smallstock',
    title: 'Smallstock Expo',
    category: 'Website',
    tag: 'HTML/CSS/JS',
    image: smallstockImg,
    techs: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiHtml5, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'Event website for the Smallstock Expo brand.',
    overview: 'Smallstock Expo is an event website built with HTML, CSS and JavaScript. It features smooth navigation, event information and a clean layout designed to showcase the Smallstock Expo brand.',
    problem: 'The event needed a dedicated web presence to attract attendees and communicate event details clearly.',
    features: [
      'Event information and schedule',
      'Responsive mobile-first design',
      'Smooth navigation and animations',
      'Clean and professional layout',
      'Contact and registration section',
    ],
    links: [
      { label: 'Live Demo', url: SMALLSTOCK_LIVE, type: 'live' },
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'voip',
    title: 'VoIP Telecom System',
    category: 'Telecom',
    tag: 'Asterisk',
    image: voipImg,
    techs: [
      { name: 'Asterisk', icon: WifiHigh, color: '#F67819' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'VoIP telecommunications system with extensions, IVR and voicemail.',
    overview: 'A VoIP telecommunications system built using Asterisk. It features SIP configuration, softphone integration, extension dialling, IVR menus, voicemail and conference calling.',
    problem: 'Understanding and implementing a working VoIP system to bridge software development with telecommunications engineering.',
    features: [
      'SIP configuration and softphone setup',
      'Extension dialling between users',
      'IVR menu system',
      'Voicemail configuration',
      'Conference calling',
      'Call routing and hunt groups',
    ],
    links: [
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
  {
    id: 'mobilenet',
    title: 'Mobile Network Simulation',
    category: 'Networking',
    tag: 'OMNeT++',
    image: omnetImg,
    techs: [
      { name: 'OMNeT++', icon: WifiHigh, color: '#1BA0D7' },
    ],
    status: 'Completed',
    statusColor: '#22c55e',
    short: 'Simulated mobile network topology using OMNeT++ discrete event simulator.',
    overview: 'A mobile network simulation designed and built in OMNeT++. It demonstrates core mobile network components including base stations, mobile nodes, core network elements and simulated communication flows.',
    problem: 'Applying theoretical mobile networking knowledge through a practical simulation to understand how mobile networks function end-to-end.',
    features: [
      'Full network topology design',
      'Simulated mobile nodes and base stations',
      'Core network configuration',
      'Communication flow demonstration',
      'Network behaviour and performance analysis',
    ],
    links: [
      { label: 'View on GitHub', url: GITHUB, type: 'github' },
    ],
  },
]

const categories = ['All', 'Mobile', 'Web App', 'Website', 'Java', 'Telecom', 'Networking', 'AI']

// ✅ FIX: Accept `dep` so the observer re-runs when the filter changes
function useReveal(dep) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) {
      // ✅ FIX: Also immediately reveal cards already in the viewport
      el.querySelectorAll('.reveal').forEach(function(child) {
        child.classList.remove('revealed')
        observer.observe(child)
      })
    }
    return () => observer.disconnect()
  }, [dep]) // ✅ FIX: Re-run whenever the active filter changes
  return ref
}

function LinkButton({ link }) {
  if (link.type === 'playstore') {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link-btn modal-link-playstore">
        <ArrowSquareOut size={15} weight="bold" />
        {link.label}
      </a>
    )
  }
  if (link.type === 'appstore') {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link-btn modal-link-appstore">
        <ArrowSquareOut size={15} weight="bold" />
        {link.label}
      </a>
    )
  }
  if (link.type === 'apk') {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link-btn modal-link-apk">
        <DownloadSimple size={15} weight="bold" />
        {link.label}
      </a>
    )
  }
  if (link.type === 'live') {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link-btn modal-link-live">
        <ArrowSquareOut size={15} weight="bold" />
        {link.label}
      </a>
    )
  }
  if (link.type === 'github') {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link-btn modal-link-github">
        <GithubLogo size={15} weight="bold" />
        {link.label}
      </a>
    )
  }
  return null
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [modal, setModal] = useState(null)

  // ✅ FIX: Pass `active` so reveal re-runs on every filter change
  const ref = useReveal(active)

  const filtered = active === 'All'
    ? projects
    : projects.filter(function(p) { return p.category === active })

  function openModal(project) { setModal(project) }
  function closeModal() { setModal(null) }
  function stopProp(e) { e.stopPropagation() }

  return (
    <div className="projects-wrapper" ref={ref}>
      <div className="projects-container">

        <div className="projects-header reveal">
          <h2 className="section-title">
            My <span className="accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of real-world projects showcasing my skills
            and what I've built so far.
          </p>
        </div>

        <div className="projects-filters reveal">
          {categories.map(function(cat) {
            return (
              <button
                key={cat}
                className={'filter-btn' + (active === cat ? ' filter-active' : '')}
                onClick={function() { setActive(cat) }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="projects-grid">
          {filtered.map(function(project, i) {
            return (
              <div
                key={project.id}
                className="project-card reveal"
                style={{ transitionDelay: (i * 0.08) + 's' }}
                onClick={function() { openModal(project) }}
              >
                <div className="project-card-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-card-img" />
                  ) : (
                    <div className="project-card-placeholder" style={{ background: project.gradient }}>
                      <span className="project-card-initial">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="project-card-overlay">
                    <span className="project-card-view">View Project</span>
                  </div>
                  <div className="project-card-tag">{project.tag}</div>
                </div>

                <div className="project-card-body">
                  <div className="project-card-top">
                    <h3 className="project-card-title">{project.title}</h3>
                    <span
                      className="project-status"
                      style={{ color: project.statusColor, background: project.statusColor + '18' }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="project-card-short">{project.short}</p>
                  <div className="project-card-techs">
                    {project.techs.map(function(tech) {
                      const Icon = tech.icon
                      return (
                        <span key={tech.name} className="project-tech-pill">
                          <Icon size={11} style={{ color: tech.color }} />
                          {tech.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card project-modal" onClick={stopProp}>

            <div className="project-modal-banner">
              {modal.image ? (
                <img src={modal.image} alt={modal.title} className="project-modal-img" />
              ) : (
                <div className="project-modal-placeholder" style={{ background: modal.gradient }}>
                  <span className="project-modal-initial">{modal.title.charAt(0)}</span>
                </div>
              )}
              <button className="modal-close project-modal-close" onClick={closeModal}>
                <X size={18} />
              </button>
            </div>

            <div className="project-modal-body">
              <div className="project-modal-top">
                <div>
                  <span className="modal-tag">{modal.category}</span>
                  <h2 className="modal-title">{modal.title}</h2>
                  <p className="modal-subtitle">{modal.tag}</p>
                </div>
                <span
                  className="project-status"
                  style={{ color: modal.statusColor, background: modal.statusColor + '18' }}
                >
                  {modal.status}
                </span>
              </div>

              <div className="project-modal-section">
                <h4 className="project-modal-label">Overview</h4>
                <p className="project-modal-text">{modal.overview}</p>
              </div>

              <div className="project-modal-section">
                <h4 className="project-modal-label">Problem</h4>
                <p className="project-modal-text">{modal.problem}</p>
              </div>

              <div className="project-modal-section">
                <h4 className="project-modal-label">Key Features</h4>
                <ul className="project-modal-features">
                  {modal.features.map(function(f) {
                    return (
                      <li key={f} className="project-modal-feature">
                        <span className="feature-dot" />
                        {f}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="project-modal-section">
                <h4 className="project-modal-label">Technologies</h4>
                <div className="modal-tech-row">
                  {modal.techs.map(function(tech) {
                    const Icon = tech.icon
                    return (
                      <span key={tech.name} className="modal-tech-pill">
                        <Icon size={12} style={{ color: tech.color }} />
                        {tech.name}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="project-modal-actions">
                {modal.links.map(function(link) {
                  return <LinkButton key={link.label} link={link} />
                })}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}