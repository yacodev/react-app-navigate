import React from 'react';
import '../styles/styles.css';
import { FormikErrors, useFormik } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length >= 15) {
      console.log('error');
      errors.firstName = 'Must be 15 characters or less';
    }
    if (!lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  console.log('errors', errors);

  return (
    <div>
      <h1> Formik nasic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'> First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='name'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName}</span>
        )}

        <label htmlFor='lastName'> Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='last-name'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor='email'> email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span> {errors.email}</span>}

        <label htmlFor='password'> Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password && <span> {errors.password}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
