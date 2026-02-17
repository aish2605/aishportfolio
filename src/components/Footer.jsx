import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Aishwarya Jadhav</h3>
        <p>Full Stack Developer</p>

        <div className="footer-links">
          <a href="https://github.com/aish2605" target="_blank">GitHub</a>
          <a href="#contact">Contact</a>
          <a href="../Aishwarya2003.pdf" target="_blank">Resume</a>
        </div>

        <span className="footer-copy">
          © 2026 Aishwarya Jadhav. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
