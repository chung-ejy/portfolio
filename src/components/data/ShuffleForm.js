import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';
import Loading from '../alerts/Loading';

const ShuffleForm = () => {
  const [state, setState] = useState({
    artist_name: '',
    track_name: '',
  });

  const dataContext = useContext(DataContext);
  const { loading, song, getSong } = dataContext;

  useEffect(() => {
    if (Object.keys(song).length > 0) {
      setState(prevState => ({
        artist_name: '',
        track_name: ''
      }));
    }
  }, [song,loading]);

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSong(state);
  };

  return (loading ? <Loading />
:
    <div className="card text-center">
      {/* <div className="card-header">
        <h3 className="card-title">Shuffle</h3>
      </div> */}
      <div className="card-body">
        {Object.keys(song).length < 1 || loading ? "" : <h1>{"Artist: " + song.artist_rec}</h1>}
        {Object.keys(song).length < 1 || loading ? "" : <h1>{"Song: " + song.track_rec}</h1>}
        <form className="m-2" onSubmit={handleSubmit}>
          <div className="form-group m-2">
          <input
            type="text"
            placeholder="Enter artist name"
            name="artist_name"
            value={state.artist_name}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <input
            type="text"
            placeholder="Enter track name"
            name="track_name"
            value={state.track_name}
            onChange={handleChange}
          />
          </div>
          <button className="btn btn-primary btn-sm m-2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShuffleForm;
