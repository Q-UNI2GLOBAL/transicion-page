import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChange from './components/WhyChange'
import WhatChanges from './components/WhatChanges'
import Timeline from './components/Timeline'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-dark-500 relative">
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-700/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhyChange />
        <WhatChanges />
        <Timeline />
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}

export default App
