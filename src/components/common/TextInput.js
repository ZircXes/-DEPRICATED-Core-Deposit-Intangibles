// From Pluralsight Course by Cory House
import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, sizeInput}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          size={sizeInput}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

// <div className={wrapperClass}>

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
