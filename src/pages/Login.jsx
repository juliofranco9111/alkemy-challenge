import React from 'react';
import { useForm } from '../hooks/useForm';

export const Login = () => {
  const [values, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  return (
    <div className='login'>
      <div className='form'>
        <h1 className='display-3'>Hero app</h1>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            onChange={handleInputChange}
            name='email'
            className='form-control'
            value={email}
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Password
          </label>
          <input
            value={password}
            type='password'
            name='password'
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input type='submit' className='' />
        </div>
      </div>

      <pre>{JSON.stringify({ email: email, password: password })}</pre>
    </div>
  );
};
