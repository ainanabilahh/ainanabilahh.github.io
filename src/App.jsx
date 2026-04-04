import { MotionConfig } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Separator from './components/Separator'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Paper grain texture overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.045,
        }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-800 focus:rounded-lg focus:shadow-lg focus:font-medium"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content" className="max-w-7xl mx-auto px-8">
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Contact />
      </main>
      <MusicPlayer />
    </MotionConfig>
  )
}

export default App
