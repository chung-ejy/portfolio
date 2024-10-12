import React from 'react';

const StrategyDescription = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Fundamental Factor Loading Strategy</h2>
      <p>
        This stock strategy compares the performance of a fundamental factor-driven stock selection approach against the S&P 500. It leverages machine learning and the Capital Asset Pricing Model (CAPM) to estimate excess returns for Russell 1000 stocks.
      </p>
      <p>
        The analysis begins by retrieving the Russell 1000 index data, followed by obtaining the market risk-free rate and the S&P 500 price series. A set of major stocks—Amazon, Nvidia, Apple, Meta, Google, Tesla, and Microsoft—are used as factors for training the machine learning model (XGBoost Regressor).
      </p>
      <p>
        For each Russell 1000 stock, the strategy predicts future prices using historical stock prices and these major factor stocks. The expected return of the stock is then calculated by comparing the predicted price to the current price.
      </p>
      <p>
        The strategy computes the <strong>beta</strong> by finding the rolling 100-day covariance between the stock’s expected return and the S&P 500’s 90-day returns, divided by the S&P 500’s rolling variance. The stock’s <strong>excess return</strong> is then calculated using the CAPM formula:
      </p>
      <blockquote>
        Excess Return = Risk-Free Rate + Beta × (Expected Return - Risk-Free Rate)
      </blockquote>
      <p>
        Stocks are ranked by their excess return, and the strategy will only switch positions within an industry if another stock in the same industry exhibits a higher excess return than the current holding.
      </p>
      <p>
        <a href="https://github.com/chung-ejy/sapling/blob/main/strategy/magnificent_seven_quarterly.py" target="_blank" rel="noopener noreferrer">
          View the strategy code here on GitHub
        </a>
      </p>
    </div>
  );
};

export default StrategyDescription;
