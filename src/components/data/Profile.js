import React from 'react';
const Profile = () => {
  return (
    <div className="card card-body md-10 mt-4 mb-4 text-center bg-transparent">
      <h1 className="cardtitle text-primary">Eric Chung</h1>
      <h1><i className="fas fa-user fa-xl text-primary"></i></h1>
      {/* <img className="img-fluid" src={`url(${headshot})`} /> */}
      <div className="row">
        <div className="col m-1">
          <h3 className="">
          <a href="https://github.com/chung-ejy"><i className={`fab fa-github fab-lg text-primary mt-3`}></i></a>
          </h3>
        </div>
        <div className="col m-1">
          <h3 className="">
          <a href="https://www.instagram.com/emiru.jpg/"><i className={`fas fa-egg fas-lg text-primary mt-3`}></i></a>
          </h3>
        </div>
        <div className="col m-1">
          <h3 className="">
          <a href="https://www.linkedin.com/in/chung-ejy/"><i className={`fab fa-linkedin fab-lg text-primary mt-3`}></i></a>
          </h3>
        </div>
          </div>
        </div>
  );
};

export default Profile;
