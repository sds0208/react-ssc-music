import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <div className="not-found-page page">
        <FaExclamationTriangle className="not-found-icon"/>
        <h1>404 Not Found</h1>
        <p>This page does not exist.</p>
        <Link to="/" className="button-link">Go Home</Link>
    </div>
  )
}

export default NotFoundPage