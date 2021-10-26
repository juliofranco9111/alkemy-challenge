import React, { useEffect } from 'react';
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
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
    <div className='container'>
      <Logo />
      <form className='form' onSubmit={handleSubmit}>
        <Input
          type='email'
          onChange={handleInputChange}
          name='email'
          className='form-control'
          value={email}
          label='E-mail'
          placeholder='name@example.com'
        />

        <Input
          label='Password'
          value={password}
          type='password'
          name='password'
          onChange={handleInputChange}
          className='form-control'
          icon
        />

        <button type='submit' className='login-button'>
          Enviar
        </button>
      </form>

      <pre>{JSON.stringify({ email: email, password: password })}</pre>
    </div>
  );
};
