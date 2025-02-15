import React, { useContext,useState,useEffect } from 'react'
import DataContext from '../../context/data/dataContext'
import Loading from '../alerts/Loading'
const DopaForm = () => {
    const dataContext = useContext(DataContext)
    const {lol, loading, title, getLol} = dataContext
    const [state,setState] = useState({"FirstBlood":false,"FirstTower":false,"FirstBaron":false,"FirstDragon":false,"FirstInhibitor":false,"tier":"gm","side":1})
    useEffect(() => {
        if (Object.keys(lol).length > 0) {
          setState(prevState => ({
            "FirstBlood":false,
            "FirstTower":false,
            "FirstBaron":false,
            "FirstDragon":false,
            "FirstInhibitor":false,
            "tier":"gm",
            "side":1,
            project:title,
          }));
        }
      }, [lol,loading]);
    const onChange = (e) => {
            setState({...state,
                [e.target.name]:e.target.checked,
            project:title});
        } 

    const onSubmit = (e) => {
        e.preventDefault()
        getLol(state)
        setState({"FirstBlood":false,"FirstTower":false,"FirstBaron":false,"FirstDragon":false,"FirstInhibitor":false,"tier":"gm","side":"blue"})
    }
    return (
        <div className="card card-body text-center mt-4 mb-4">
            <div className="row">
            {loading ? <Loading /> :<div className="col p-5">
                {Object.keys(lol).length < 1 || loading ? "" : 
                <h1 className={`text-${lol.prediction < 1 ? "danger":"success"}`}>
                  {`${lol.prediction < 1 ? "Defeat":"Victory"}`}
                </h1>
                }
                {Object.keys(lol).length < 1 || loading ? "" : 
                <h1 className={`text-${lol.prediction < 1 ? "danger":"success"}`}>
                  <i className={`${lol.prediction < 1 ? "fas fa-frown":"fas fa-smile"}`}></i>
                </h1>
                }
                </div> }
                <form className="col" onSubmit={onSubmit}>
                    <div className="form-group">
                    {Object.keys(state).map(key =>( key !== "project" ? 
                        <div class="form-check form-switch" key={key} name={key}>
                        <input class="form-check-input" name={key} type="checkbox" onChange={onChange} id="flexSwitchCheckDefault" />
                        <label class="form-check-label" name={key} for="flexSwitchCheckDefault">{key}</label>
                    </div>:""))}
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm m-2">Classify</button>   
                </form>
            </div>
            </div>
    )
}

export default DopaForm
