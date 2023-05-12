import React from 'react'

const ShuffleDesc = () => {
    return(<div className="card cardbody">
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
        <p className="m-2">
            Description: Song recommendations based off Spotify playlist dataset that can be
            <a className="m-1" href="https://www.aicrowd.com/challenges/spotify-million-playlist-dataset-challenge/dataset_files">
                found here.
            </a>
            <p className="text-success">
                Usage: Type a track name alongside the artist. 
                Note: Limited dataset, think 2010s pop .. 
            </p>
            <p className="text-danger">
                Disclaimer: This project is not an official Spotify product.
            </p>         
        </p>
    </div>)
}

export default ShuffleDesc