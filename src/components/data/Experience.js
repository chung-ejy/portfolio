import React from 'react'
const Experience = () => {
    const title = "Experience"
    return(<div className="card cardbody bg-light p-2">
    {/* <h1 className="cardtitle text-primary text-center">{title}</h1> */}
    <table className="table table-responsive-sm text-left">
            <thead>
                <tr><th>Firm</th><th>Position</th><th>Dates</th></tr>
            </thead>
            <tbody>
            <tr>
                <td className="d-none d-lg-table-cell">
                    Amazon Robotics
                </td>
                <td className="d-none d-lg-table-cell">
                    Solutions Integration Co-op
                </td>
                <td className="d-none d-lg-table-cell">
                    July 2018 - December 2018
                </td>
            </tr>
            <tr>
                <td className="d-none d-lg-table-cell">
                    MIT Federal Credit Union
                </td>
                <td className="d-none d-lg-table-cell">
                    Internal Audit Assistant
                </td>
                <td className="d-none d-lg-table-cell">
                    October 2017 - February 2018
                </td>
            </tr>
            <tr>
                <td className="d-none d-lg-table-cell">
                    Wellington Management
                </td>
                <td className="d-none d-lg-table-cell">
                    Guideline Monitoring Co-op
                </td>
                <td className="d-none d-lg-table-cell">
                    December 2016 - July 2017
                </td>
            </tr>
            <tr>
                <td className="d-none d-lg-table-cell">
                    Korea Financial Intelligence Unit
                </td>
                <td className="d-none d-lg-table-cell">
                    Intern
                </td>
                <td className="d-none d-lg-table-cell">
                    May 2016 - July 2016
                </td>
            </tr>
            <tr>
                <td className="d-none d-lg-table-cell text-light">
                    Korea Financial
                </td>
                <td className="d-none d-lg-table-cell text-light">
                    Intern
                </td>
                <td className="d-none d-lg-table-cell text-light">
                    May 2016
                </td>
            </tr>
        </tbody>
    </table>
</div>)
}

export default Experience