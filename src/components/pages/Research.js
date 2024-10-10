import React, { useEffect, useContext, useState } from 'react';
import TradesTable from "../data/TradesTable";
import VisualizationChart from '../data/VisualizationChart';
import dataContext from '../../context/data/dataContext';
import StrategyDescription from '../data/StrategyDescription';

const Research = () => {
    const { title, getTrades, getVisualization } = useContext(dataContext);
    const [showDescription, setShowDescription] = useState(true); // State for toggling views

    useEffect(() => {
        getTrades();
        getVisualization();
    }, [title]);

    const toggleView = () => {
        setShowDescription(!showDescription); // Toggle between description and chart/table
    };

    return (
        <div className="container">
            {/* Button to toggle between views */}
            <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <button onClick={toggleView} className="btn btn-primary">
                    {showDescription ? 'Show Visualization & Trades' : 'Show Strategy Description'}
                </button>
            </div>

            {/* Conditional rendering based on state */}
            {showDescription ? (
                <StrategyDescription />
            ) : (
                <div>
                    <div className="row">
                        <VisualizationChart />
                    </div>
                    <div className="row">
                        <TradesTable />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Research;
