import React from 'react';
import { useField, ErrorMessage } from 'formik';

interface MyTextInputProps {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email';
  [key: string]: any;
}

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}> {label}</label>
      <input className='text-input' {...field} />
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && (
        <span className='error'> {meta.error}</span>
      )} */}
    </>
  );
};
