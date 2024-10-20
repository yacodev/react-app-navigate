import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    name,
    email,
    password,
    repeatPassword,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  //const { name, email, password, repeatPassword } = formData;

  return (
    <div>
      <h1> register page</h1>
      <form onSubmit={onSubmit} noValidate>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={onChange}
        />
        {name.trim().length <= 0 && <span> Este campor es necesario</span>}
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={onChange}
        />
        {!isValidEmail(email) && <span> Este campor es necesario</span>}
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span> Este campor es necesario</span>}
        <input
          type='password'
          name='repeatPassword'
          placeholder='Repeat password'
          value={repeatPassword}
          onChange={onChange}
        />
        {repeatPassword.trim().length <= 0 && (
          <span> Este campor es necesario</span>
        )}
        <button type='submit'> Create</button>
        <button type='button' onClick={resetForm}>
          {' '}
          Reset{' '}
        </button>
      </form>
    </div>
  );
};
