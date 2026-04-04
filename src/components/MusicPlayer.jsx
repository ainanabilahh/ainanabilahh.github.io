import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CassetteTape from './CassetteTape'
import useMobile from '../hooks/useMobile'

const YOUTUBE_ID = 'OnmVaR4ReQw'

function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => { setIsOpen(false) }, [isMobile])

  return (
    <div className={`fixed z-50 ${isMobile ? 'bottom-4 right-4' : 'bottom-8 left-8'}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              marginBottom: 10, borderRadius: 10, overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              border: '2px solid #d4cfbf',
              ...(isMobile && { position: 'absolute', bottom: '100%', right: 0 }),
            }}
          >
            <iframe
              width={isMobile ? 220 : 300}
              height={isMobile ? 124 : 170}
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_ID}&controls=1`}
              title="Background music player"
              style={{ border: 0, display: 'block' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-fullscreen"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isMobile ? (
        <motion.button
          aria-label="Toggle music player"
          aria-pressed={isOpen}
          onClick={() => setIsOpen(o => !o)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          style={{
            width: 44, height: 44, borderRadius: '50%',
            background: isOpen
              ? 'linear-gradient(135deg, #f4a0a0, #f9c3c3)'
              : 'linear-gradient(135deg, #2a2a2a, #363636)',
            border: '2px solid #111',
            boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, color: isOpen ? '#92400e' : '#fef9c3',
          }}
        >
          ♫
        </motion.button>
      ) : (
        <CassetteTape isOpen={isOpen} onClick={() => setIsOpen(o => !o)} />
      )}
    </div>
  )
}

export default MusicPlayer
