import React, { useContext, useState } from 'react'
const Profile = () => {
    return (<div className="card card-body mt-4 mb-4">
                <h3 className="card-title">Eric Ji-Yong Chung</h3>
                <div className="row">
                    <div className="col">
                    </div>
                </div>
                <div className='row'>
                            <div className="col">
                            <div className="card card-body mt-4 mb-4">
                                <table className="table table-responsive-sm">
                                    <tbody>
                                        <tr>
                                        <td className="d-none d-lg-table-cell">github</td>
                                        <td className="d-none d-lg-table-cell">
                                            <a href="https://github.com/chung-ejy">
                                            https://github.com/chung-ejy</a></td>
                                        </tr>
                                        <tr>
                                        <td className="d-none d-lg-table-cell">linkedin</td>
                                        <td className="d-none d-lg-table-cell">
                                            <a href="https://www.linkedin.com/in/chung-ejy/">
                                            https://www.linkedin.com/in/chung-ejy/</a></td>
                                        </tr>
                                        <tr>
                                        <td className="d-none d-lg-table-cell">email</td>
                                        <td className="d-none d-lg-table-cell">chung.ejy@gmail.com</td>
                                        </tr>
                                        </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
        </div>
    )
}

export default Profile
