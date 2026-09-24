import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  EnvelopeSimple, MapPin, GithubLogo, LinkedinLogo,
  PaperPlaneTilt, User, ChatCircle, Tag, WhatsappLogo
} from '@phosphor-icons/react'
import robbyPhoto from '../assets/Robby.png'
import '../styles/contact.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.reveal').forEach(child => observer.observe(child))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Contact() {
  const ref = useReveal()
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [hiding, setHiding] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.subject,
        message:    form.message,
        to_email:   'ceerobby36@gmail.com',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      setHiding(true)
      setTimeout(() => setSubmitted(true), 420)
    })
    .catch(() => {
      setLoading(false)
      setError('Something went wrong. Please try again or email me directly.')
    })
  }

  return (
    <div className="contact-wrapper" ref={ref}>
      <div className="contact-deco-tl" />
      <div className="contact-deco-br" />

      <div className="contact-container">

        <div className="contact-header reveal">
          <span className="contact-mini-tag">Get In Touch</span>
          <h2 className="contact-heading">
            Let's Work <span className="accent">Together</span>
          </h2>
          <p className="contact-heading-sub">
            Have a project in mind, a collaboration opportunity or just want to
            say hi? Drop me a message and let's build something great.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left: photo card */}
          <div className="contact-left reveal">
            <div className="contact-photo-card">
              <img src={robbyPhoto} alt="Robert Chingwete" className="contact-photo" />
              <div className="contact-photo-info">
                <h3 className="contact-photo-name">
                  Robert <span className="accent">Chingwete</span>
                </h3>
                <p className="contact-photo-title">Mobile &amp; Web Developer</p>
                <div className="contact-divider" />
                <div className="contact-info-list">
                  <div className="contact-info-row">
                    <EnvelopeSimple size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} weight="bold" />
                    <span>chingweter@gmail.com</span>
                  </div>
                  <div className="contact-info-row">
                    <MapPin size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} weight="bold" />
                    <span>Botswana</span>
                  </div>
                  <a href="https://www.linkedin.com/in/robert-chingwete-765bb6331 " target="_blank" rel="noopener noreferrer" className="contact-info-row contact-info-link">
                    <LinkedinLogo size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} weight="bold" />
                    <span>linkedin.com/in/robertchingwete</span>
                  </a>
                  <a href="https://github.com/robertchingwete" target="_blank" rel="noopener noreferrer" className="contact-info-row contact-info-link">
                    <GithubLogo size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} weight="bold" />
                    <span>github.com/robertchingwete</span>
                  </a>
                </div>
                <div className="contact-divider" />
                <div className="contact-socials">
                  <a href="https://linkedin.com/in/robertchingwete" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                    <LinkedinLogo size={16} weight="bold" />
                  </a>
                  <a href="https://github.com/robertchingwete" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="GitHub">
                    <GithubLogo size={16} weight="bold" />
                  </a>
                  <a href="mailto:chingweter@gmail.com" className="contact-social-btn" aria-label="Email">
                    <EnvelopeSimple size={16} weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Communication pulse — desktop only */}
          <div className="contact-pulse-line" aria-hidden="true">
            <div className="pulse-track" />
            <div className="pulse-dot" />
          </div>

          {/* Right: form or success */}
          <div className="contact-right reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <PaperPlaneTilt size={36} weight="duotone" className="plane-fly" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-text">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  className="contact-submit-btn success-send-btn"
                  onClick={() => {
                    setSubmitted(false)
                    setHiding(false)
                    setForm({ name: '', email: '', subject: '', message: '' })
                  }}
                >
                  <span className="btn-icon"><PaperPlaneTilt size={16} weight="bold" /></span>
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className={`contact-form-card${hiding ? ' hiding' : ''}`}>
                <span className="contact-form-mini">Send Me A Message</span>
                <h3 className="contact-form-title">Let's <span className="accent">Talk</span></h3>
                <p className="contact-form-sub">
                  Fill out the form below and I'll get back to you as soon as possible.
                  I usually reply within 24 hours.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <div className="form-input-wrap">
                        <User size={15} className="form-input-icon" weight="bold" />
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="form-input" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <div className="form-input-wrap">
                        <EnvelopeSimple size={15} className="form-input-icon" weight="bold" />
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="form-input" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <div className="form-input-wrap">
                      <Tag size={15} className="form-input-icon" weight="bold" />
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <div className="form-input-wrap form-textarea-wrap">
                      <ChatCircle size={15} className="form-input-icon form-textarea-icon" weight="bold" />
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or just say hello..." className="form-input form-textarea" rows={4} />
                    </div>
                  </div>

                  {error && <p className="form-error">{error}</p>}

                  <button type="submit" className="contact-submit-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <div className="btn-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon"><PaperPlaneTilt size={16} weight="bold" /></span>
                        Send Message
                      </>
                    )}
                  </button>

                  <div className="contact-form-footer">
                   <div className="contact-form-footer-item">
  <WhatsappLogo size={14} style={{ color: 'var(--accent)' }} weight="bold" />
  <div>
    <p className="footer-item-label">Prefer WhatsApp?</p>
    <a href="https://wa.me/26777545108" target="_blank" rel="noopener noreferrer" className="footer-item-value">
      +267 77 545 108
    </a>
  </div>
</div>
                    <div className="contact-form-footer-item">
                      <PaperPlaneTilt size={14} style={{ color: 'var(--accent)' }} weight="bold" />
                      <div>
                        <p className="footer-item-label">Usually replies</p>
                        <p className="footer-item-value">within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}