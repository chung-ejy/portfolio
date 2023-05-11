import React, { useState } from 'react'
import LongshotDesc from './LongshotDesc'
import CometDesc from './CometDesc'
import ShuffleDesc from './ShuffleDesc'
import LongshotForm from './LongshotForm'
import CometForm from './CometForm'
import ShuffleForm from './ShuffleForm'

const Projects = () => {
    const [state,setState] = useState({"project":"Longshot"})
    const onButtonClick = (e) => {
        e.preventDefault()
        setState({...state,["project"]:e.target.name})
    }
    const {project} = state
    return (      
        <div className="card card-body mt-4 mb-4">
                    <div className="row">
                <button name="Longshot" className={`col btn btn-primary btn-sm m-2`} onClick={onButtonClick}>
                Longshot
                </button>
                <button name="Comet" className={`col btn btn-primary btn-sm m-2`} onClick={onButtonClick}>
                Comet
                </button>
                <button name="Shuffle" className={`col btn btn-primary btn-sm m-2`} onClick={onButtonClick}>
                Shuffle
                </button>
            </div> 
            <div className="row">
                <div className="col">{project=="Longshot" ? <LongshotForm /> : project=="Comet" ? <CometForm/> : <ShuffleForm />}</div>
                <div className="col">{project=="Longshot" ? <LongshotDesc /> : project=="Comet" ? <CometDesc/> : <ShuffleDesc />}</div>
            </div>
        </div>
    )
}

export default Projects