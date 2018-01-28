import React, {PropTypes} from 'react';
import PortfolioListRow from './PortfolioListRow';

const PortfolioList = ({portfolios}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Balance</th>
        <th>WA Rate</th>
        <th>Truncation Year</th>
        <th>Y1 Decay</th>
        <th>Decay Segments</th>
        <th>Theta (%A)</th>
        <th>D% A</th>
        <th>D% B</th>
        <th>Beta</th>
      </tr>
      </thead>
      <tbody>
      {portfolios.map(portfolio =>
        <PortfolioListRow key={portfolio.id} portfolio={portfolio}/>
      )}
      </tbody>
    </table>
  );
};

PortfolioList.propTypes = {
  portfolios: PropTypes.array.isRequired
};

export default PortfolioList;
