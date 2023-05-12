import React from 'react';
import Profile from "../data/Profile"
import Projects from '../data/Projects';
const Dashboard = () => {
    return (
    <div className="container">
        <div className="row">
        <div className="col text-center mt-5">            
            <Projects />
            <Profile />
        </div>
        </div>
        </div>
    );
};

export default Dashboard
