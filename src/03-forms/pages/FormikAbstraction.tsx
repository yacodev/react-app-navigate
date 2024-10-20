import React from 'react';

import { Form, Formik } from 'formik';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikAbstraction = () => {
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
            <MyTextInput label='First Name' name='firstName' />
            <MyTextInput label='Last Name' name='lastName' />
            <MyTextInput label='Email' name='email' />
            <MyCheckbox label='terms and conditions' name='terms' />

            <MySelect name='jobType' label='Job title'>
              <option value='fulltime'>Full time</option>
              <option value='parttime'>Part time</option>
              <option value='freelance'>Freelance</option>
            </MySelect>

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
