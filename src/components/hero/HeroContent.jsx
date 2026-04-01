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
            {word}
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle" id="heroSubtitle">
        <span className="hero-subtitle-line">
          KRITHOATHON 4.0 – Innovate. Impact. Inspire.
        </span>
        <span className="hero-subtitle-line">
          Hosted by Krithomedh, the technical club of  (AIML & IoT), R&AI at VNRVJIET,
        </span>
        <span className="hero-subtitle-line">
          this edition goes beyond coding to challenge diverse teams to solve real-world problems.
          <br />
          Collaborate, create, and compete with industry experts as you push boundaries and craft solutions that matter.
        </span>

      </p>

      {/* CTA Button */}
      <WaitlistButton variant="cta" />
    </div>
  )
}
