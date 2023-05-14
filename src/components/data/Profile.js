import React, {useState} from 'react';
import headshot from '../../assets/headshot.jpg'
import Experience from './Experience';
import Education from './Education';
import ProfileCard from './ProfileCard';
const Profile = () => {
  const [state,setState] = useState("Experience")
  const onChange = (e) => {
    if(state==="Experience"){
      setState("Education")
    } else {
      setState("Experience")
    }
  }
  return (
    <div className="card card-body md-10 mt-5 mb-3 text-center bg-transparent">
        <div className="row">
        <div className="col">
        <h1 className="text-primary">Eric Chung</h1>
          <ProfileCard />
        </div>
        <div className="col">
          <div className="row"><button className="btn btn-outline-primary btn-block" onClick={onChange}>{state}</button></div>
          <div className="row mt-2">{state === "Experience" ?  <Experience /> : <Education />}</div>
        </div>
        {/* <div className="row">
          <div className="col"><Experience /></div>
          <div className="col"><Education /></div>
        </div> */}
        </div>
        {/* <div className="row mt-2"><div className="col"><Experience /></div></div>
        <div className="row mt-2"><div className="col"><Education /></div></div> */}
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
