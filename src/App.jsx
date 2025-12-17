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
      <div className="max-w-7xl mx-auto px-8">
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
