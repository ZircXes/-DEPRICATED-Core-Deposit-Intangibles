import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PortfolioListRow = ({portfolio}) => {
  return (
    <tr>
      <td>{portfolio.type}</td>
      <td><Link to={'/portfolio/' + portfolio.id}>{portfolio.title}</Link></td>
      <td>{portfolio.balance}</td>
      <td>{portfolio.waRate}</td>
      <td>{portfolio.truncYear}</td>
      <td>{portfolio.y1Decay}</td>
      <td>{portfolio.segments}</td>
      <td>{portfolio.theta}</td>
      <td>{portfolio.decayA}</td>
      <td>{portfolio.decayB}</td>
      <td>{portfolio.beta}</td>
    </tr>
  );
};

PortfolioListRow.propTypes = {
  portfolio: PropTypes.object.isRequired
};

export default PortfolioListRow;
