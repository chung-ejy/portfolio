import React from 'react'
const Education = () => {
    const title = "Education"
    return(<div className="card cardbody bg-light p-2">
    {/* <h1 className="cardtitle text-primary text-center">{title}</h1> */}
    <table className="table table-responsive-sm text-center">
            <thead>
                <tr><th>School</th><th>Degree</th><th>Dates</th></tr>
            </thead>
            <tbody>
            <tr>
                <td className="d-none d-lg-table-cell">
                    Northeastern University
                </td>
                <td className="d-none d-lg-table-cell">
                    Bachelor's of Computer Science and Finance
                </td>
                <td className="d-none d-lg-table-cell">
                    September 2015 - May 2020
                </td>
            </tr>
            <tr>
                <td className="d-none d-lg-table-cell">
                    Yongsan International School of Seoul
                </td>
                <td className="d-none d-lg-table-cell">
                    High School Diploma
                </td>
                <td className="d-none d-lg-table-cell">
                    September 2008 - May 2013
                </td>
            </tr>
            <tr>
                <td className="d-none d-lg-table-cell">
                    Lycee International Xavier
                </td>
                <td className="d-none d-lg-table-cell">
                    Secondary Education
                </td>
                <td className="d-none d-lg-table-cell">
                    October 2007 - May 2008
                </td>
            </tr>
            <tr>                
                <td className="text-light d-none d-lg-table-cell">
                    Yongsan International School of Seoul
                </td>
                <td className="text-light d-none d-lg-table-cell">
                Secondary Education
                </td>
                <td className="text-light d-none d-lg-table-cell">
                October 2007 - May 2008
                </td></tr>
        </tbody>
    </table>
</div>)
}

export default Education