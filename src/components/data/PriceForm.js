import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';
import Loading from '../alerts/Loading';
const PriceForm = () => {
  const dataContext = useContext(DataContext);
  const { loading, price, getPrice, title } = dataContext;
  const weekRange = [...Array(14).keys()]
  const updatedWeekRange = weekRange.concat(["prediction","project"])

  const [state, setState] = useState({
    ...Object.fromEntries(updatedWeekRange.map((x) => [x.toString(), 0])),
    project: title,
  });
  const tableheads = [0,1,2,"...",12,13]
  const tablevals = [92,91,93,"...",93,95]
  useEffect(() => {
    if (title !== state.title) {
      setState({
        ...state,
        ...weekRange,
        project: title,
        prediction:0
      });
    } 
  }, [price, loading, title]);

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
  

  return (loading ? <Loading /> :
    <div className="card bg-light">
      <div className="card-body text-center">
        <h6>CSV File Example</h6>
        <table className="table table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>{tableheads.map((x) => <th>{String(x)}</th>)}</tr>
          </thead>
          <tbody>
            <tr>{tablevals.map((x) => <td>{String(x)}</td>)}</tr>
          </tbody>
        </table>
        {Object.keys(price).length < 1 || loading ? 
                        ""
                        : <h1>{`Prediction: ${price.prediction}`}</h1>
                        }
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input onChange={onFileChange} className="form-control" type="file" id="formFile" />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PriceForm;

