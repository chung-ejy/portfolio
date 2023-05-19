import React, { useContext, useEffect } from 'react'
import LongshotDesc from './LongshotDesc'
import CometDesc from './CometDesc'
import ShuffleDesc from './ShuffleDesc'
import DataContext from '../../context/data/dataContext';
import FakerDesc from './FakerDesc'
import DopaDesc from './DopaDesc';

const ProjectsDash = () => {
    const dataContext = useContext(DataContext);
    const { title, setTitle } = dataContext
    const onButtonClick = (e) => {
      e.preventDefault();
      setTitle(e.target.name);
    };

    useEffect(() => {

    }, [title]);
    const projects = {"Longshot":"fas fa-xl fa-location-arrow",
                      "Comet":"fas fa-xl fa-meteor",
                      "Shuffle":"fas fa-xl fa-music",
                      "Faker":"fas fa-xl fa-rss" ,
                      "Dopa":"fas fa-xl fa-laugh-squint"
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
            {title === "Longshot" ? (
              <LongshotDesc />
            ) : title === "Comet" ? (
              <CometDesc />
            ) : title === "Shuffle" ?(
              <ShuffleDesc />
            ) : title === "Faker" ? <FakerDesc />
            : <DopaDesc />}
          </div>
        </div>
      </div>
    );
  };
  

export default ProjectsDash