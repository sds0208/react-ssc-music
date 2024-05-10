import { FaMusic } from 'react-icons/fa'

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <FaMusic />
          <div className="logo-text">SSC MUSIC</div>
        </div>
        <div className="links-container">
          <a href="" className="link">Home</a>
          <a href="" className="link">Music</a>
          <a href="" className="link">About</a>
          <a href="" className="link contact">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Nav