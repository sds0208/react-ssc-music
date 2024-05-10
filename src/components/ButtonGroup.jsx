import { Link } from 'react-router-dom'

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Link className="button-link" to="/samples">View More Samples</Link>
      <Link className="button-link" to="/contact">Contact</Link>
    </div>
  )
}

export default ButtonGroup