import React, { useEffect,useContext } from 'react';
import TradesTable from "../data/TradesTable"
import VisualizationChart from '../data/VisualizationChart';
import dataContext from '../../context/data/dataContext';
const Research = () => {
    const {title,getTrades,getVisualization} = useContext(dataContext)
    useEffect(()=>{
        getTrades()
        getVisualization()
    },[title])

    return (
        <div className="container">
        
        <div className="row">      
        <VisualizationChart />
        </div>
        <div className="row">      
        <TradesTable />
        </div>            
        </div>
    );
};
export default Research
