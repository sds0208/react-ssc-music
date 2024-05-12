import Card from './Card'
import { percussionEnsembles } from '../data/music-samples'

const Samples = ({ featured = false, musicSamples, isPercEns = false }) => {
  let samples = musicSamples;
  if (featured) {
    samples = musicSamples.filter((sample) => sample.featured).concat(percussionEnsembles.filter((sample) => sample.featured))
  }  
  return (
    <div className={ isPercEns ? 'samples percussion-ensembles' : 'samples' }>
      {samples.map((sample) => (
        <Card key={sample.id} sample={sample} />
      ))}
    </div>
  )
}

export default Samples