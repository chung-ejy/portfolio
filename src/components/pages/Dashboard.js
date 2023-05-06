import React, {useContext, useEffect, useState, Fragment} from 'react';
import DataContext from "../../context/data/dataContext"
import Profile from "../data/Profile"
import Projects from '../data/Projects';
const Dashboard = () => {
    const dataContext = useContext(DataContext)
    return (<div className="container">
        <div className="row">
        <div className="col">
            <div className='card text-center mt-5'>
                <div className='card-body'>
                    <Profile />
        </div>
        </div>
        <div className='card text-center mt-5'>
                <div className='card-body'>
                    <Projects />
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Dashboard
