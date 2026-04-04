import { motion } from 'framer-motion'
import { icons } from '../constants/icons'
import Header from './Header'
import Badge from './Badge'

const skillGroups = [
  {
    category: "Frameworks",
    items: ["React Native", "Expo", "Flutter", "Laravel"],
    tagClass: "bg-blue-100 text-blue-900 border-blue-200",
    color: "#93c5fd",
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python"],
    tagClass: "bg-green-100 text-green-900 border-green-200",
    color: "#6ee7b7",
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "MySQL", "Postman"],
    tagClass: "bg-purple-100 text-purple-900 border-purple-200",
    color: "#c4b5fd",
  },
  {
    category: "Other",
    items: ["Googling", "Vibe-coding", "Rubber duck debugging"],
    tagClass: "bg-yellow-100 text-yellow-900 border-yellow-200",
    color: "#fcd34d",
  },
]

const checkboxItems = [
  { label: "can code", checked: true },
  { label: "can debug", checked: true },
  { label: "can google", checked: true },
  { label: "can prompt", checked: true },
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
      <div className="flex justify-start mb-4">
        <Badge color={group.color} className="text-4xl px-5 py-1.5">{group.category}</Badge>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {group.items.map((skill) => (
          <span
            key={skill}
            className={`${group.tagClass} flex items-center gap-1.5 px-3 py-2 rounded-lg text-base border`}
          >
            {icons[skill] && (
              <span className="w-4 h-4 flex-shrink-0">{icons[skill]}</span>
            )}
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" aria-label="Skills and tools" className="min-h-screen flex flex-col justify-center items-center px-8">
      <div className="max-w-4xl w-full text-center">
        <Header>Skills &amp; Tools</Header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 text-gray-500 italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {checkboxItems.map(({ label, checked }) => (
            <span key={label} className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
