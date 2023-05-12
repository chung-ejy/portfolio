import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';

const PriceForm = () => {
  const dataContext = useContext(DataContext);
  const { price, getPrice, title } = dataContext;
  const weekRange = [...Array(14).keys()]
  const updatedWeekRange = weekRange.concat(["prediction","project"])

  const [state, setState] = useState({
    ...Object.fromEntries(updatedWeekRange.map((x) => [x.toString(), 0])),
    project: title,
  });

  // useEffect(() => {
  //   if (price) {
  //     const { prediction, project, ...weekRange } = price;
  //     setState({
  //       ...state,
  //       prediction: prediction || state.prediction,
  //       project: project || state.project,
  //       ...weekRange
  //     });
  //   } else {
  //     setState({...state,
  //             project: title})
  //   }
  // }, [price, state, title]);

const onFileChange = (e) => {
  const reader = new FileReader();
  const file = e.target.files[0];
  if (!file) {
    // Handle the error when no file is selected
    console.error('No file selected');
    // You can also display an error message to the user if needed
    return;
  }

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
      getPrice(state)
  };
  

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{state.project}</h3>
      </div>
      <div className="card-body">
      <h1>{state.prediction}</h1>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="csvFile">CSV File</label>
            <input type="file" id="csvFile" className="form-control-file" accept=".csv" onChange={onFileChange} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default PriceForm;

