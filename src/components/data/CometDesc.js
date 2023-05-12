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
        <p className="m-2">
            Description: Average weekly price predictor for bitcoin prices based on previous 14 week averages. 
        </p>
        <p className="text-success">
            Usage: Input a csv table with columns numbered 0 - 13. 
            Note: model will only provide average predictions for the upcoming week. 
        </p>         
                    <p className="text-danger">
                        Disclaimer: For educational purposes only. The following
                        domain is not liable for any investment decisions made by any party.
                        Please consult an investment advisor.
                    </p>
    </div>)
}

export default CometDesc