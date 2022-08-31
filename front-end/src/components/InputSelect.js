import React from 'react';
import './Styles/InputSelect.css';

function InputSelect({ options, placeholder }) {
  return (
    <select
      className="inputselect"
      placeholder={placeholder}
    >
      {options.map(op => {
        return op instanceof Object ? (
          <option key={op.value} value={op.value}>
            {op.name}
          </option>
        ) : (
          <option key={op} value={op}>
            {op}
          </option>
        );
      })}
    </select>
  );
}

export default InputSelect;