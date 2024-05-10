const Hero = ({ title = 'Percussion Composition and Arranging Services', subtitle = 'By Sarah Santa Cruz. For marching band & percussion ensemble.' }) => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Hero