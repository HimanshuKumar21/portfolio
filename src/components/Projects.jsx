import { projects } from '../portfolio'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ name, description, stack, sourceCode, livePreview }) => (
          <div className="project-card" key={name}>
            <h3>{name}</h3>
            <p>{description}</p>

            {stack && (
              <ul className="project-stack">
                {stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}

            <div className="project-links">
              {sourceCode && (
                <a href={sourceCode} className="btn" target="_blank" rel="noopener noreferrer">
                  <FaCode /> Source
                </a>
              )}
              {livePreview && (
                <a href={livePreview} className="btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
