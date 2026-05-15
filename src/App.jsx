import { useEffect } from 'react'
import TopRule from './components/TopRule'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length <= 1) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 20,
        behavior: 'smooth',
      })
    }
    document.addEventListener('click', onClick)

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        }
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    return () => {
      document.removeEventListener('click', onClick)
      io.disconnect()
    }
  }, [])

  return (
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-14 pt-8 pb-24 relative">
      <TopRule />
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
