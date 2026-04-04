const backgrounds = {
  yellow: 'linear-gradient(104deg, transparent 0.5%, #fef08a 1.5%, #fef08a 95%, transparent 96%)',
  pink:   'linear-gradient(104deg, transparent 0.5%, #fbcfe8 1.5%, #fbcfe8 95%, transparent 96%)',
}

/**
 * Inline text highlighter — renders children with a marker-pen gradient background.
 *
 * @param {React.ReactNode} children - Text to highlight
 * @param {'yellow'|'pink'} [color='yellow'] - Highlight colour; unknown values fall back to yellow
 */
function Highlight({ children, color = 'yellow' }) {
  const bg = backgrounds[color] ?? backgrounds.yellow
  return (
    <span style={{ background: bg, padding: '0.05em 0.15em', borderRadius: 2 }}>
      {children}
    </span>
  )
}

export default Highlight
