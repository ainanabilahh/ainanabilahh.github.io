import { motion } from 'framer-motion'

const SPOKE_ANGLES = [0, 60, 120]
const SCREW_HOLE_X = [14, 152]
const SPIN_DURATION = 2

function Spool({ spin }) {
  return (
    <motion.div
      animate={spin ? { rotate: 360 } : { rotate: 0 }}
      transition={spin ? { duration: SPIN_DURATION, repeat: Infinity, ease: 'linear' } : {}}
      style={{
        width: 32, height: 32, borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 35%, #777, #2a2a2a)',
        border: '2.5px solid #111',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6)',
        position: 'relative', flexShrink: 0,
      }}
    >
      {/* hub */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 10, height: 10, borderRadius: '50%',
        background: '#444', border: '1.5px solid #222',
      }} />
      {/* spokes */}
      {SPOKE_ANGLES.map(deg => (
        <div key={deg} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 10, height: 2, background: '#555',
          transformOrigin: '0 50%',
          transform: `translate(0, -50%) rotate(${deg}deg)`,
          marginLeft: 1,
        }} />
      ))}
    </motion.div>
  )
}

function CassetteTape({ isOpen, onClick }) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Toggle music player"
      aria-pressed={isOpen}
      aria-expanded={isOpen}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        width: 176, height: 110,
        background: 'linear-gradient(160deg, #363636 0%, #2a2a2a 100%)',
        borderRadius: 10, cursor: 'pointer',
        border: '2px solid #111',
        boxShadow: '0 6px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        position: 'relative', userSelect: 'none',
      }}
    >
      {/* top screw holes */}
      {SCREW_HOLE_X.map(x => (
        <div key={x} style={{
          position: 'absolute', top: 6, left: x,
          width: 6, height: 6, borderRadius: '50%',
          background: '#1a1a1a', border: '1px solid #555',
        }} />
      ))}

      {/* spools */}
      <div style={{ position: 'absolute', top: 14, left: 18 }}>
        <Spool spin={isOpen} />
      </div>
      <div style={{ position: 'absolute', top: 14, right: 18 }}>
        <Spool spin={isOpen} />
      </div>

      {/* center label */}
      <div style={{
        position: 'absolute', top: 12, left: 62, right: 62,
        height: 50, background: '#fef9c3',
        borderRadius: 3,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 2, overflow: 'hidden',
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)',
      }}>
        <span style={{ fontSize: 11, color: '#92400e', fontWeight: 700, letterSpacing: 0.5 }}>
          ♫ playing
        </span>
        <div style={{
          width: '80%', height: 1.5,
          background: 'repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 3px, transparent 3px, transparent 6px)',
        }} />
        <span style={{ fontSize: 9, color: '#b45309', letterSpacing: 0.3 }}>
          {isOpen ? 'tap to hide' : 'tap to play'}
        </span>
      </div>

      {/* tape window */}
      <div style={{
        position: 'absolute', bottom: 10,
        left: '50%', transform: 'translateX(-50%)',
        width: 88, height: 24,
        background: '#111', borderRadius: 5,
        border: '1px solid #444',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', overflow: 'hidden',
      }}>
        <div style={{
          width: '85%', height: 10,
          background: 'linear-gradient(90deg, #5c3317, #8B4513, #5c3317)',
          borderRadius: 2, opacity: 0.85,
        }} />
      </div>

      {/* bottom center peg */}
      <div style={{
        position: 'absolute', bottom: 4, left: '50%',
        transform: 'translateX(-50%)',
        width: 8, height: 4, borderRadius: 2,
        background: '#111', border: '1px solid #555',
      }} />
    </motion.div>
  )
}

export default CassetteTape
