import Card from './Card'
import { musicSamples } from '../data/music-samples'

const Samples = ({ featured }) => {
  const samples = featured ? musicSamples.slice(0, 3) : musicSamples;
  return (
    <div className="samples">
        {samples.map((sample) => (
          <Card key={sample.id} sample={sample} />
      ))}
    </div>
  )
}

export default Samples