import React, {useState} from 'react';
import Experience from './Experience';
import Education from './Education';
import ProfileCard from './ProfileCard';

const ProfileDash = () => {
  const [state,setState] = useState("Experience")
  const onChange = (e) => {
    if(state==="Experience"){
      setState("Education")
    } else {
      setState("Experience")
    }
  }
  return (
    <div className="card card-body md-10 mb-3 mt-5 text-center bg-light">
        <div className="row">
        <h1 className="text-primary">Eric Chung</h1>
          <ProfileCard />
        </div>
          <div className="row"><button className="btn btn-outline-primary btn-block" onClick={onChange}>{state}</button></div>
          <div className="row mt-3">{state === "Experience" ?  <Experience /> : <Education />}</div>
        </div>
  );
};

export default ProfileDash;
