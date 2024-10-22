import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1> Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Must be 6 characters or more'),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Required'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label='Name' name='name' placeholder='Jane Doe' />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Jane@gmail.com'
            />
            <MyTextInput
              label='Password'
              name='password'
              type='password'
              placeholder='******'
            />
            <MyTextInput
              label='Confirm Password'
              name='repeatPassword'
              type='password'
              placeholder='******'
            />
            <button type='submit'> Create</button>
            <button type='button' onClick={handleReset}>
              Reset{' '}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
