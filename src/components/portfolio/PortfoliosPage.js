import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PortfolioList from './PortfolioList';
// mport AssetSummary from './AssetSummary';
// import * as assetActions from '../../actions/assetActions';
import * as portfolioActions from '../../actions/portfolioActions'; 
import {browserHistory} from 'react-router';

class PortfoliosPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddPortfolioPage = this.redirectToAddPortfolioPage.bind(this);
  }
    
  redirectToAddPortfolioPage() {
      browserHistory.push('/portfolio');
  }      

  render() {
    const {portfolios} = this.props;  
    
    return (
      <div>
        <h1>Deposit Portfolios</h1>
        <input type="submit"
               value="Add New Portfolio"
               className="btn btn-primary"
               onClick={this.redirectToAddPortfolioPage}/> 
        <PortfolioList portfolios={portfolios} />
      </div>
    );
  }
}

PortfoliosPage.propTypes = {
  portfolios: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    portfolios: state.portfolios
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(portfolioActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosPage);
