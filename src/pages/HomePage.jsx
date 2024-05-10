import Hero from '../components/Hero'
import Featured from '../components/Featured'
import ButtonGroup from '../components/ButtonGroup'

const HomePage = () => {
  return (
    <div className="page">
      <Hero />
      <Featured />
      <ButtonGroup />
    </div>
  )
}

export default HomePage