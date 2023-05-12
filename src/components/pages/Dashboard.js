import React from 'react';
import Profile from "../data/Profile"
import Projects from '../data/Projects';
import Loading from '../alerts/Loading';
const Dashboard = () => {
    return (
    <div className="container">
        <div className="row">      
        <Profile />
        </div>            
        <div className="row">
            <Projects />
        </div>
        </div>
    );
};

export default Dashboard
