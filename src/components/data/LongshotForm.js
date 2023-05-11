import React, { useContext, useState } from 'react';
import DataContext from '../../context/data/dataContext';

const LongshotForm = () => {
  const dataContext = useContext(DataContext);
  const { longshot, getLongshot } = dataContext;

  const weekRange = [...Array(14).keys()]
  const updatedWeekRange = weekRange.concat(["prediction","project"])

  const [state, setState] = useState({
    ...Object.fromEntries(updatedWeekRange.map((x) => [x.toString(), 0])),
    project: 'longshot',
  });

const onFileChange = (e) => {
  const reader = new FileReader();
  const file = e.target.files[0];

  reader.onload = () => {
    const csvData = reader.result;
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');

    const stateObject = {};

    for (let j = 0; j < headers.length; j++) {
      const header = headers[j];
      const values = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        values.push(row[j]);
      }

      stateObject[header] = values[0];
    }

    // Update the form state with the parsed data
    setState({ ...state, ...stateObject });
  };

  reader.readAsText(file);
};

  const onSubmit = (e) => {
    e.preventDefault();
    getLongshot(state);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{state.project}</h3>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="csvFile">CSV File</label>
            <input type="file" id="csvFile" className="form-control-file" accept=".csv" onChange={onFileChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h6>{state.prediction}</h6>
      </div>
    </div>
  );
};

export default LongshotForm;

