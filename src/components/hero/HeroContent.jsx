import { useEffect, useRef } from 'react'
import WaitlistButton from './WaitlistButton'
import './HeroContent.css'

export default function HeroContent() {
  const dotRef = useRef(null)
  const headingText = 'GET READY FOR KRITHOATHON-4.0'
  const headingWords = headingText.split(' ')

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const pulseKeyframes = [
      { boxShadow: '0 0 0 0 rgba(167, 139, 250, 0.6)', transform: 'scale(1)' },
      { boxShadow: '0 0 0 6px rgba(167, 139, 250, 0)', transform: 'scale(1.15)' },
      { boxShadow: '0 0 0 0 rgba(167, 139, 250, 0)', transform: 'scale(1)' },
    ]

    const animation = dot.animate(pulseKeyframes, {
      duration: 2200,
      iterations: Infinity,
      easing: 'ease-in-out',
    })

    return () => animation.cancel()
  }, [])

  return (
    <div className="hero-content">

      {/* Heading */}
      <h1 className="hero-heading" id="heroHeading" aria-label={headingText}>
        {headingWords.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="hero-heading__word"
            style={{ '--i': String(index) }}
          >
            {/* Space added here so the words wrap naturally */}
            {word}{' '}
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle" id="heroSubtitle">
        <span className="hero-subtitle-line">
          KRITHOATHON 4.0 – Innovate. Impact. Inspire. Hosted by Krithomedh, the technical club of CSE - AIML, IoT & R&AI at VNRVJIET, this edition goes beyond coding to challenge diverse teams to solve real-world problems.
        </span>
        
      </p>


      {/* CTA Button Group (Updated for Mobile Stacking) */}
      <div className="hero-cta-group">
        
        {/* 1. Download Problem Statements Button */}
        <WaitlistButton variant="cta" />

        {/* 2. Register Button (Visible ONLY on Mobile View) */}
        <div className="mobile-hero-register">
          <WaitlistButton variant="nav" />
        </div>

      </div>
      <div className="h-8 md:h-12" />
    </div>
  )
}