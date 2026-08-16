import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Python",
      level: "90%",
      description:
        "Backend development, automation and APIs",
    },
    {
      name: "React",
      level: "88%",
      description:
        "Modern component-based frontend development",
    },
    {
      name: "Django",
      level: "90%",
      description:
        "Scalable backend applications and REST APIs",
    },
    {
      name: "JavaScript",
      level: "85%",
      description:
        "Interactive and dynamic web applications",
    },
    {
      name: "PostgreSQL",
      level: "82%",
      description:
        "Database design and data management",
    },
    {
      name: "HTML / CSS",
      level: "95%",
      description:
        "Responsive and modern web interfaces",
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p>MY SKILLS</p>

        <h2>
          Technologies I
          <span> Use</span>
        </h2>

        <div className="heading-line"></div>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <h3>{skill.name}</h3>

              <span>{skill.level}</span>
            </div>

            <p>{skill.description}</p>

            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: skill.level,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;