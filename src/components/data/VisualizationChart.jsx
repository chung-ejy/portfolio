import React, { useContext } from "react";
import { ResponsiveLine } from "@nivo/line";
import dataContext from "../../context/data/dataContext";

const NivoVisualization = () => {
  const { loading, visualization } = useContext(dataContext);

  if (loading) return <p>Loading...</p>;
  if (!visualization || visualization.length === 0) return <p>No data available</p>;

  const data = [
    {
      id: "strategy",
      data: visualization
        .map(v => ({
          x: new Date(v.date),
          y: Number(v.return),
        }))
        .sort((a, b) => a.x - b.x), // sort by date
    },
    {
      id: "benchmark",
      data: visualization
        .map(v => ({
          x: new Date(v.date),
          y: Number(v.benchmark_return),
        }))
        .sort((a, b) => a.x - b.x), // sort by date
    },
  ];

  return (
    <div style={{ width: "100%", height: 600 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 50, bottom: 60, left: 60 }}
        xScale={{ type: "time", format: "native", precision: "day" }}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        axisBottom={{ format: "%b %d" }}
        axisLeft={{}}
        colors={{ scheme: "category10" }}
        pointSize={2}
        useMesh={true}
        enableSlices="x"
        // legends={[{ anchor: "top-right", direction: "column" }]}
      />
    </div>
  );
};

export default NivoVisualization;
