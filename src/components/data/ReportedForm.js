import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';
import Loading from '../alerts/Loading';

const ReportedForm = () => {
  const [state, setState] = useState({
    proompt: '',
    response: '',
  });

  const dataContext = useContext(DataContext);
  const { loading, chat, getChat, title } = dataContext;

  useEffect(() => {
    if (Object.keys(chat).length > 0) {
      setState(prevState => ({
        proompt: '',
        project:title,
      }));
    }
  }, [chat,loading]);

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    getChat(state);
  };

  return (loading ? <Loading />
:
    <div className="card text-center">
      <div className="card-body row">
        <div className="col">
        {Object.keys(chat).length < 1 || loading ? "" : 
                <h1 className={`text-danger`}>
                  {chat.response}
                </h1>
                }
        </div>
        <form className="col m-2" onSubmit={handleSubmit}>
          <div className="form-group">
          <input
            type="proompt"
            placeholder="Proompt"
            name="proompt"
            value={state.proompt}
            onChange={handleChange}
          />
          </div>
          <button className="btn btn-primary btn-sm m-2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReportedForm;
