import React from 'react';

const StrategyDescription = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Fundamental Factor Loading Strategy</h2>
      <p>
        The purpose of this strategy is to observe the performance of a fundamental factor loading strategy in comparison to the S&P 500. The following strategy factor loads the S&P 500 to Russell 1000 stocks to find excess returns.
      </p>
      <p>
        The <strong>beta value</strong> is calculated by finding the rolling 100-day covariance of 5-day returns of the index to the 5-day returns of the stock. The variance of the beta is also the rolling 100-day variance of the 5-day return of the index.
      </p>
      <p>
        The <strong>expected return</strong> of the stock leverages the historical 5-day return of the stock as a projection. The strategy then ranks stocks for each industry by excess return and only changes the industry position if another stock in the same industry has a higher excess return than the held stock.
      </p>
      <p>
        <a href="https://github.com/chung-ejy/sapling/blob/main/multiasset_single_index_model_active_analysis.ipynb" target="_blank" rel="noopener noreferrer">
          View the code and Jupyter notebook on GitHub
        </a>
      </p>
    </div>
  );
};

export default StrategyDescription;
