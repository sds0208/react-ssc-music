import { useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

const Card = ({ sample }) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  return (
    <div className={`card ${audioPlaying ? 'card-playing' : ''}`}>
      {/* <FaMusic /> */}
      <h3 className="card-title">{sample.title}</h3>
      <p className="card-description">{sample.description}</p>
      <Link className="card-link" to={sample.link}>{sample.linkText}</Link>
      <audio controls className={`${sample.audio ? '' : 'hide'}`} src={`/${sample.audio}`} onPlay={() => setAudioPlaying(true)} onPause={() => setAudioPlaying(false)}></audio>
      <div className={`${sample.percEns ? 'youtube-video': 'youtube-video hide'}`}>
        { sample.video ? parse(sample.video) : <div className="video-placeholder">Video coming soon!</div> }
      </div>
    </div>
  )
}

export default Card