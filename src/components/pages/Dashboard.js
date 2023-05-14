import React from 'react';
import Profile from "../data/Profile"
import Projects from '../data/Projects';
import background from '../../assets/victoria-strukovskaya-OAlYImdG1IQ-unsplash.jpg'
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
