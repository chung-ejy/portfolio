import React from 'react'
const Education = () => {
    const title = "Education"
    return(<div className="card cardbody bg-light p-2">
    {/* <h1 className="cardtitle text-primary text-center">{title}</h1> */}
    <table className="table table-responsive-sm text-center">
            <thead>
                <tr><th>School</th><th className="d-none d-lg-table-cell">Degree</th><th>Dates</th></tr>
            </thead>
            <tbody>
            <tr>
                <td className="d-lg-table-cell">
                    Northeastern University
                </td>
                <td className="d-none d-lg-table-cell">
                    Bachelor's of Computer Science and Finance
                </td>
                <td className="d-lg-table-cell">
                    September 2013 - January 2025
                </td>
            </tr>
        </tbody>
    </table>
</div>)
}

export default Education
