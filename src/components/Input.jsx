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
    <>
      {label && (
        <label htmlFor={name} className='form-label'>
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
    </>
  );
};
