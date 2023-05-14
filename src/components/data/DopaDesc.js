import React from 'react'
import DopaForm from './DopaForm'
const DopaDesc = () => {
    const title = "Dopa"
    const tagline = "League of Legends Match Predictor"
    const dates = "July 2021 - August 2021"
    const projectLink = "https://github.com/chung-ejy/dopa"
    const description = "Description: Predict league matches based on first objectives. Model trained from a dataset "
    const tooltips = "Usage: Tier on means the match is held in grandmaster otherwise in master, side on is blue side"
    const disclaimer = "Disclaimer: This model has 83% chance to work everytime ... Not an official Riot product."
    return(<div className="card cardbody bg-light p-2">
    <h1 className="cardtitle text-primary text-center">{title}</h1>
    <h3 className="text-center">{tagline}</h3>
    <table className="table table-responsive-sm text-center">
        <tbody>
            <tr>
                <td className="d-none d-lg-table-cell">
                    {dates}
                </td>
                <td className="d-none d-lg-table-cell">
                    <a href={`${projectLink}`}>
                        {projectLink}
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    <DopaForm />
    <p className="m-2">
        {description}
        <a className="m-1" href="https://www.kaggle.com/datasets/gyejr95/league-of-legends-challenger-ranked-games2020">
            found here.
        </a> 
    </p>
    <p className="m-2 text-success">
        {tooltips}
    </p>         
    <p className="m-2 text-danger">
        {disclaimer}
    </p>
</div>)
}

export default DopaDesc