import React, { useContext, useEffect } from 'react'
import LongshotDesc from './LongshotDesc'
import CometDesc from './CometDesc'
import ShuffleDesc from './ShuffleDesc'
import DataContext from '../../context/data/dataContext';
import FakerDesc from './FakerDesc'

const Projects = () => {
    const dataContext = useContext(DataContext);
    const { title, setTitle } = dataContext
    const onButtonClick = (e) => {
      e.preventDefault();
      setTitle(e.target.name);
    };

    useEffect(() => {

    }, [title]);

    return (
      <div className="card card-body mt-4 mb-4 bg-transparent">
        <h1 className="text-primary text-left">Projects</h1>
        <div className="row h-5 m-1">
            <button            
            name="Longshot"
            className={`col btn btn-${title=="Longshot" ? "primary" : "secondary"} btn-xl m-2`}
            onClick={onButtonClick}>
              <i className={`fas fa-xl fa-location-arrow text-${title=="Longshot" ? "light" : "primary"}`}></i>
            </button>
          <button
            name="Comet"
            className={`col btn btn-${title=="Comet" ? "primary" : "secondary"} btn-xl m-2`}
            onClick={onButtonClick}
          >
            <i className={`fas fa-xl fa-meteor text-${title=="Comet" ? "light" : "primary"}`}></i>
          </button>
          <button
            name="Shuffle"
            className={`col btn btn-${title=="Shuffle" ? "primary" : "secondary"} btn-xl m-2`}
            onClick={onButtonClick}
          >
            <i className={`fas fa-xl fa-music text-${title=="Shuffle" ? "light" : "primary"}`}></i>
          </button>
          <button
            name="Faker"
            className={`col btn btn-${title=="Faker" ? "primary" : "secondary"} btn-xl m-2`}
            onClick={onButtonClick}
          >
            <i className={`fas fa-xl fa-rss text-${title=="Faker" ? "light" : "primary"}`}></i>
          </button>
        </div>
        <div className="row h-5">
          <div className="col">
            {title === "Longshot" ? (
              <LongshotDesc />
            ) : title === "Comet" ? (
              <CometDesc />
            ) : title === "Shuffle" ?(
              <ShuffleDesc />
            ) : <FakerDesc />}
          </div>
        </div>
      </div>
    );
  };
  

export default Projects