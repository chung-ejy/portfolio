import React from 'react'
import FakerForm from './FakerForm'
const FakerDesc = () => {
    const title = "Faker"
    const tagline = "Fake News Classifier"
    const dates = "July 2021 - August 2021"
    const projectLink = "https://github.com/chung-ejy/faker"
    const description = "Description: Enter the realm of truth and deception with our state-of-the-art Fake News Classifier, meticulously developed using a comprehensive dataset sourced from Kaggle. Experience the power of cutting-edge technology as we unravel the intricate web of misinformation, empowering you to distinguish fact from fiction like never before."
    const tooltips = "Usage: Harness the potential of our powerful tool by simply typing in a news article. Brace yourself for an enlightening experience as our sophisticated model examines the text, unveiling its verdict on the authenticity of the information provided. With a touch of humor, we invite you to put our classifier to the test and see if it can debunk the falsehoods lurking within the digital landscape."
    const disclaimer = "Disclaimer: Our Fake News Classifier stands as a testament to our commitment to combating misinformation; however, we provide a candid disclosure. The model boasts an impressive 73% success rate, striving to accurately identify deceptive news articles. Nonetheless, due to the inherent complexity of the subject matter and the ever-evolving nature of misinformation, we cannot guarantee absolute accuracy on every occasion. We encourage critical thinking and further research when encountering news articles. Ultimately, it is important to exercise your own judgment and corroborate information from trusted sources."
    const dataLink = "https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset?resource=download"
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
    {/* <FakerForm /> */}
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

export default FakerDesc