import React, { useEffect } from 'react';
import { Input } from '../components/Input';
import { useAuth } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';

export const Login = () => {
  const [values, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  let user = {};

  const { email, password } = values;
  const { loading, token } = useAuth(values);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='banner'>
          <h1>Heroes</h1>

          <p className='text-muted'>Alkemy challenge</p>
        </div>

        <div className='form-container'>
          <div className='mb-3'>
            <Input
              type='email'
              onChange={handleInputChange}
              name='email'
              className='form-control'
              value={email}
              label='E-mail'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-3'>
            <Input
              label='Password'
              value={password}
              type='password'
              name='password'
              onChange={handleInputChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <button type='submit' className='login-button'>
              Enviar
            </button>
          </div>
        </div>
      </form>

      <pre>{JSON.stringify({ email: email, password: password })}</pre>
    </div>
  );
};
