import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="contact-page page">
      <h1>Contact Sarah</h1>
      <p className="subheader">If you are interested in learning more about working with me for either front ensemble arranging or commissioning a percussion ensemble, please get in touch!</p>
      <p className="contact-info">
        <span><strong>Email:</strong></span>
        <Link className="contact-link" to="mailto: sarahsantacruz86@gmail.com">santacruzpercussion@gmail.com</Link>
      </p>
      <p className="contact-info">
        <span><strong>Phone:</strong></span>
        <Link className="contact-link" to="tel: 281-734-8765">281-734-8765</Link>
      </p>
    </div>
  )
}

export default ContactPage