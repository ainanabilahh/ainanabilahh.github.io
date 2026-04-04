import { motion } from 'framer-motion'
import Header from './Header'
import { contactLinks } from '../constants/links'

function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Header subtitle="I'm kinda fast learner">Get In Touch</Header>

        <div className="flex justify-center gap-6 flex-wrap">
          {contactLinks.map(({ href, label, icon, target }) => (
            <motion.a
              key={label}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 text-lg px-8 py-4 border-2 border-gray-800 rounded-xl text-gray-800 bg-transparent transition-colors hover:bg-gray-800 hover:text-white"
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
            >
              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">{icon}</span>
              {label}
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-14 text-3xl text-gray-400 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          xo, Aina
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Contact
