import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const AssetForm = ({asset, onSave, onCancel, onChange, saving, errors}) => { 
  const allAssetTypes = [{
       value: "C&I",
       text: "C&I"
     },
     {
        value: "CRE",
        text: "CRE"
     },
     {
        value: "RESI",
        text: "RESI"
     },
     {
        value: "MUNI",
        text: "MUNI"
     },
     {
        value: "ALLL",
        text: "ALLL"
     },
     {
        value: "OTHER",
        text: "Other"
     }];

  return (
    <form>
      <h1>{asset.id ? 'Manage' : 'New'} Asset</h1>
      
      <SelectInput
        name="type"
        label="Asset Class Type"
        value={asset.type}
        defaultOption="Select Asset Type"
        options={allAssetTypes}
        onChange={onChange} error={errors.type}/>    

      <TextInput
        name="title"
        label="Title"
        value={asset.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="value"
        label="Value"
        value={asset.value}
        onChange={onChange}
        error={errors.value}/>

      <TextInput
        name="riskMultiplier"
        label="Risk Multiplier"
        value={asset.riskMultiplier}
        onChange={onChange}
        error={errors.riskMultiplier}/>

      <TextInput
        name="riskRating"
        label="Risk Rating"
        value={asset.riskRating}
        onChange={onChange}
        error={errors.riskRating}/>

      <TextInput
        name="amortizationTerm"
        label="Amortization Term (Years)"
        value={asset.amortizationTerm}
        onChange={onChange}
        error={errors.AmortizationTerm}/>

      <TextInput
        name="seasoning"
        label="WA Seasoning (Years)"
        value={asset.seasoning}
        onChange={onChange}
        error={errors.seasoning}/>

      <TextInput
        name="maturity"
        label="WA Maturity (Years)"
        value={asset.maturity}
        onChange={onChange}
        error={errors.maturity}/>

      <TextInput
        name="prepaySpeed"
        label="Prepayment Speed (CPR)"
        value={asset.prepaySpeed}
        onChange={onChange}
        error={errors.prepaySpeed}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <input
        type="button"
        disabled={saving}
        value={saving ? 'Wait...' : 'Cancel'}
        className="btn btn-primary"
        onClick={onCancel}/>
    </form>
  );
};

AssetForm.propTypes = {
  asset: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default AssetForm;
