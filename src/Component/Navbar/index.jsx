import "./navbar.css";
import resumeCV from "../../assets/resume/KadirShaikh_FrontendDeveloper.pdf";

function Navbar() {
  return (
    <nav className="nav_container">
      <div className="nav_left">
        <a href="#home">Home</a>
      </div>
      <div className="nav_right">
        <a href="#about" className="nav_link">
          About
        </a>
        <a href="#experience" className="nav_link">
          Experience
        </a>
        <a href="#projects" className="nav_link">
          Projects
        </a>
        <a href="#skills" className="nav_link">
          Skills
        </a>
        <a href="#contact" className="nav_link">
          Contact
        </a>
        <a download href={resumeCV}>
          <button className="nav_resume_btn">Resume</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
