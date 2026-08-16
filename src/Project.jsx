import "./Project.css";

import law from "./law.jpeg";
import project2 from "./project2.jpeg";
import project3 from "./project3.jpeg";

function Projects() {
  const projects = [
    {
      title: "Project One (Justice Law Associates)",
      description:
        "A modern responsive legal services website featuring an advocate profile, practice areas, testimonials, legal insights, and an online consultation section.",
      image: law,
      link: "https://sjsharin.github.io/sample/",
    },

    {
      title: "Project Two(Space for next project)",
      description:
        "Not created yet will be updated soon",
      image: project2,
      link: "https://example.com",
    },

    {
      title: "Project Three(Space for next project)",
      description:
        "Not not created yet will be updated soon",
      image: project3,
      link: "https://example.com",
    },
  ];

  return (
    <section className="projects section" id="projects">

      {/* Section Heading */}
      <div className="section-heading">
        <p>MY WORK</p>

        <h2>
          Featured
          <span> Projects</span>
        </h2>

        <div className="heading-line"></div>
      </div>


      {/* Projects */}
      <div className="projects-container">

        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >

            {/* Project Image */}
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>


            {/* Project Content */}
            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-link">
                View Project →
              </span>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default Projects;