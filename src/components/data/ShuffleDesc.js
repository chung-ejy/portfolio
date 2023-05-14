import React from 'react'
import ShuffleForm from './ShuffleForm'
const ShuffleDesc = () => {
    const title = "Shuffle"
    const tagline = "Song Recommender"
    const dates = "July 2021 - August 2021"
    const projectLink = "https://github.com/chung-ejy/shuffle"
    const description = "Description: Song recommendations based off Spotify playlist dataset that can be found"
    const tooltips = "Usage: Type a track name alongside the artist. Note: Limited dataset, think 2010s pop .."
    const disclaimer = "Disclaimer: This project is not an official Spotify product."
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
    <ShuffleForm />
    <p className="m-2">
        {description}
        <a className="m-1" href="https://www.aicrowd.com/challenges/spotify-million-playlist-dataset-challenge/dataset_files">
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

export default ShuffleDesc