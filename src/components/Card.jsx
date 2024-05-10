import { useState } from 'react'

const Card = ({ sample }) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  return (
    <div className={`card ${audioPlaying ? 'card-playing' : ''}`}>
      {/* <FaMusic /> */}
      <h3 className="card-title">{sample.title}</h3>
      <p className="card-description">{sample.description}</p>
      <audio controls src={`src/assets/${sample.audio}`} onPlay={() => setAudioPlaying(true)} onPause={() => setAudioPlaying(false)}></audio>
    </div>
  )
}

export default Card