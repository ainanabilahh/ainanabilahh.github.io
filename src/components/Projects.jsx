import { motion } from 'framer-motion'
import WashiTape from './WashiTape'
import Header from './Header'
import { projects } from '../data/projects'

const cardColors = ['#fef9c3', '#ffedd5', '#ede9fe']
const tapeColors = ['#fde68a', '#fed7aa', '#ddd6fe']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, rotate: 0.5, transition: { duration: 0.2 } }}
      style={{
        background: cardColors[index % cardColors.length],
        boxShadow: '3px 4px 12px rgba(0,0,0,0.1), inset 0 -2px 6px rgba(0,0,0,0.03)',
        borderRadius: 6,
        padding: '20px 22px',
        position: 'relative',
        minHeight: 160,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <WashiTape
        variant="stripes"
        color={tapeColors[index % tapeColors.length]}
        width={60}
        height={20}
        style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%) rotate(-2deg)', borderRadius: 2 }}
      />

      {project.tag && (
        <span style={{
          alignSelf: 'flex-start',
          fontSize: 10,
          padding: '2px 8px',
          borderRadius: 10,
          background: 'rgba(255,255,255,0.7)',
          color: '#9ca3af',
          border: '1px solid #e5e7eb',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          {project.tag}
        </span>
      )}

      <h3
        style={{
          fontSize: 20,
          margin: 0,
          color: '#1f2937',
        }}
      >
        {project.name}
      </h3>

      <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {project.stack.map(tech => (
          <span
            key={tech}
            style={{
              fontSize: 11,
              padding: '2px 8px',
              borderRadius: 4,
              border: '1.5px solid #9ca3af',
              color: '#374151',
              background: 'rgba(255,255,255,0.6)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: 13,
          color: '#f4a0a0',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: 0.3,
          alignSelf: 'flex-start',
        }}
      >
        → {project.linkLabel}
      </a>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" aria-label="Side projects" className="min-h-screen flex flex-col justify-center items-center py-20 text-center">
      <Header subtitle="things i built outside of work — did a lot, but only the ones that survived are here">Side Projects</Header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[828px]">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
