import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-box">
          <h4>Frontend</h4>
          <div className="skill-tags">
            <span>React Js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
             <span>APIs</span>
             <span>BootStrap</span>
              <span>Tailwind CSS</span>
               <span>Redux</span>
                <span>Typescript</span>
          </div>
        </div>

        <div className="skill-box">
          <h4>Backend</h4>
          <div className="skill-tags">
            <span>Java</span>
             <span>Spring framework</span>
            <span>Spring Boot</span>
             <span>Spring MVC</span>
              <span>Spring JPA</span>
               <span>Filter</span>
                <span>Servlet</span>
                 <span>ORM</span>
            <span>REST APIs</span>
             <span>Thymeleaf</span>
            <span>JPA / Hibernate</span>
          </div>
        </div>

        <div className="skill-box">
          <h4>Database</h4>
          <div className="skill-tags">
            <span>MySQL</span>
             <span>Oracle</span>
          </div>
        </div>

        <div className="skill-box">
          <h4>Tools</h4>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
             <span>Maven</span>
              <span>Gradle</span>
            <span>Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
