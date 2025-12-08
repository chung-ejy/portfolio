import React from 'react'
import DopaForm from './DopaForm'
const DopaDesc = () => {
    const title = "Dopa"
    const tagline = "League of Legends Match Predictor"
    const dates = "July 2021 - August 2021"
    const projectLink = "https://github.com/chung-ejy/dopa"
    const description = "Description: Step into the realm of match prediction with our cutting-edge First Objectives Predictor, powered by an extensive dataset sourced from the league matches. Unlock the power to anticipate game outcomes as we delve into the intricate dynamics of the first objectives achieved. This remarkable model harnesses the patterns and insights extracted from the data to provide you with a glimpse into the future of league matches like never before."
    const tooltips = "Usage: Harness the potential of our powerful tool by inputting relevant match details. With the tier indicating whether the match is held in grandmaster or master, and the side indicating the blue side, our model unveils its predictions with precision and accuracy. Prepare to be amazed as you uncover the potential outcomes of league matches, armed with valuable insights derived from the first objectives."
    const disclaimer = "Disclaimer: Our First Objectives Predictor stands as a testament to our commitment to enhancing your understanding of league matches. We take pride in achieving an impressive 83% success rate, aiming to accurately predict match outcomes. However, it is crucial to note that the prediction accuracy may vary due to the inherent complexity of the game and the ever-changing nature of strategies and player performance. We also want to clarify that our model is not an official product of Riot Games. We encourage critical thinking and considering multiple factors when making decisions related to league matches. Ultimately, exercise your own judgment and refer to official Riot resources for the most reliable and up-to-date information."
    const dataLink = "https://www.kaggle.com/datasets/gyejr95/league-of-legends-challenger-ranked-games2020"
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
    {/* <DopaForm /> */}
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

export default DopaDesc