import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom' // Added this

import Navbar from './components/hero/Navbar'
import Hero from './components/hero/Hero'
import Timeline from './components/timeline/Timeline' 
import About from './components/About'
import Footer from './components/Footer'
import PastEditions from './components/PastEditions' // Make sure to create this file
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-wrapper">
      <Navbar scrollY={scrollY} />
      
      <Routes>
        {/* MAIN HOME PAGE */}
        <Route path="/" element={
          <>
            <section id="home" style={{ scrollMarginTop: '80px' }}>
              <Hero />
            </section>


            <section id="past-editions" style={{ scrollMarginTop: '80px' }}>
              <PastEditions />
            </section>

            
            <section id="timeline" style={{ scrollMarginTop: '80px' }}>
              <Timeline />
            </section>

            

            <section id="about" style={{ scrollMarginTop: '80px' }}>
              <About />
            </section>

            
          </>
        } />

        {/* FUTURE ROUTES FOR SEPARATE PAGES (IF NEEDED) */}
      </Routes>

      <Footer />
    </div>
  )
}

export default App