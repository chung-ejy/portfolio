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
    sharpe_ratio: entry.sharpe_ratio,
  }));

  return (
    <div className="mt-5" style={{ width: '100%', height: 600 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={processedData}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="date" />
          
          {/* First Y-axis for returns */}
          <YAxis />
          
          {/* Second Y-axis for Sharpe Ratio */}
          <YAxis yAxisId="right" orientation="right" />
          
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="return" stroke="red" dot={false} />
          <Line type="monotone" dataKey="benchmark_return" stroke="blue" dot={false} />
          {/* <Line type="monotone" dataKey="ir_return" stroke="green" dot={false} /> */}
          {/* <Line type="monotone" dataKey="sharpe_ratio" stroke="purple" yAxisId="right" dot={false} /> */}

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisualizationChart;
