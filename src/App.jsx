import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Separator from './components/Separator'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <>
      <Navigation />

      {/* Spiral binding holes - desktop only */}
      <div className="fixed left-0 top-0 h-full w-12 hidden lg:flex flex-col justify-around items-center z-20 pointer-events-none py-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="spiral-hole" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:pl-16">
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Skills />
        <Separator />
        <Contact />
      </div>
      <MusicPlayer />
    </>
  )
}

export default App
