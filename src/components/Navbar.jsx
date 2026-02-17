import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">Aishwarya</h2>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          <li>
            <a
              href="https://github.com/aish2605"
              target="_blank"
              className="github-btn"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
