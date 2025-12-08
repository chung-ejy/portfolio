import React from 'react'
import ShuffleForm from './ShuffleForm'
const ShuffleDesc = () => {
    const title = "Shuffle"
    const tagline = "Song Recommender"
    const dates = "July 2021 - August 2021"
    const projectLink = "https://github.com/chung-ejy/shuffle"
    const description = "Description: Immerse yourself in the realm of music discovery with our extraordinary Song Recommendations tool, powered by a rich dataset sourced from Spotify playlists. Unlock the hidden gems and explore new horizons as we guide you through an unparalleled musical journey based on your preferences and the vast knowledge contained within the dataset."
    const tooltips = "Usage: Embark on an adventure of musical exploration by simply typing the name of a track alongside the artist. Our powerful tool, fueled by a carefully curated dataset, is at your disposal. While the dataset primarily focuses on the vibrant pop music scene of the 2010s, prepare to be pleasantly surprised by the range of genres and artists it encompasses."
    const disclaimer = "Disclaimer: Please note that this project is not an official Spotify product, but a passion project crafted with love and dedication. We make no claims of official affiliation or endorsement. The recommendations provided are based on the dataset's insights and algorithms, aiming to enhance your music discovery experience. However, individual musical preferences may vary, and we cannot guarantee absolute satisfaction. Sit back, relax, and let the melodies guide you, knowing that any decisions made regarding music consumption are entirely at your own discretion."
    const dataLink = "https://www.aicrowd.com/challenges/spotify-million-playlist-dataset-challenge/dataset_files"
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
                <td className="d-none d-lg-table-cell">
                    <a href={`${dataLink}`}>
                        Link to dataset
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    {/* <ShuffleForm /> */}
    <p className="m-2">
        {description}
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