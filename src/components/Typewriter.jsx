import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Animates text appearing character by character.
 * Respects prefers-reduced-motion — shows the full text instantly when reduced motion is on.
 *
 * @param {string} text - The string to type out
 */
function Typewriter({ text }) {
  const reduced = useReducedMotion()
  const [displayed, setDisplayed] = useState(reduced ? text : '')

  useEffect(() => {
    if (reduced) {
      setDisplayed(text)
      return
    }
    let i = 0
    const t = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(t)
    }, 70)
    return () => clearInterval(t)
  }, [text, reduced])

  return (
    <span>
      {displayed}
      {!reduced && displayed.length < text.length && (
        <span className="animate-pulse ml-0.5">|</span>
      )}
    </span>
  )
}

export default Typewriter
