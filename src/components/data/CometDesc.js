import React from 'react'

const CometDesc = () => {
    return(<div className="card cardbody">
        <h1>Comet</h1>
        <h3>Cryptocurrency Trading Bot</h3>
        <table className="table table-responsive-sm">
            <tbody>
            <tr>
                <td className="d-none d-lg-table-cell">
                    January 2022 - July 2022
                    </td>
                <td className="d-none d-lg-table-cell">
                    <a href="https://github.com/chung-ejy/comet">
                    https://github.com/chung-ejy/comet</a></td>
                </tr>
                </tbody>
        </table>
        <p>
        Average weekly price predictor for Bitcoin to USD based on previous 14 week averages. 
        Disclaimer: For educational purposes only. The following domain is not liable for any investment decisions made by any party.
        </p>
    </div>)
}

export default CometDesc