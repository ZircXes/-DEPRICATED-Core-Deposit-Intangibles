import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import formatPercent from '../../selectors/formatPercent';

const PortfolioListRow = ({portfolio}) => {
  return (
    <tr>
      <td>{portfolio.type}</td>
      <td><Link to={'/portfolio/' + portfolio.id}>{portfolio.title}</Link></td>
      <td>{portfolio.balance}</td>
      <td>{formatPercent(portfolio.waRate,2)}</td>
      <td>{portfolio.truncYear}</td>
      <td>{formatPercent(portfolio.y1Decay,1)}</td>
      <td>{portfolio.segments}</td>
      <td>{formatPercent(portfolio.theta,0)}</td>
      <td>{formatPercent(portfolio.decayA,0)}</td>
      <td>{formatPercent(portfolio.decayB,0)}</td>
      <td>{formatPercent(portfolio.beta,0)}</td>
    </tr>
  );
};

PortfolioListRow.propTypes = {
  portfolio: PropTypes.object.isRequired
};

export default PortfolioListRow;
