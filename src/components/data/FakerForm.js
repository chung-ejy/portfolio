import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';
import Loading from '../alerts/Loading';

const FakerForm = () => {
  const [state, setState] = useState({
    title: '',
    text: '',
  });

  const dataContext = useContext(DataContext);
  const { loading, news, getNews, title } = dataContext;

  useEffect(() => {
    if (Object.keys(news).length > 0) {
      setState(prevState => ({
        title: '',
        text: '',
        project:title,
      }));
    }
  }, [news,loading]);

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    getNews(state);
  };

  return (loading ? <Loading />
:
    <div className="card text-center">
      <div className="card-body">
        {Object.keys(news).length < 1 || loading ? "" : <h1>{"Classification: " + news.classification}</h1>}
        <form className="m-2" onSubmit={handleSubmit}>
          <div className="form-group m-2">
          <input
            type="text"
            placeholder="Article Title"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <input
            type="text"
            placeholder="Article Text"
            name="text"
            value={state.text}
            onChange={handleChange}
          />
          </div>
          <button className="btn btn-primary btn-sm m-2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FakerForm;
