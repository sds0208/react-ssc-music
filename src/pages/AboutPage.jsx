import headshot from '../assets/SSC-Headshot.jpeg'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Sarah</h1>
      <div className="about-content">
        <div className="headshot">
          <img src={ headshot } alt="headshot of Sarah Santa Cruz" />
        </div>
        <div className="text-content">
          <p className="bio">Sarah Santa Cruz is a percussion composer and arranger, as well as a web developer. She has been composing and arranging since 2004, and has written for dozens of marching band percussion sections across the state of Texas and beyond. Sarah has also had 3 percussion ensemble pieces commissioned and played at Midwest Clinic, and 1 played at PASIC.</p>
          <p className="bio">Sarah is a graduate of the University of North Texas with a Bachelor of Music, where she played snare and bass in the drumline, and played in the Afro-Cuban, Gamelan, and South Indian Ensembles. She was also a member of the Blue Knights snare line in 2004. Before transitioning to a career in web development in 2018, she was a high school percussion director for 9 years, with the last 8 of those being at Westwood High School in Austin.</p>
          <p className="bio">When you hire Sarah to write something, you can count on it being high quality, written at the appropriate skill level, and on time. She is known for professionalism and thoughtfulness with each group she works with, and keeps the teaching process in mind when writing.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage