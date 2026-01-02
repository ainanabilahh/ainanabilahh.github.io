function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <div>
        <h2 className="text-4xl mb-4 text-gray-800">Get In Touch</h2>
        <p className="text-xl text-gray-600 mb-8">I'm kinda fast learner</p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="https://github.com/ainanabilahh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 no-underline text-lg px-6 py-3 border-2 border-pink-400 rounded-lg transition-all hover:bg-pink-400 hover:text-white hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href="mailto:ainanabilahh@gmail.com"
            className="text-pink-400 no-underline text-lg px-6 py-3 border-2 border-pink-400 rounded-lg transition-all hover:bg-pink-400 hover:text-white hover:-translate-y-0.5"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/ainanabilahh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 no-underline text-lg px-6 py-3 border-2 border-pink-400 rounded-lg transition-all hover:bg-pink-400 hover:text-white hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
