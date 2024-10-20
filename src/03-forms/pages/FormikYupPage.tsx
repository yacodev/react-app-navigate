import React from 'react';
import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
  });

  return (
    <div>
      <h1> Formik nasic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'> First Name</label>
        <input type='text' {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName}</span>
        )}

        <label htmlFor='lastName'> Last Name</label>
        <input type='text' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor='email'> email</label>
        <input type='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span> {errors.email}</span>}

        <label htmlFor='password'> Password</label>
        <input type='password' {...getFieldProps('password')} />
        {touched.password && errors.password && <span> {errors.password}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
