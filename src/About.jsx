import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p>ABOUT ME</p>

        <h2>
          Building Digital
          <span> Experiences</span>
        </h2>

        <div className="heading-line"></div>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h3>
            Full Stack Developer passionate
            about building modern web applications.
          </h3>

          <p>
            I'm a Python Full Stack Developer who
            enjoys creating scalable, responsive and
            user-friendly applications.
          </p>

          <p>
            I work across the entire development
            stack, from designing clean user
            interfaces to developing powerful
            backend systems and APIs.
          </p>

          <p>
            My goal is to turn ideas into fast,
            reliable and beautiful digital products.
          </p>

          <a href="#contact" className="about-button">
            Let's Work Together →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;