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
    const stuff = ["prediction","tier","side"]
    return (
        <div className="card card-body mt-4 mb-4">
            <div className="row">
            {Object.keys(lol).length < 1 ? "" : loading ? <Loading/> :
            <table className="table table-responsive-sm col">
                <tbody>
                     {stuff.map(key => (
                        <tr>
                            <td>{key}</td>
                            <td>{lol[key].toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
                <form className="col"onSubmit={onSubmit}>
                    {Object.keys(state).map(key =>( key !== "project" ? 
                        <div class="form-check form-switch content-center" key={key} name={key}>
                        <input class="form-check-input" name={key} type="checkbox" onChange={onChange} id="flexSwitchCheckDefault" />
                        <label class="form-check-label" name={key} for="flexSwitchCheckDefault">{key}</label>
                    </div>:""))}
                    <div className="form-group">
                        <button type="submit" class="btn btn-primary form-control">Classify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DopaForm
