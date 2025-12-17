function Navigation() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <nav className="sticky top-0 z-50 bg-[#f4f1e8]/95 backdrop-blur-sm border-b-2 border-[#d4cfbf] py-4">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="#hero"
            className="text-gray-700 font-medium text-lg px-4 py-2 rounded-lg transition-all hover:bg-white hover:shadow-md hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 font-medium text-lg px-4 py-2 rounded-lg transition-all hover:bg-white hover:shadow-md hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-700 font-medium text-lg px-4 py-2 rounded-lg transition-all hover:bg-white hover:shadow-md hover:text-gray-900"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium text-lg px-4 py-2 rounded-lg transition-all hover:bg-white hover:shadow-md hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-600 font-mono text-sm italic hidden md:block">
          {formattedDate}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
