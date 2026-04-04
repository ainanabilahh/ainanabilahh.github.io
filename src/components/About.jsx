import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="doodle-heading text-4xl mb-12 text-gray-800">About Me</h2>

        <p className="text-xl leading-relaxed text-gray-700 mb-10">
          Hey! I'm stuck in a 9–5 most days. Off work, I'm usually watching anime or American TV shows, learning 日本語, and living off 90s–2000s music. Comedy and suspense are my comfort genres.
          <br /><br />
          I started as a blogger back in school, got into HTML, CSS, and JavaScript, and ended up here. Mostly front-end nowadays, with some backend and database work when needed.
        </p>

        {/* Sticky note fun fact */}
        <motion.div
          className="inline-block relative"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ rotate: 1, transition: { duration: 0.2 } }}
        >
          {/* tape tab */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 tape-strip rounded-sm shadow-sm" />
          <div
            className="sticky-note rounded-sm px-10 py-5 text-lg italic text-amber-900"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Fun fact: I think debugging is a sport 🏆
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
