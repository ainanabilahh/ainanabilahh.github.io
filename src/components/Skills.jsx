function Skills() {
  const skills = [
    { category: "Frameworks", items: ["React Native", "Expo", "Flutter", "Laravel"] },
    { category: "Languages", items: ["TypeScript", "JavaScript", "PHP", "Python"] },
    { category: "Tools", items: ["Git", "VS Code"] },
    { category: "Other", items: ["Googling", "Debugging", "Vibe-coding"] }
  ]

  const tapeStyles = [
    "absolute -top-3 left-1/4 w-16 h-6 bg-[#fef4e4] opacity-60 shadow-sm rotate-[-8deg]",
    "absolute -top-3 right-1/4 w-16 h-6 bg-[#fef4e4] opacity-60 shadow-sm rotate-[5deg]",
    "absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#fef4e4] opacity-60 shadow-sm rotate-[-3deg]",
    "absolute -top-3 left-1/3 w-16 h-6 bg-[#fef4e4] opacity-60 shadow-sm rotate-[7deg]"
  ]

  const cardRotations = [
    "rotate-1 hover:rotate-[-3deg]",
    "rotate-[-2deg] hover:rotate-[1deg]",
    "rotate-[3deg] hover:rotate-[-1deg]",
    "rotate-[-1deg] hover:rotate-[2deg]"
  ]

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl mb-12 text-gray-800">Skills & Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`relative bg-white p-6 pb-10 shadow-md inline-block transition-transform ${cardRotations[index]}`}
            >
              <div className={tapeStyles[index]}>
                <div className="absolute inset-0 border border-[#e8dcc8]"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-300 hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
