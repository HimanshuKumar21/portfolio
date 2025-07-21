import { about } from '../portfolio'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section className="about">
      <h1>
        Hi, I am <span className="highlight">{name}</span>
      </h1>
      <h2>{role}</h2>
      <p>{description}</p>

      <div className="about-links">
        {resume && (
          <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">
            <HiOutlineDocumentText /> Resume
          </a>
        )}
        {social?.linkedin && (
          <a href={social.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        )}
        {social?.github && (
          <a href={social.github} className="btn" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </section>
  )
}

export default About
