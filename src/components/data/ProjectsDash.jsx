import React, { useContext, useEffect } from 'react'
import LongshotDesc from './LongshotDesc'
import CometDesc from './CometDesc'
import ShuffleDesc from './ShuffleDesc'
import DataContext from '../../context/data/dataContext';
import FakerDesc from './FakerDesc'
import DopaDesc from './DopaDesc';
import FeedbackForm from './FeedbackForm'
import OritudeDesc from './OritudeDesc';
const ProjectsDash = () => {
    const dataContext = useContext(DataContext);
    const { title, setTitle } = dataContext
    const onButtonClick = (e) => {
      e.preventDefault();
      setTitle(e.target.name);
    };

    const projects = {
                      "Oritude":"fas fa-xl fa-wind",
                      "Sapling":"fas fa-xl fa-location-arrow",
                      "Comet":"fas fa-xl fa-meteor",
                      "Shuffle":"fas fa-xl fa-music",
                      "Faker":"fas fa-xl fa-rss" ,
                      "Dopa":"fas fa-xl fa-laugh-squint",

                    }
    return (
      <div className="card card-body mt-4 mb-4 bg-light">
        <h1 className="cardtitle text-primary text-center">Projects</h1>
        <div className="row h-5 m-1">
          {Object.keys(projects).map(x => (
            <button            
            name={x}
            key={x}
            className={`col btn btn-${title===x ? "primary" : "light"} btn-xl m-2`}
            onClick={onButtonClick}>
              <i className={`${projects[x]} text-${title===x ? "light" : "primary"}`}></i>
            </button>
          ))}       
        </div>
        <div className="row h-5">
          <div className="col">
            {title === "Sapling" ? (
              <LongshotDesc />
            ) : title === "Comet" ? (
              <CometDesc />
            ) : title === "Shuffle" ?(
              <ShuffleDesc />
            ) : title === "Faker" ? <FakerDesc />
            : title === "Dopa" ?<DopaDesc /> : <OritudeDesc />
            }
          </div>
        </div>
        <div className="row h-5">
          <FeedbackForm />
        </div>
      </div>
    );
  };
  

export default ProjectsDash