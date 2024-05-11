import { NavLink } from 'react-router-dom'
import { FaMusic } from 'react-icons/fa'

const Nav = () => {
  const linkClass = ({ isActive }) => isActive ? 'active-link link' : 'link';
  return (
    <>
      <nav>
        <NavLink to="/" className="link logo-link">
          <div className="logo">
            <FaMusic className="logo-icon"/>
            <div className="logo-text">SSC MUSIC</div>
          </div>
        </NavLink>
        <div className="links-container">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/samples" className={linkClass}>Music</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className='link contact'>Contact</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav