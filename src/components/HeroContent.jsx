import { useEffect, useRef } from 'react'
import WaitlistButton from './WaitlistButton'
import './HeroContent.css'

export default function HeroContent() {
  const dotRef = useRef(null)

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
      {/* Badge Pill */}
      <div className="badge-pill" id="badgePill">
        <span className="badge-dot" ref={dotRef} />
        <span className="badge-text">Early access available from</span>
        <span className="badge-date"> May 1, 2026</span>
      </div>

      {/* Heading */}
      <h1 className="hero-heading" id="heroHeading">
        Get ready for Krithoathon 4.0
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle" id="heroSubtitle">
        Powering seamless experiences and real-time connections, EOS is the base
        for creators who move with purpose, leveraging resilience, speed, and
        scale to shape the future.
      </p>

      {/* CTA Button */}
      <WaitlistButton variant="cta" />
    </div>
  )
}
