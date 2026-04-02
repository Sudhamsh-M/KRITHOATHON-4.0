import { useState, useEffect } from 'react'
import WaitlistButton from './WaitlistButton'
import './Navbar.css'

const NAV_ITEMS = ['Home', 'Updates', 'About', 'Past Editions']

const ChevronDown = () => (
  <svg
    className="nav-chevron"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false) 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
        setMobileDropdownOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">KRITHOATHON 4.0</div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => {
            if (item === 'Updates') {
              return (
                <li className="nav-item dropdown" key={item}>
                  <button className="nav-link dropdown-trigger">
                    {item}
                    <ChevronDown />
                  </button>

                  <ul className="dropdown-menu">
                    <li><a href="/#timeline">Timeline</a></li>
                    <li><a href="/results">Results</a></li>
                  </ul>
                </li>
              )
            }

            if (item === 'Past Editions') {
              return (
                <li className="nav-item" key={item}>
                  <a
                    href="/#past-editions"
                    className="nav-link"
                  >
                    {item}
                  </a>
                </li>
              )
            }

            return (
              <li className="nav-item" key={item}>
                <a
                  href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="nav-link"
                >
                  {item}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="nav-right">
        <div className="desktop-register">
          <WaitlistButton variant="nav" />
        </div>

        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => {
          if (item === 'Updates') {
            return (
              <div key={item} className="mobile-dropdown-container">
                <button 
                  className="mobile-dropdown-trigger"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', color: 'inherit', fontSize: 'inherit', padding: 0 }}
                >
                  {item}
                  <span style={{ transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                    <ChevronDown />
                  </span>
                </button>
                
                {mobileDropdownOpen && (
                  <div className="mobile-dropdown-menu" style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', marginTop: '0.5rem', gap: '1rem' }}>
                    <a href="/#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
                    <a href="/results" onClick={() => setMenuOpen(false)}>Results</a>
                  </div>
                )}
              </div>
            )
          }

          if (item === 'Past Editions') {
            return (
              <a 
                key={item} 
                href="/#past-editions"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          }

          return (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          )
        })}
        
        <div className="mobile-register" onClick={() => setMenuOpen(false)}>
          <WaitlistButton variant="nav" />
        </div>
      </div>
    </nav>
  )
}