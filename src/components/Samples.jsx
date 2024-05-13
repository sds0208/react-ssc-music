import { useEffect, useState } from 'react'
import Card from './Card'
// import { percussionEnsembles } from '../data/music-samples'

const Samples = ({ featured = false, isPercEns = false }) => {
  const [allSamples, setAllSamples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllSamples = async () => {
      try {
        const res = await fetch('http://localhost:3000');
        let data = await res.json();
        if (featured) {
          data = data.musicSamples.filter((sample) => sample.featured).concat(data.percussionEnsembles.filter((sample) => sample.featured))
        } else if (isPercEns) {
          data = data.percussionEnsembles;
        } else {
          data = data.musicSamples;
        }
        setAllSamples(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error in fetch call for music samples.', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAllSamples();
  }, []);
   
  return (
    <div className={ isPercEns ? 'samples percussion-ensembles' : 'samples' }>
      {allSamples.map((sample) => (
        <Card key={sample.id} sample={sample} />
      ))}
    </div>
  )
}

export default Samples