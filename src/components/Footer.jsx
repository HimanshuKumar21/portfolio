import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/HimanshuKumar21"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub style={{ marginRight: '6px' }} />
        © {new Date().getFullYear()} Himanshu Kumar
      </a>
    </footer>
  )
}

export default Footer
