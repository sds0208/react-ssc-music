import Samples from "./Samples"

const Featured = () => {
  return (
    <div className="featured">
      <h2>Featured Music Samples</h2>
      <Samples featured={true} />
    </div>
  )
}

export default Featured