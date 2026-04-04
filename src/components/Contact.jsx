import { motion } from 'framer-motion'

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="doodle-heading text-5xl mb-4 text-gray-800">Get In Touch</h2>

        <p
          className="text-xl mb-10 text-gray-500 italic"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          I'm kinda fast learner ✏️
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { href: "https://github.com/ainanabilahh", label: "GitHub", icon: <GitHubIcon />, target: "_blank" },
            { href: "mailto:ainanabilahh@gmail.com", label: "Email", icon: <EmailIcon />, target: "_self" },
            { href: "https://linkedin.com/in/ainanabilahh", label: "LinkedIn", icon: <LinkedInIcon />, target: "_blank" },
          ].map(({ href, label, icon, target }) => (
            <motion.a
              key={label}
              href={href}
              target={target}
              rel={target === "_blank" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 font-mono text-lg px-8 py-4 border-2 border-gray-800 rounded-xl text-gray-800 bg-transparent transition-colors hover:bg-gray-800 hover:text-white"
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
            >
              {icon}
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
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          xo, Aina
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Contact
