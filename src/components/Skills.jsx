import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: "Frameworks",
    items: ["React Native", "Expo", "Flutter", "Laravel"],
    tagClass: "bg-blue-100 text-blue-900 border-blue-200",
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python"],
    tagClass: "bg-green-100 text-green-900 border-green-200",
  },
  {
    category: "Tools",
    items: ["Git", "VS Code"],
    tagClass: "bg-purple-100 text-purple-900 border-purple-200",
  },
  {
    category: "Other",
    items: ["Googling", "Debugging", "Vibe-coding"],
    tagClass: "bg-yellow-100 text-yellow-900 border-yellow-200",
  },
]

const checkboxItems = [
  { label: "can code", checked: true },
  { label: "can debug", checked: true },
  { label: "can google", checked: true },
  { label: "can stop coding", checked: false },
]

function SkillGroup({ group, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h3
        className="text-3xl text-gray-800 italic mb-4 text-left"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {group.items.map((skill, i) => (
          <span
            key={i}
            className={`${group.tagClass} px-4 py-2 rounded-lg text-base border font-mono`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <motion.h2
            className="doodle-heading text-5xl text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills &amp; Tools
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} delay={i * 0.1} />
          ))}
        </div>

        {/* Checkbox doodle row */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-gray-500 italic text-lg"
          style={{ fontFamily: "'Caveat', cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {checkboxItems.map(({ label, checked }) => (
            <span key={label} className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="14" height="14" rx="2" stroke="#9ca3af" strokeWidth="1.5" />
                {checked && (
                  <path d="M3.5 8 L6.5 11.5 L12.5 4.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
