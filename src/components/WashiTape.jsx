const variants = {
  stripes: (color = '#fda4af', stripe = '#fecdd3') => ({
    background: `repeating-linear-gradient(45deg, ${color} 0px, ${color} 3px, ${stripe} 3px, ${stripe} 9px)`,
    borderTop: `1px solid ${color}33`,
    borderBottom: `1px solid ${color}33`,
  }),
  dots: (color = '#a7f3d0', dot = '#059669') => ({
    backgroundColor: color,
    backgroundImage: `radial-gradient(circle, ${dot} 1.5px, transparent 1.5px)`,
    backgroundSize: '8px 8px',
    borderTop: `1px solid ${dot}33`,
    borderBottom: `1px solid ${dot}33`,
  }),
}

/**
 * Decorative tape strip rendered as a styled div.
 *
 * @param {'stripes'|'dots'} [variant='stripes'] - Visual pattern
 * @param {string} [color] - Primary colour (defaults per variant)
 * @param {string} [accent] - Stripe or dot colour (defaults per variant)
 * @param {number|string} [width=64] - Width in px or CSS string
 * @param {number|string} [height=22] - Height in px or CSS string
 * @param {number} [opacity] - Opacity override (defaults: stripes=0.88, dots=0.82)
 * @param {React.CSSProperties} [style={}] - Extra inline styles (position, transform, etc.)
 */
function WashiTape({ variant = 'stripes', color, accent, width = 64, height = 22, opacity, style = {} }) {
  const defaultOpacity = variant === 'dots' ? 0.82 : 0.88
  const variantStyle = variants[variant]
    ? variants[variant](color, accent)
    : variants.stripes(color, accent)

  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height,
        opacity: opacity ?? defaultOpacity,
        ...variantStyle,
        ...style,
      }}
    />
  )
}

export default WashiTape
