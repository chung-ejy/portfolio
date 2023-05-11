import React from 'react'

const LongshotDesc = () => {
    return(<div className="card cardbody">
        <h1>Longshot</h1>
                    <h3>Stock Investment Research Platform </h3>
                    <table className="table table-responsive-sm">
                        <tbody>
                        <tr>
                            <td className="d-none d-lg-table-cell">
                                January 2020 - Present
                                </td>
                            <td className="d-none d-lg-table-cell">
                                <a href="https://github.com/chung-ejy/longshot">
                                https://github.com/chung-ejy/longshot</a></td>
                            </tr>
                            </tbody>
                    </table>
                    <p>
                    Architected a trade simulation platform with Jupyter Notebooks to transform training data, model regression and
                        classification predictions utilizing algorithms provided by sci-kit learn and back tested various trading strategies. 
                        Backtested quarterly fundamental strategies and weekly trade signal strategies in python for industry based
                        stock categories resulting in a strategy with overperforming yearly historical gains compared to the SP500
                    </p>

                    </div>)
}

export default LongshotDesc