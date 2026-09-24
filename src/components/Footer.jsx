import { useEffect, useRef } from 'react'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Heart, WhatsappLogo, ArrowUp } from '@phosphor-icons/react'
import rcLogo from '../assets/rc-logo.png'
import '../styles/footer.css'

const socialLinks = [
  { href: 'https://github.com/robertchingwete',                        icon: GithubLogo,    label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/robert-chingwete-765bb6331',   icon: LinkedinLogo,  label: 'LinkedIn' },
  { href: 'mailto:chingweter@gmail.com',                               icon: EnvelopeSimple,label: 'Email' },
  { href: 'https://wa.me/26777545108',                                 icon: WhatsappLogo,  label: 'WhatsApp' },
]

const navLinks = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
]

function useFooterReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('revealed')
      }),
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) {
      el.querySelectorAll('.footer-reveal, .footer-bottom-reveal')
        .forEach(child => observer.observe(child))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Footer() {
  const year = new Date().getFullYear()
  const ref = useFooterReveal()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand footer-reveal">
            <div className="footer-logo-wrap">
              <img src={rcLogo} alt="RC Logo" className="footer-logo" />
            </div>
            <p className="footer-tagline">
              Building mobile apps, web solutions and exploring the future of telecommunications.
            </p>
            <div className="footer-socials">
              {socialLinks.map(function(s) {
                const Icon = s.icon
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label={s.label}>
                    <Icon size={18} weight="bold" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-links footer-reveal">
            <p className="footer-links-title">Navigation</p>
            {navLinks.map(function(link) {
              return (
                <a key={link.href} href={link.href} className="footer-link">
                  <span className="footer-link-arrow">→</span>
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Contact */}
          <div className="footer-contact footer-reveal">
            <p className="footer-links-title">Get In Touch</p>
            <p className="footer-contact-text">
              <a href="mailto:chingweter@gmail.com">chingweter@gmail.com</a>
            </p>
            <p className="footer-contact-text">
              <a href="https://wa.me/26777545108" target="_blank" rel="noopener noreferrer">
                +267 77 545 108
              </a>
            </p>
            <p className="footer-contact-text">Botswana</p>
            <a href="#contact" className="footer-cta">Send a Message</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom footer-bottom-reveal">
          <p className="footer-copy">© {year} Robert Chingwete. All rights reserved.</p>
          <p className="footer-made">
            Made with <Heart size={13} weight="fill" className="footer-heart" /> using React + Vite
          </p>
          <button className="footer-back-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={14} weight="bold" className="back-top-arrow" />
            Top
          </button>
        </div>

      </div>
    </footer>
  )
}