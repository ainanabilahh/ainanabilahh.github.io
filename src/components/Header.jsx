const VALID_LEVELS = [1, 2, 3, 4]

/**
 * Section heading with optional subtitle and doodle underline.
 *
 * @param {React.ReactNode} children - Heading text
 * @param {string} [subtitle] - Smaller italic line below the heading
 * @param {1|2|3|4} [level=2] - Heading level (h1–h4); invalid values fall back to h2
 */
function Header({ children, subtitle, level = 2 }) {
  const Tag = `h${VALID_LEVELS.includes(level) ? level : 2}`
  return (
    <div className="mb-12">
      <Tag className="doodle-heading text-5xl text-gray-800">{children}</Tag>
      {subtitle && (
        <p className="text-gray-500 italic mt-3 text-lg">{subtitle}</p>
      )}
    </div>
  )
}

export default Header
