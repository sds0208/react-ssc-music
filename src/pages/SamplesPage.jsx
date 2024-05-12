import Samples from '../components/Samples'
import { musicSamples, percussionEnsembles } from '../data/music-samples'

const SamplesPage = () => {
  return (
    <div className="page samples-page">
        <h1>Music Samples</h1>
        <h2>Front Ensemble Marching Band Arrangements</h2>
        {/* <p className="section-description">These are movements from shows written for high school marching bands. Every arrangement is custom for your group and dependent on the instrumentation and skill level. Front ensemble parts for all movements below are written by Sarah Santa Cruz. Battery is written by Rick Rodriguez.</p> */}
        <Samples className="marching-band" musicSamples={ musicSamples }/>
        <h2>Concert Percussion Ensembles</h2>
        <Samples musicSamples={ percussionEnsembles } isPercEns={ true }/>
    </div>
  )
}

export default SamplesPage