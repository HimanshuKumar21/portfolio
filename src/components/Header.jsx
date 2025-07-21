import { header } from '../portfolio'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className="header">
      <a href='\' className="header-link" target="_blank" rel="noopener noreferrer">
        
        {title}
      </a>
    </header>
  )
}

export default Header
