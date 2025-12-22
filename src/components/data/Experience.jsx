import React from 'react';

const Experience = () => {
    const title = "Experience";
    return (
        <div className="card cardbody bg-light p-2">
            {/* <h1 className="cardtitle text-primary text-center">{title}</h1> */}
            <table className="table table-responsive-sm text-left">
                <thead>
                    <tr>
                        <th>Firm</th>
                        <th className="d-none d-lg-table-cell">Position</th>
                        <th>Dates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="d-lg-table-cell">
                            <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
                                Northeastern University
                            </a>
                        </td>
                        <td className="d-none d-lg-table-cell">Business Analyst Co-op</td>
                        <td className="d-lg-table-cell">September 2025 - December 2025</td>
                    </tr>
                    <tr>
                        <td className="d-lg-table-cell">
                            <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                Amazon
                            </a>
                        </td>
                        <td className="d-none d-lg-table-cell">Data Analyst Co-op</td>
                        <td className="d-lg-table-cell">July 2018 - December 2018</td>
                    </tr>
                    <tr>
                        <td className="d-lg-table-cell">
                            <a href="https://www.mitfcu.org/" target="_blank" rel="noopener noreferrer">
                                MIT Federal Credit Union
                            </a>
                        </td>
                        <td className="d-none d-lg d-lg-table-cell">Internal Audit Assistant</td>
                        <td className="d-lg-table-cell">October 2017 - February 2018</td>
                    </tr>
                    <tr>
                        <td className="d-lg-table-cell">
                            <a href="https://www.wellington.com/" target="_blank" rel="noopener noreferrer">
                                Wellington Management
                            </a>
                        </td>
                        <td className="d-none d-lg d-lg-table-cell">Investment Compliance Co-op</td>
                        <td className="d-lg-table-cell">December 2016 - July 2017</td>
                    </tr>
                    <tr>
                        <td className="d-lg-table-cell">
                            <a href="http://www.kofiu.go.kr/" target="_blank" rel="noopener noreferrer">
                                Korea Financial Intelligence Unit
                            </a>
                        </td>
                        <td className="d-none d-lg d-lg-table-cell">Intern</td>
                        <td className="d-lg-table-cell">May 2016 - July 2016</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Experience;
