/**
 * Full-width wavy SVG divider between sections.
 */
function Separator() {
  return (
    <div className="w-full flex justify-center py-6">
      <svg
        width="75%"
        height="20"
        viewBox="0 0 600 20"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 C30 4, 60 16, 90 10 C120 4, 150 16, 180 10 C210 4, 240 16, 270 10 C300 4, 330 16, 360 10 C390 4, 420 16, 450 10 C480 4, 510 16, 540 10 C570 4, 590 14, 600 10"
          stroke="#c8bfaf"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default Separator
