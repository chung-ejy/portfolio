import React from 'react'
import PriceForm from './PriceForm'

const LongshotDesc = () => {
    const title = "Longshot"
    const tagline = "Stock Price Predictor"
    const dates = "January 2020 - Present"
    const projectLink = "https://github.com/chung-ejy/longshot"
    const description = "Description: Unleash the power of data and predict the future with our cutting-edge Average Weekly Price Predictor for S&P 500 stocks, built on the foundation of meticulous analysis and historical trends. This remarkable tool leverages the previous 14-week averages to provide you with an intelligent forecast, granting you a glimpse into the upcoming week's price trends like never before."
    const tooltips = "Usage: Embark on your journey to financial success by simply inputting a dynamic CSV table with columns expertly numbered from 0 to 13. Brace yourself for the awe-inspiring moment as our model unveils its predictions, presenting you with the average projections tailored specifically for the forthcoming week. Prepare to be amazed by its accuracy and insight."
    const disclaimer = "Disclaimer: Immerse yourself in the world of knowledge and possibilities, courtesy of our exceptional tool. However, please note that this remarkable innovation is intended solely for educational purposes. We kindly emphasize that the domain and its creators bear no responsibility for any investment decisions undertaken by any individual or entity. To ensure your financial well-being, we strongly advise consulting with a trusted investment advisor who can provide tailored guidance suited to your unique circumstances."
    return(
            <div className="card cardbody bg-light p-2">
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
                <PriceForm />
                <p className="m-2">
                    {description}
                </p>
                <p className="m-2 text-success">
                    {tooltips} 
                </p>         
                <p className="m-2 text-danger">
                    {disclaimer}
                </p>
            </div>
        )
}

export default LongshotDesc