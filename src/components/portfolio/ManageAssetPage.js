import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as assetActions from '../../actions/assetActions';
import AssetForm from './AssetForm';
// import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageAssetPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      asset: Object.assign({}, props.asset),
      errors: {},
      saving: false
    };

    this.updateAssetState = this.updateAssetState.bind(this);
    this.saveAsset = this.saveAsset.bind(this);
    this.cancelAsset = this.cancelAsset.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.asset.id != nextProps.asset.id) {
      // Necessary to populate form when existing asset is loaded directly.
      this.setState({asset: Object.assign({}, nextProps.asset)});
    }
  }

  updateAssetState(event) {
    const field = event.target.name;
    let asset = Object.assign({}, this.state.asset);
    asset[field] = event.target.value;
    return this.setState({asset: asset});
  }

  assetFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.asset.title.length < 1) {
      errors.title = 'Title must be at least 1 character.';
      formIsValid = false;
    }

    // Add other error trapping in here

    this.setState({errors: errors});
    return formIsValid;
  }

  saveAsset(event) {
    event.preventDefault();

    if (!this.assetFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveAsset(this.state.asset)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  cancelAsset(event) {
    event.preventDefault();

    this.setState({saving: false});

    toastr.warning('Cancel new/edit asset');

    this.context.router.push('/assets');
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Asset saved');
    this.context.router.push('/assets');
  }

  render() {
    return (
      <AssetForm
        onChange={this.updateAssetState}
        onSave={this.saveAsset}
        onCancel={this.cancelAsset}
        asset={this.state.asset}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageAssetPage.propTypes = {
  asset: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageAssetPage.contextTypes = {
  router: PropTypes.object
};

function getAssetById(assets, id) {
  const asset = assets.filter(asset => asset.id == id);
  if (asset) return asset[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const assetId = ownProps.params.id; // from the path `/asset/:id`

  // FIX ME
  let asset = {
    id: '',
    type: '',
    title: '',
    value: '0',
    riskMultiplier: '1.00',
    riskRating: 'Unrated',
    amortizationTerm: '25',
    seasoning: '0',
    maturity: '10',
    prepaySpeed: '5',
    model: 'None'
  };

  if (assetId && state.assets.length > 0) {
    asset = getAssetById(state.assets, assetId);
  }

  return {
    asset: asset
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAssetPage);
