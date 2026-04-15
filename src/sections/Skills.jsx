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
                <span>figma</span>
          </div>
        </div>

        <div className="skill-box">
          <h4>Backend</h4>
          <div className="skill-tags">
            <span>Java</span>
             <span>Spring framework</span>
               <span>MYSQL</span>
               <span>Generative AI</span>
                 <span>AI Agent</span>
            <span>Spring Boot</span>
              <span>Microservices</span>
             <span>Spring MVC</span>
              <span>Spring JPA</span>
               <span>Filter</span>
                <span>Servlet</span>
                 <span>ORM</span>
            <span>REST APIs</span>
              <span>Jira</span>
             <span>Thymeleaf</span>
            <span>JPA / Hibernate</span>
            <span>firebase</span>
             
                
                   
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
                <span>Intellij</span>
              <span>Gradle</span>
                  <span>eclipse</span>
                  
            <span>Postman</span>
             <span>Copilot</span>
<span>Docker</span>
                  <span>log4j</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
