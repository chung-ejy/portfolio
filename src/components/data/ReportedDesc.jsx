import React from 'react'
import PriceForm from './PriceForm'
import ReportedForm from './ReportedForm'

const ReportedDesc = () => {
    const title = "Reported"
    const tagline = "Toxic Chat Simulator"
    // const dates = "January 2020 - December 2025"
    // const projectLink = "https://github.com/chung-ejy/sapling"
    const description = `
    Description: Step into the chaotic world of the Toxic Chat Simulator, where words cut deep and emotions run high. This unique tool creates an environment filled with provocative exchanges, testing your resilience and wit against relentless negativity and hostility. Experience firsthand the dynamics of toxic conversations as you engage with simulated users designed to challenge your reactions and responses in an intense virtual setting.
    `;
    
    const tooltips = `
    Usage: To begin your journey into the realm of toxicity, simply input a CSV table containing phrases and responses that embody a variety of toxic interactions. The simulator will generate a dynamic chat experience, immersing you in scenarios that reflect the harsh realities of online communication. Brace yourself for unfiltered exchanges, where the lines between sarcasm, aggression, and humor blur, forcing you to navigate the complex landscape of toxic dialogue. Engage with the content responsibly and prepare for an enlightening experience!
    `;
    
    const disclaimer = `
    Disclaimer: Welcome to the Toxic Chat Simulator, a tool crafted for educational and entertainment purposes. While it offers a glimpse into the darker side of communication, please understand that the conversations generated may be distressing or triggering. The creators of this simulator hold no responsibility for any emotional impact or misunderstandings that may arise from its use. We strongly encourage users to approach this experience with caution and to seek professional advice if feelings of distress occur. Remember, this is merely a simulation—real-life interactions demand empathy and understanding.
    `;
    return(
            <div className="card cardbody bg-light p-2">
                <h1 className="cardtitle text-primary text-center">{title}</h1>
                <h3 className="text-center">{tagline}</h3>
                {/* <table className="table table-responsive-sm text-center">
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
                </table> */}
                <ReportedForm />
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

export default ReportedDesc