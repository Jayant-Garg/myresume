const Skills = () => {
  const skills = [
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React.js", icon: "fa-brands fa-react" },
    { name: "Material UI", icon: "fa-solid fa-palette" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "Figma", icon: "fa-brands fa-figma" },
  ];

  return (
    <section id="skills" className="bg-primary text-white scroll-mt-10">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 px-11 md:px-16 lg:px-24">
        <div>
          <h2 className="title">Professional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-[#333] rounded-lg shadow-md"
              >
                <i className={`${skill.icon} text-4xl md:text-5xl lg:text-6xl text-accent`}></i>
                <span className="text-base md:text-lg lg:text-xl font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
