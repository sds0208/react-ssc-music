import Samples from './Samples'
import { musicSamples } from '../data/music-samples'

const Featured = () => {
  return (
    <div className="featured">
        <h2>Featured Music</h2>
        <Samples featured={true} musicSamples={ musicSamples }/>
    </div>
  )
}

export default Featured