import React from 'react';
import { useField } from 'formik';

interface MySelectProps {
  label: string;
  name: string;
  [key: string]: any;
}

export const MySelect = ({ label, ...props }: MySelectProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}> {label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <span className='error'> {meta.error}</span>
      )}
    </>
  );
};
