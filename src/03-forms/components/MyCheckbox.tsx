import React from 'react';
import { useField } from 'formik';

interface MyCheckboxProps {
  label: string;
  name: string;
  [key: string]: any;
}

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>

      {meta.touched && meta.error && (
        <span className='error'> {meta.error}</span>
      )}
    </>
  );
};
