import React from 'react';
import Profile from "../data/Profile"
import Projects from '../data/Projects';
import Photos from '../data/Photos';
import background from '../../assets/bg2.png'
const Dashboard = () => {
    return (
        <div style={style}>
        <div className="container">
        <div className="row">      
        <Profile />
        </div>            
        <div className="row">
            <Projects />
        </div>
        <div className="row">
            <Photos />
        </div>
        </div>
        </div>
    );
};
const style = {
    backgroundImage:`url(${background})`,
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"fixed",
    backgroundPosition:"center",
    backgroundSize:"cover"
}
export default Dashboard
