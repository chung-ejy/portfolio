import React, { useState } from 'react';

import LongshotDesc from './LongshotDesc';
import CometDesc from './CometDesc';
import ShuffleDesc from './ShuffleDesc';
import FakerDesc from './FakerDesc';
import DopaDesc from './DopaDesc';
import OritudeDesc from './OritudeDesc';
import FeedbackForm from './FeedbackForm';

const ProjectsDash = () => {
  // Local state instead of context
  const [title, setTitle] = useState("Oritude");

  const onButtonClick = (e) => {
    e.preventDefault();
    setTitle(e.target.name);
  };

  const projects = {
    Oritude: "fas fa-xl fa-wind",
    Sapling: "fas fa-xl fa-location-arrow",
    Comet: "fas fa-xl fa-meteor",
    Shuffle: "fas fa-xl fa-music",
    Faker: "fas fa-xl fa-rss",
    Dopa: "fas fa-xl fa-laugh-squint",
  };

  const renderDesc = () => {
    switch (title) {
      case "Sapling": return <LongshotDesc />;
      case "Comet": return <CometDesc />;
      case "Shuffle": return <ShuffleDesc />;
      case "Faker": return <FakerDesc />;
      case "Dopa": return <DopaDesc />;
      default: return <OritudeDesc />;
    }
  };

  return (
    <div className="card card-body mt-4 mb-4 bg-light">
      <h1 className="text-primary text-center">Projects</h1>

      <div className="row h-5 m-1">
        {Object.keys(projects).map(project => (
          <button
            key={project}
            name={project}
            onClick={onButtonClick}
            className={`col btn btn-${title === project ? "primary" : "light"} btn-xl m-2`}
          >
            <i className={`${projects[project]} text-${title === project ? "light" : "primary"}`}></i>
          </button>
        ))}
      </div>

      <div className="row h-5">
        <div className="col">
          {renderDesc()}
        </div>
      </div>

      <FeedbackForm />
    </div>
  );
};

export default ProjectsDash;
