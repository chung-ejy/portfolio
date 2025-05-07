import React from 'react'
const SaplingProductCard = () => {
    return (
      <div className="container card card-body py-5 text-center bg-light">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold">Invest Smarter with AI-Powered Automation! 🚀</h1>
            <p className="lead text-muted">
              Tired of guessing the markets? Let <strong>Sapling</strong> do the heavy lifting!
              Our AI-driven portfolio optimizes your investment research in <strong>stocks & crypto</strong> 24/7, so you never miss an opportunity.
            </p>
            <ul className="list-unstyled">
              <li>✅ <strong>Auto-Rebalance</strong> – Keep your portfolio optimized effortlessly</li>
              <li>✅ <strong>Smart Risk Management</strong> – Minimize losses, maximize gains</li>
              <li>✅ <strong>Real-Time Market Insights</strong> – Stay ahead of trends</li>
              <li>✅ <strong>No Emotions, Just Data</strong> – Remove human error from investing research</li>
            </ul>
            <a href="mailto:chung.ejy@gmail.com" className="btn btn-primary mt-3">
              📩 Email Me! chung.ejy@gmail.com
            </a>
          </div>
          <div className="col card m-1 align-item-center"> 
        <h3 className="mt-3">Stock Portfolio</h3>
            <h1 className="text-center"><i className={`fas fas-xl fa-landmark text-primary`}></i></h1>
            <table className="table table-responsive-sm text-center">
                <thead>
                    <tr><th>Details</th><th className="d-none d-lg-table-cell">Values</th></tr>
                </thead>
                <tbody>
                <tr><td className="d-lg-table-cell">Price</td><td className="d-none d-lg-table-cell">$1000</td></tr>
                </tbody>
            </table>
        </div>
        <div className="col card m-1 align-item-center"> 
        <h3 className="mt-3">Crypto Portfolio</h3>
            <h1 className="text-center"><i className={`fas fas-xl fa-link text-primary`}></i></h1>
            <table className="table table-responsive-sm text-center">
                <thead>
                    <tr><th>Details</th><th className="d-none d-lg-table-cell">Values</th></tr>
                </thead>
                <tbody>
                <tr><td className="d-lg-table-cell">Price</td><td className="d-none d-lg-table-cell">$1000</td></tr>
                </tbody>
            </table>
        </div>
        </div>
      </div>
    );
  };
  
  export default SaplingProductCard;
  