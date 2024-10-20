import React from 'react';
import '../styles/styles.css';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
  return (
    <div>
      <h1> Formik nasic tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First name is required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last name is required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          terms: Yup.boolean()
            .required('Must Accept Terms and Conditions')
            .oneOf([true], 'Must Accept Terms and Conditions'),
          jobType: Yup.string()
            .required('Job Type is required')
            .oneOf(['fulltime', 'parttime', 'freelance'], 'Invalid Job Type'),
        })}
      >
        {({ handleSubmit, errors, touched, getFieldProps }) => (
          <Form>
            <label htmlFor='firstName'> First Name</label>
            <Field type='text' name='firstName' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'> Last Name</label>
            <Field type='text' name='lastName' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'> email</label>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='password'> Password</label>
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='span' />

            <label htmlFor='terms'>
              <Field type='checkbox' name='terms' />
              terms and conditions{' '}
            </label>
            <ErrorMessage name='terms' component='span' />

            <label htmlFor='jobType'> email</label>
            <Field name='jobType' as='select'>
              <option value='fulltime'>Full time</option>
              <option value='parttime'>Part time</option>
              <option value='freelance'>Freelance</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
