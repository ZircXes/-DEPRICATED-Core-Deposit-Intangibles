import React, {PropTypes} from 'react';
import AssetListRow from './AssetListRow';

const AssetSummary = ({assets}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Type</th>
        <th>Balance</th>
        <th>Assets in Category</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
};

AssetSummary.propTypes = {
  assets: PropTypes.array.isRequired
};

export default AssetSummary;
