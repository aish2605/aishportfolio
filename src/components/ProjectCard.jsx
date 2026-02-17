import "./ProjectCard.css";

function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>

      <p className="project-desc">{description}</p>

      <p className="project-tech">
        <b>Tech:</b> {tech}
      </p>

      <div className="project-links">
        <a href={github} target="_blank">GitHub</a>
        {live && <a href={live} target="_blank">Live Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
