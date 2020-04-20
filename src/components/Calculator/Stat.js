import React, { useState } from 'react';

export default function Stat({ children, updateValue }) {
  const [value, setValue] = useState(0);
  const handleChange = e => {
    const number = Number(e.target.value);

    if (!e.target.value ) {
      setValue('');
      updateValue(0);
    }
    else if (number >= 0 && number <= 99) {
      setValue(number);
      updateValue(number);
    }
  }

  const handleFocusLost = e => {
    if (!e.target.value) {
      setValue(0);
      updateValue(0);
    }
  }

  const handleFocus = e => e.target.select();

  return (
    <div className="form-group row d-flex justify-content-center">
      <label htmlFor={children} className="col-sm-4 col-form-label text-capitalize">{children}</label>
      <div className="col-sm-3">
        <input
          type="text"
          className="form-control"
          id={children}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocusLost}
          />
      </div>
    </div>
  )
}