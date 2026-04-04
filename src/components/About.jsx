import { motion } from 'framer-motion'
import StickyNote from './StickyNote'
import Header from './Header'
import Highlight from './Highlight'

function About() {
  return (
    <section id="about" aria-label="About me" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Header>About Me</Header>

        <p className="text-xl leading-relaxed text-gray-700 mb-10">
          Hey! I'm stuck in a <Highlight>9–5</Highlight> most days. Off work, I'm usually watching <Highlight color="pink">anime</Highlight> or American TV shows, learning <span lang="ja">日本語</span>, and living off <Highlight color="pink">90s–2000s music</Highlight>. Comedy and suspense are my comfort genres.
          <br /><br />
          I started as a <Highlight>blogger</Highlight> back in school, got into HTML, CSS, and JavaScript, and ended up here. Mostly <Highlight color="pink">front-end</Highlight> nowadays, with some backend and database work when needed.
        </p>

        <StickyNote>Fun fact: I think debugging is a sport 🏆</StickyNote>
      </motion.div>
    </section>
  )
}

export default About
