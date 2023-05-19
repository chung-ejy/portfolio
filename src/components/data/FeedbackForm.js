import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';
import Loading from '../alerts/Loading';

const FeedbackForm = () => {
  const [state, setState] = useState({
    project_name: '',
    user: '',
    feedback:"",
    project:"feedback"
  });

  const dataContext = useContext(DataContext);
  const { loading, feedback, postFeedback } = dataContext;

  useEffect(() => {
    if (Object.keys(feedback).length > 0) {
      setState(prevState => ({
        project_name: '',
        user: '',
        feedback:"",
        project:"feedback"
      }));
    }
  }, [feedback,loading]);

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    postFeedback(state);
  };

  return (loading ? <Loading />
:
    <div className="card text-center mb-3">
      <div className="card-body">
            <h1 className={`text-primary"}`}>
                Feedback
            </h1>
        <form className="row" onSubmit={handleSubmit}>
          <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="user"
            className="form-control"
            value={state.user}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <input
            type="text"
            placeholder="Project Name"
            className="form-control"
            name="project_name"
            value={state.project_name}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <textarea
            className="form-control"
            type="text"
            rows="3"
            placeholder="Feedback"
            name="feedback"
            value={state.feedback}
            onChange={handleChange}
          />
          </div>
          <button className="btn btn-primary btn-sm m-2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
