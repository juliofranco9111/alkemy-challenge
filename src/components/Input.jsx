import React from 'react';

export const Input = ({
  type = 'text',
  label = null,
  placeholder = '',
  name = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div className="form-input">
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        autoComplete="off"
        className="form-control"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
