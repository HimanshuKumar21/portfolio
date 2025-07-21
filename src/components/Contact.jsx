import { contact, about } from '../portfolio'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className="contact">
      <h2 className="section-title">Contact</h2>
      <p>Feel free to reach out to me via email or connect on LinkedIn and GitHub.</p>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`} className="btn">
          <FaEnvelope /> Email Me
        </a>
        {about.social.linkedin && (
          <a href={about.social.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        )}
        {about.social.github && (
          <a href={about.social.github} className="btn" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </section>
  )
}

export default Contact
