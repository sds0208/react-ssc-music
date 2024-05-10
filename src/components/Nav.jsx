import { Link } from 'react-router-dom'
import { FaMusic } from 'react-icons/fa'

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/" className="link logo-link">
          <div className="logo">
            <FaMusic />
            <div className="logo-text">SSC MUSIC</div>
          </div>
        </Link>
        <div className="links-container">
          <Link to="/" className="link">Home</Link>
          <Link to="/samples" className="link">Music</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/contact" className="link contact">Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav