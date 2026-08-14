import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>
            SJ Sharin<span>.</span>
          </h3>

          <p>
            Python Full Stack Developer
          </p>
        </div>

        <div className="social-links">
          <a href="#home">GitHub</a>
          <a href="#home">LinkedIn</a>
          <a href="#home">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 SJ sharin. All Rights Reserved.
        </p>

        <a href="#home">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;