import React, { useContext, useState } from 'react'
import LongshotDesc from './LongshotDesc'
import CometDesc from './CometDesc'
import ShuffleDesc from './ShuffleDesc'
import PriceForm from './PriceForm'
import ShuffleForm from './ShuffleForm'
import DataContext from '../../context/data/dataContext';

const Projects = () => {
    const dataContext = useContext(DataContext);
    const projects = ["Longshot","Comet","Shuffle"]
    const { price,song, title, setTitle} = dataContext
    // const [state,setState] = useState("prototype")
    const onButtonClick = (e) => {
      e.preventDefault();
      setTitle(e.target.name);
    };

    // const onModeClick = (e) => {
    //   if (state === "description") {
    //     setState("prototype")
    //   } else {
    //     setState("description")
    //   }
      
    // }
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
        </div>
        <div className="row h-5">
          {/* {state == "description" ?  */}
          {/* <div className="col">
          {title === "Shuffle" ? (
            <ShuffleForm />
          ) : (
            <PriceForm /> // Update this line
          )}
          </div>   */}
          <div className="col">
            {title === "Longshot" ? (
              <LongshotDesc />
            ) : title === "Comet" ? (
              <CometDesc />
            ) : (
              <ShuffleDesc />
            )}
          </div>
          {/* } */}
        </div>
        {/* <button
            name={state}
            className={`row btn btn-outline-info btn-sm m-3`}
            onClick={onModeClick}
          >
            {state}
          </button> */}
      </div>
    );
  };
  

export default Projects