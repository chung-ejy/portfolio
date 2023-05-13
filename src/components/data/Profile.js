import React from 'react';
import headshot from '../../assets/headshot.jpg'
const Profile = () => {
  return (
    <div className="card card-body md-10 mt-4 mb-4 text-center bg-transparent">
      <h1 className="cardtitle text-primary">Eric Chung</h1>
      {/* <h1><i className="fas fa-user fa-xl text-primary"></i></h1> */}
      <div className="row">
        <div className="col">
          <img alt="myface" className="img-fluid" style={imageStyle} src={headshot}></img>
        </div>
      </div> 
      <div className="row mt-3">
        <h6>Machine Learning Developer / 
        <a href="https://www.instagram.com/emiru.jpg/"><i className={`fas fa-egg fas-lg text-primary m-2`}></i></a>
        / Gamer 
        </h6>
        <h6>chung.ejy@gmail.com</h6>
      </div>
      <div className="row">
        <div className="col m-1">
          <h3 className="">
          <a href="https://github.com/chung-ejy"><i className={`fab fa-github fab-lg text-primary mt-3`}></i></a>
          </h3>
        </div>
        <div className="col m-1">
          <h3 className="">
          <a href="https://www.linkedin.com/in/chung-ejy/"><i className={`fab fa-linkedin fab-lg text-primary mt-3`}></i></a>
          </h3>
        </div>
        <div className="col m-1">
          <h3 className="">
          <a href="https://open.spotify.com/playlist/6qwHbTZBvcOC9fqPrzhpNI?si=7eeedbe18f2e4a2c"><i className={`fas fa-music fas-lg text-primary mt-3`}></i></a>
          </h3>
        </div>
          </div>
        </div>
  );
};

const imageStyle = {
  display: "inline",
  border:"solid 2px #2799F3",
  width:"auto",
  height:"200px",
  borderRadius:"50%"
}
export default Profile;
