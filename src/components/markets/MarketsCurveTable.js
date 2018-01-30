import React from 'react';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import formatDateString from '../../selectors/formatDateString';

const MarketsCurveTable = ({yieldCurve, onChange, saving, errors}) => { 

  return (
    <form>
          <DateInput
            name="yieldCurveDate"
            label="Yield Curve Date"
            value={formatDateString(yieldCurve.yDate)}
            onChange={onChange}
            error={errors.yDate}
            sizeInput={6}/>

          <TextInput
            name="01-year"
            label="1-Year"
            value={yieldCurve.y01}
            onChange={onChange}
            error={errors.y01}
            sizeInput={6}/>
    
          <TextInput
            name="02-year"
            label="2-Year"
            value={yieldCurve.y02}
            onChange={onChange}
            error={errors.y02}
            sizeInput={6}/>
    
          <TextInput
            name="03-year"
            label="3-Year"
            value={yieldCurve.y03}
            onChange={onChange}
            error={errors.y03}
            sizeInput={6}/>
    
          <TextInput
            name="05-year"
            label="5-Year"
            value={yieldCurve.y05}
            onChange={onChange}
            error={errors.y05}
            sizeInput={6}/>
    
          <TextInput
            name="07-year"
            label="7-Year"
            value={yieldCurve.y07}
            onChange={onChange}
            error={errors.y07}
            sizeInput={6}/>
    
          <TextInput
            name="10-year"
            label="10-Year"
            value={yieldCurve.y10}
            onChange={onChange}
            error={errors.y10}
            sizeInput={6}/>
    </form>
  );
};

MarketsCurveTable.propTypes = {
  yieldCurve: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default MarketsCurveTable;
