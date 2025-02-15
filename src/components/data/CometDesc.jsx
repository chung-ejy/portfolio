import React from 'react'
import PriceForm from './PriceForm'

const CometDesc = () => {
    const title = "Comet"
    const tagline = "Bitcoin Price Predictor"
    const dates = "January 2022 - July 2022"
    const projectLink = "https://github.com/chung-ejy/comet"
    const description = "Description: Unleash the power of cutting-edge data analysis with our groundbreaking Average Weekly Price Predictor designed specifically for Bitcoin prices. This revolutionary tool harnesses the insights derived from the previous 14-week averages to provide you with unparalleled foresight into the future of Bitcoin's price movements."
    const tooltips = "Usage: Unlock the door to profitable opportunities by seamlessly inputting a meticulously structured CSV table with expertly numbered columns ranging from 0 to 13. Brace yourself as our advanced model unveils its extraordinary predictions, delivering precise average projections tailored exclusively for the upcoming week. Get ready to witness a new era of accuracy and foresight in the world of Bitcoin trading."
    const disclaimer = "Disclaimer: Embark on an educational journey with our exceptional tool, dedicated to expanding your understanding of Bitcoin's price dynamics. It is important to note that this powerful predictor is exclusively intended for educational purposes. The domain and its creators hold no liability for any investment decisions made by any individual or entity. We strongly encourage seeking guidance from a trusted investment advisor, who can provide personalized insights based on your unique investment goals and risk tolerance."
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

export default CometDesc