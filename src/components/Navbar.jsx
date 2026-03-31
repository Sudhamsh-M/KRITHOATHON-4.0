import { useMemo } from 'react'
import WaitlistButton from './WaitlistButton'
import './Navbar.css'

const NAV_ITEMS = ['Get Started', 'Developers', 'Features', 'Resources']

const ChevronDown = () => (
  <svg
    className="nav-chevron"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Navbar({ scrollY }) {
  const navStyle = useMemo(() => {
    if (scrollY > 50) {
      return {
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }
    }
    return {
      background: 'transparent',
      backdropFilter: 'none',
      WebkitBackdropFilter: 'none',
      borderBottom: '1px solid transparent',
    }
  }, [scrollY > 50])

  return (
    <nav className="navbar" id="navbar" style={navStyle}>
      <div className="nav-left">
        <div className="logo" id="logo">
          LOGOIPSUM
        </div>
        <ul className="nav-links" id="navLinks">
          {NAV_ITEMS.map((item) => (
            <li className="nav-item" key={item}>
              <a href="#" className="nav-link">
                <span>{item}</span>
                <ChevronDown />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <WaitlistButton variant="nav" />
      </div>
    </nav>
  )
}
