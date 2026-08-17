function ProjectCard({ title, role, period, description, details = [], tech = [], link }) {
  const content = (
    <>
      <div className="project-heading">
        <div>
          <p className="project-period">{period}</p>
          <h3>{title}</h3>
        </div>
        {link && <span aria-hidden="true">↗</span>}
      </div>
      <p className="project-role">{role}</p>
      {description && <p>{description}</p>}
      {details.length > 0 && (
        <ul className="project-details">
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      )}
      {tech.length > 0 && (
        <ul className="tech-list" aria-label="Technologies used">
          {tech.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </>
  );

  return (
    <article>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" aria-label={`View ${title} project`}>
          {content}
        </a>
      ) : content}
    </article>
  );
}

export default ProjectCard;
