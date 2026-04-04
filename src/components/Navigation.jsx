import { motion } from 'framer-motion'

const tabs = [
  { label: 'Home',       href: '#hero',       color: '#fda4af' },
  { label: 'About',      href: '#about',      color: '#c4b5fd' },
  { label: 'Skills',     href: '#skills',     color: '#6ee7b7' },
  { label: 'Side Projects', href: '#projects', color: '#93c5fd' },
  { label: 'Contact',    href: '#contact',    color: '#fcd34d' },
]

function Navigation() {
  return (
    <>
      {/* Mobile top nav */}
      <nav aria-label="Mobile navigation" className="lg:hidden sticky top-0 z-50 bg-[#f4f1e8]/95 backdrop-blur-sm border-b-2 border-[#d4cfbf] py-3">
        <div className="flex justify-center gap-6 flex-wrap">
          {tabs.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-700 text-[1.1rem] px-3 py-1.5 rounded-lg transition-all hover:bg-white hover:shadow-md"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Desktop right-side notebook tabs */}
      <nav aria-label="Desktop navigation" className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {tabs.map(({ label, href, color }, i) => (
          <motion.a
            key={label}
            href={href}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ x: -5 }}
            style={{
              display: 'block',
              background: color,
              fontSize: '1.05rem',
              color: '#2d2d2d',
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)',
              padding: '14px 9px',
              borderRadius: '6px 0 0 6px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              boxShadow: `-3px 2px 8px rgba(0,0,0,0.15), inset -2px 0 0 rgba(255,255,255,0.4)`,
              border: `1.5px solid rgba(0,0,0,0.1)`,
              borderRight: 'none',
              userSelect: 'none',
            }}
          >
            {label}
          </motion.a>
        ))}
      </nav>
    </>
  )
}

export default Navigation
