import "./Hero.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I’m</p>

        <h1 className="hero-name">
          Aishwarya <span>Jadhav</span>
        </h1>

        <h2 className="hero-role">
          Full Stack Developer
        </h2>

        <p className="hero-desc">
          I build scalable full-stack web applications using
          React, Spring Boot, and MySQL with a focus on clean
          UI and reliable backend systems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="../Aishwarya2003.pdf"
            target="_blank"
            className="btn-secondary"
          >
            Resume
          </a>
        </div>

        <p className="hero-note">
          Open to Full Stack / Java Developer roles
        </p>
      </div>
    </section>
  );
}

export default Home;
