import { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
// Used when testing locally
// import data from "../data/music-samples.json";

const Samples = ({ featured = false, isPercEns = false }) => {
  const [allSamples, setAllSamples] = useState([]);
  const [loading, setLoading] = useState(true);

  // Used when testing locally
  // useEffect(() => {
  //   let dataToUse = data;
  //   if (featured) {
  //     dataToUse = dataToUse.musicSamples
  //       .filter((sample) => sample.featured)
  //       .concat(
  //         dataToUse.percussionEnsembles.filter((sample) => sample.featured)
  //       );
  //   } else if (isPercEns) {
  //     dataToUse = dataToUse.percussionEnsembles;
  //   } else {
  //     dataToUse = dataToUse.musicSamples;
  //   }
  //   setAllSamples(dataToUse);
  //   setLoading(false);
  // }, [featured, isPercEns]);

  // Used in production
  useEffect(() => {
    const fetchAllSamples = async () => {
      try {
        const res = await fetch(
          "https://ssc-music-api-aade7303f89a.herokuapp.com/music"
        );
        let data = await res.json();
        if (featured) {
          data = data.musicSamples
            .filter((sample) => sample.featured)
            .concat(
              data.percussionEnsembles.filter((sample) => sample.featured)
            );
        } else if (isPercEns) {
          data = data.percussionEnsembles;
        } else {
          data = data.musicSamples;
        }
        setAllSamples(data);
      } catch (error) {
        console.error("Error in fetch call for music samples.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllSamples();
  }, [featured, isPercEns]);

  return (
    <div className={isPercEns ? "samples percussion-ensembles" : "samples"}>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          {allSamples.map((sample) => (
            <Card key={sample.id} sample={sample} />
          ))}
        </>
      )}
    </div>
  );
};

export default Samples;
