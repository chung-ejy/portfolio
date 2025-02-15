import React from 'react'

const SaplingProductCard = () => {
    return (
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold">Invest Smarter with AI-Powered Automation! 🚀</h1>
            <p className="lead text-muted">
              Tired of guessing the markets? Let <strong>Sapling</strong> do the heavy lifting!
              Our AI-driven portfolio optimizes your investments in <strong>stocks & crypto</strong> 24/7, so you never miss an opportunity.
            </p>
            <ul className="list-unstyled">
              <li>✅ <strong>Auto-Rebalance</strong> – Keep your portfolio optimized effortlessly</li>
              <li>✅ <strong>Smart Risk Management</strong> – Minimize losses, maximize gains</li>
              <li>✅ <strong>Real-Time Market Insights</strong> – Stay ahead of trends</li>
              <li>✅ <strong>No Emotions, Just Data</strong> – Remove human error from investing</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://source.unsplash.com/500x300/?finance,technology" alt="AI Trading" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SaplingProductCard;
  