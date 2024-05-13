import Samples from '../components/Samples'

const SamplesPage = () => {
  return (
    <div className="page samples-page">
        <h1>Music Samples</h1>
        <h2>Front Ensemble Marching Band Arrangements</h2>
        <Samples className="marching-band" />
        <h2>Concert Percussion Ensembles</h2>
        <Samples isPercEns={ true }/>
    </div>
  )
}

export default SamplesPage