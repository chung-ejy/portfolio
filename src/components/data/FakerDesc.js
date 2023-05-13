import React from 'react'
import FakerForm from './FakerForm'
const FakerDesc = () => {
    const title = "Faker"
    const tagline = "Fake News Classifier"
    const dates = "July 2021 - August 2021"
    const projectLink = "https://github.com/chung-ejy/faker"
    const description = "Description: Fake news classifier based off kaggle data set that can be"
    const tooltips = "Usage: Type a news article to see if its fake or not lmao "
    const disclaimer = "Disclaimer: This model has 73% chance to work everytime ..."
    return(<div className="card cardbody bg-transparent p-2">
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
    <FakerForm />
    <p className="m-2">
        {description}
        <a className="m-1" href="https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset?resource=download">
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

export default FakerDesc