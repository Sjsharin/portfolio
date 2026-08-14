import "./Hero.css";
import profile from "./profile.png"

function Hero() {
  const technologies = [
    "Python",
    "Django",
    "React",
    "PostgreSQL",
    "HTML5",
    "CSS3",
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-small-title">
            Hi, I'm Sj
          </p>

          <h1>
            Python
            <br />
            Full Stack
            <br />
            <span>Developer</span>
          </h1>

          <p className="hero-description">
            I create efficient, scalable and
            <br />
            user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-button"
            >
              View Projects
              <span>→</span>
            </a>

            <a
              href="/resume.pdf"
              className="secondary-button"
              download
            >
              Download CV
              <span>↓</span>
            </a>
          </div>

        </div>

        <div className="hero-right">
          <div className="glow-circle"></div>

          <div className="hero-dots"></div>

          <img
            src={profile}
            alt="Developer"
            className="profile-image"
          />

          <div className="profile-glow"></div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>Fresher</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>2+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>5+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;