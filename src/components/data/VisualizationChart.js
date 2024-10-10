import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dataContext from "../../context/data/dataContext";

const VisualizationChart = () => {
  const { loading, visualization } = useContext(dataContext);

  // Check if data is loading or visualization is empty
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!visualization || visualization.length === 0) {
    return <p>No data available</p>;
  }

  // Preprocess the data
  const processedData = visualization.map(entry => ({
    date: new Date(entry.date).toLocaleDateString(), // Formatting date
    return: entry.return,
    ir_return: entry.ir_return,
    benchmark_return: entry.benchmark_return,
  }));

  return (
    <div classname="mt-5"style={{ width: '100%', height: 600 }}>
      <h1>Short Term Single Index Factor Model</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="return" stroke="red" />
          <Line type="monotone" dataKey="benchmark_return" stroke="blue" />
          <Line type="monotone" dataKey="ir_return" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisualizationChart;
