import { useCallback, useRef } from 'react'
import './WaitlistButton.css'

export default function WaitlistButton({ variant = 'nav' }) {
  const btnRef = useRef(null)

  const handleClick = useCallback(() => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = 'scale(0.96)'
    setTimeout(() => {
      btn.style.transform = 'scale(1)'
    }, 150)
  }, [])

  const isNav = variant === 'nav'

  return (
    <button
      ref={btnRef}
      className={`btn-waitlist ${isNav ? 'btn-waitlist--nav' : 'btn-waitlist--cta'}`}
      onClick={handleClick}
      id={isNav ? 'navWaitlistBtn' : 'ctaWaitlistBtn'}
    >
      <span className="btn-waitlist__glow" />
      <span className={`btn-waitlist__inner ${isNav ? 'btn-waitlist__inner--nav' : 'btn-waitlist__inner--cta'}`}>
        Join Waitlist
      </span>
    </button>
  )
}
