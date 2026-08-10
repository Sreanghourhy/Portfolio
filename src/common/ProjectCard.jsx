function ProjectCard({ src, link, h3, p, tech }) {
  return (
    <article>
      <a href={link} target="_blank" rel="noreferrer" aria-label={`View ${h3} project`}>
        <img src={src} alt={`${h3} project preview`} />
        <div className="project-content">
          <div className="project-heading">
            <h3>{h3}</h3>
            <span aria-hidden="true">↗</span>
          </div>
          <p>{p}</p>
          <ul aria-label="Technologies used">
            {tech.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </a>
    </article>
  );
}

export default ProjectCard;
