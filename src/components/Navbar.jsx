import { useMemo } from 'react'
import WaitlistButton from './WaitlistButton'
import './Navbar.css'

const NAV_ITEMS = ['Home', 'Updates', 'About', 'Past Editions']

const ChevronDown = () => (
  <svg
    className="nav-chevron"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: '4px' }}
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
          KRITHOATHON 4.0
        </div>
        <ul className="nav-links" id="navLinks">
          {NAV_ITEMS.map((item) => {
            if (item === 'Updates') {
              return (
                <li className="nav-item dropdown" key={item}>
                  <button className="nav-link dropdown-trigger">
                    <span>{item}</span>
                    <ChevronDown />
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href="#results">Results</a></li>
                  </ul>
                </li>
              )
            }

            return (
              <li className="nav-item" key={item}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link">
                  <span>{item}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="nav-right">
        <WaitlistButton variant="nav" />
      </div>
    </nav>
  )
}