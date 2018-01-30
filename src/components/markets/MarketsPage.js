import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import PortfolioList from './PortfolioList';
// mport AssetSummary from './AssetSummary';
// import * as assetActions from '../../actions/assetActions';
// import * as portfolioActions from '../../actions/portfolioActions'; 
import MarketsCurveTable from './MarketsCurveTable';
import {browserHistory} from 'react-router';

class MarketsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.redirectToAddPortfolioPage = this.redirectToAddPortfolioPage.bind(this);
    
    this.state = {
      yieldCurve: Object.assign({}, props.yieldCurve),
      errors: {},
      saving: false
    };
  }   

  updateYieldCurveState(event) {
    const field = event.target.name;
    let yieldCurve = Object.assign({}, this.state.course);
    yieldCurve[field] = event.target.value;
    return this.setState({yieldCurve: yieldCurve});
  }

  render() {
    
    return (
      <div>
        <h1>Markets</h1>
        <h2>Active Treasury Curve</h2>
        <p>The Active Treasury Yield Curve can be retrieved from the Treasury Daily or from Markets on Bloomberg</p>
        <MarketsCurveTable 
          yieldCurve={this.state.yieldCurve}
          onChange={this.updateYieldCurveState}
          onSave={this.saveCourse}
          errors={this.state.errors}
          saving={this.state.saving} />
        <h2>Forward Consensus Fed Funds Target</h2>
        <p>The FOMC produces a summary of Economic Projections for the Fed Funds Rate, Median. This result can be retrieved from Bloomberg, FRED, or input manually. There is typically a 3-year projection and a long-term average; however, this tool allows for the direct input of up to 10 years of Forward FF rates.</p>
        Inputs Placeholder
        <h2>Summary Charts</h2>
        Placeholder for Graphs
      </div>
    );
  }
}

MarketsPage.propTypes = {
  yieldCurve: PropTypes.object.isRequired,
  fedFundsForwards: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // FIX ME
  let yieldCurve = {
    yDate: Date(2018,1,29),
    y01: 0.0045,
    y02: 0.0109,
    y03: 0.0166,
    y05: 0.0265,
    y07: 0.0336,
    y10: 0.0385
  };


  return {
    yieldCurve: yieldCurve
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(marketActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsPage);
