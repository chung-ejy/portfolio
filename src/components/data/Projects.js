import React, { useContext, useEffect } from 'react'
import LongshotDesc from './LongshotDesc'
import CometDesc from './CometDesc'
import ShuffleDesc from './ShuffleDesc'
import PriceForm from './PriceForm'
import ShuffleForm from './ShuffleForm'
import DataContext from '../../context/data/dataContext';

const Projects = () => {
    const dataContext = useContext(DataContext);
    const { title, setTitle} = dataContext


    useEffect(() => {
        console.log(title)
      }, [title]);
    
    const onButtonClick = (e) => {
      e.preventDefault();
      setTitle(e.target.name);
    };
  
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Projects</h1>
        <div className="row">
          <button
            name="Longshot"
            className={`col btn btn-primary btn-sm m-2`}
            onClick={onButtonClick}
          >
            Longshot
          </button>
          <button
            name="Comet"
            className={`col btn btn-primary btn-sm m-2`}
            onClick={onButtonClick}
          >
            Comet
          </button>
          <button
            name="Shuffle"
            className={`col btn btn-primary btn-sm m-2`}
            onClick={onButtonClick}
          >
            Shuffle
          </button>
        </div>
        <div className="row">
          <div className="col">
            {title === "Shuffle" ? (
              <ShuffleForm />
            ) : (
              <PriceForm /> // Update this line
            )}
          </div>
          <div className="col">
            {title === "Longshot" ? (
              <LongshotDesc />
            ) : title === "Comet" ? (
              <CometDesc />
            ) : (
              <ShuffleDesc />
            )}
          </div>
        </div>
      </div>
    );
  };
  

export default Projects