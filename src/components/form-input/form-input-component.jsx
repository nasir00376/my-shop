import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label, handleChange, ...otherProps}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps}/>
{label && <label className={`${otherProps.value.length && 'shrink'} form-input-label`}>{label}</label>}
  </div>
);

export default FormInput;