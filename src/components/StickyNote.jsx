import { motion } from 'framer-motion'
import WashiTape from './WashiTape'

/**
 * Animated sticky note with a WashiTape strip on top.
 *
 * @param {React.ReactNode} children - Note content
 * @param {'dots'|'stripes'} [tapeVariant='dots'] - WashiTape pattern
 * @param {number} [delay=0.2] - Framer Motion entrance delay in seconds
 * @param {number} [hoverRotate=1] - Rotation in degrees on hover
 */
function StickyNote({ children, tapeVariant = 'dots', delay = 0.2, hoverRotate = 1 }) {
  return (
    <motion.div
      className="inline-block relative"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ rotate: hoverRotate, transition: { duration: 0.2 } }}
    >
      <WashiTape
        variant={tapeVariant}
        width={48}
        height={20}
        style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', borderRadius: 2, zIndex: 1 }}
      />
      <div className="sticky-note rounded-sm px-10 py-5 text-lg italic text-amber-900">
        {children}
      </div>
    </motion.div>
  )
}

export default StickyNote
