import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const Projects = () => {
    const [state,setState] = useState({"project":"Longshot"})
    const onButtonClick = (e) => {
        e.preventDefault()
        setState({...state,["project"]:e.target.name})
    }
    const {project} = state
    const longshot = <div><h1>Longshot</h1>
                    <h3>Stock Investment Research Platform </h3>
                    <table className="table table-responsive-sm">
                        <tbody>
                        <tr>
                            <td className="d-none d-lg-table-cell">
                                January 2020 - Present
                                </td>
                            <td className="d-none d-lg-table-cell">
                                <a href="https://github.com/chung-ejy/longshot">
                                https://github.com/chung-ejy/longshot</a></td>
                            </tr>
                            </tbody>
                    </table>
                    <p>
                    Architected a trade simulation platform with Jupyter Notebooks to transform training data, model regression and
                        classification predictions utilizing algorithms provided by sci-kit learn and back tested various trading strategies. 
                        Backtested quarterly fundamental strategies and weekly trade signal strategies in python for industry based
                        stock categories resulting in a strategy with overperforming yearly historical gains compared to the SP500
                    </p>

                    </div>
    const comet = <div>
                    <h1>Comet</h1>
                    <h3>Cryptocurrency Trading Bot</h3>
                    <table className="table table-responsive-sm">
                        <tbody>
                        <tr>
                            <td className="d-none d-lg-table-cell">
                                January 2022 - July 2022
                                </td>
                            <td className="d-none d-lg-table-cell">
                                <a href="https://github.com/chung-ejy/comet">
                                https://github.com/chung-ejy/comet</a></td>
                            </tr>
                            </tbody>
                    </table>
                    <p>
                    Researched optimal cryptocurrency trading strategies by leveraging brute force and machine learning avenues to
                    ensure high performing bot trading behavior resulting in competitive historical year to year performance. Investigated pricing and optimal service inclusion of pricing tiers by providing both services and options resulting
                    in context behind standardized pricing models in comparison to premium models. Packaged bot and backtesting services leveraging a Django backend and React frontend to provide user friendly
                    options to learn about and experience the cryptocurrency market and facilitate investment discipline
                    </p>
                </div>
    const shuffle = <div>
                        <h1>Shuffle</h1>
                        <h3>Music Recommendation Application</h3>
                        <table className="table table-responsive-sm">
                        <tbody>
                        <tr>
                            <td className="d-none d-lg-table-cell">
                                July 2021 - August 2021
                                </td>
                            <td className="d-none d-lg-table-cell">
                                <a href="https://github.com/chung-ejy/shuffle">
                                https://github.com/chung-ejy/shuffle</a></td>
                            </tr>
                            </tbody>
                    </table>
                        <p>
                        Researched and predicted song relevancy by developing a playlist search algorithm to retrieve possible song
                        recommendations based on neighboring playlists with attendance of the queried song. Analyzed the effects of a follower based weighing system and the number of songs in a given recommended
                            playlist to better understand the notion of quantity over quality in recommendation standards.
                        </p>
                    </div>
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
                {project=="Longshot" ? longshot : project=="Comet" ? comet : shuffle}
            </div>
        </div>
    )
}

export default Projects