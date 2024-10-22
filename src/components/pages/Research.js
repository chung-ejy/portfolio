import React, { useEffect, useContext, useState } from 'react';
import TradesTable from "../data/TradesTable";
import VisualizationChart from '../data/VisualizationChart';
import dataContext from '../../context/data/dataContext';
import StrategyDescription from '../data/StrategyDescription';

const Research = () => {
    const { title, getTrades, getVisualization } = useContext(dataContext);
    const [showDescription, setShowDescription] = useState(false); // State for toggling views
    const [selectedStrategy, setSelectedStrategy] = useState('single_index_quarterly'); // State for the selected dropdown option

    useEffect(() => {
        // Fetch data whenever selectedStrategy changes
        getTrades(selectedStrategy);
        getVisualization(selectedStrategy);
    }, [selectedStrategy]); // Listen for changes in selectedStrategy

    const toggleView = () => {
        setShowDescription(!showDescription); // Toggle between description and chart/table
    };

    const handleDropdownChange = (event) => {
        setSelectedStrategy(event.target.value); // Update selected strategy
    };

    const strategies = ["single_index_quarterly", "korean_tech_quarterly", "magnificent_seven_quarterly", "financial_statement_quarterly","kr_financial_statement_yearly"];

    return (
        <div className="container">
            {/* Dropdown menu to select strategy */}
            <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <select
                    className="form-select"
                    value={selectedStrategy}
                    onChange={handleDropdownChange}
                >
                    {strategies.map((strategy) => (
                        <option key={strategy} value={strategy}>
                            {strategy}
                        </option>
                    ))}
                </select>
            </div>

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
                        <VisualizationChart strategy={selectedStrategy} />
                    </div>
                    <div className="row">
                        <TradesTable strategy={selectedStrategy} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Research;
