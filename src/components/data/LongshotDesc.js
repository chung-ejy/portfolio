import React from 'react'
import PriceForm from './PriceForm'

const LongshotDesc = () => {
    const title = "Longshot"
    const tagline = "Stock Price Predictor"
    const dates = "January 2020 - Present"
    const projectLink = "https://github.com/chung-ejy/longshot"
    const description = "Description: Average weekly price predictor for S&P 500 stocks based on previous 14 week averages."
    const tooltips = "Usage: Input a csv table with columns numbered 0 - 13. Note: model will only provide average predictions for the upcoming week."
    const disclaimer = "Disclaimer: For educational purposes only. The following domain is not liable for any investment decisions made by any party. Please consult an investment advisor."
    return(
            <div className="card cardbody bg-transparent p-2">
                <h1 className="cardtitle text-primary text-center">{title}</h1>
                <h3 className="text-center">{tagline}</h3>
                <table className="table table-responsive-sm text-center">
                    <tbody>
                        <tr>
                            <td className="d-none d-lg-table-cell">
                                {dates}
                            </td>
                            <td className="d-none d-lg-table-cell">
                                <a href={'${projectLink}'}>
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