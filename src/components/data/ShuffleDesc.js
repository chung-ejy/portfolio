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
        <p>
        Researched and predicted song relevancy by developing a playlist search algorithm to retrieve possible song
        recommendations based on neighboring playlists with attendance of the queried song. Analyzed the effects of a follower based weighing system and the number of songs in a given recommended
            playlist to better understand the notion of quantity over quality in recommendation standards.
        </p>
    </div>)
}

export default ShuffleDesc