/**
 * @param {{ children: React.ReactNode, color?: string, className?: string }} props
 */
function Badge({ children, color = '#f4a0a0', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`inline-block px-3 py-0.5 -rotate-2 opacity-90 text-[0.9rem] tracking-[0.06em] rounded-[3px] ${className}`}
      style={{ color, border: `1.5px solid ${color}` }}
    >
      {children}
    </div>
  )
}

export default Badge
