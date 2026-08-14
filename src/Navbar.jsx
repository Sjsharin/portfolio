import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        Sj Sharin<span>.</span>
      </div>

      <nav className="nav-links">
        <a className="active" href="#home">
          Home
        </a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Get In Touch
      </a>
    </header>
  );
}

export default Navbar;