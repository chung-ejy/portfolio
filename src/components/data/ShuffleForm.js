import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';

const ShuffleForm = () => {
  const [state, setState] = useState({
    artist_name: '',
    track_name: '',
    rec_artist: 'default',
    rec_track: 'default'
  });

  const dataContext = useContext(DataContext);
  const { song, getSong } = dataContext;

  useEffect(() => {
    if (song) {
      setState(prevState => ({
        ...prevState,
        rec_artist: song.rec_artist,
        rec_track: song.rec_track
      }));
    }
  }, [song]);

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSong(state);
    setState(prevState => ({
      ...prevState,
      artist_name: '',
      track_name: ''
    }));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Shuffle</h3>
      </div>
      <div className="card-body">
        <h1>{"Track: " + state.rec_track}</h1>
        <h1>{"Artist: " + state.rec_artist}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter artist name"
            name="artist_name"
            value={state.artist_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter track name"
            name="track_name"
            value={state.track_name}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShuffleForm;
