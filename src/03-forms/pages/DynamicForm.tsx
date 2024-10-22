import React from 'react';
import formJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yub from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yub.string();

  for (const validation of input.validations) {
    if (validation.type === 'required') {
      schema = schema.required('this field is required');
    }
    if (validation.type === 'minLength') {
      schema = schema.min(validation.value as number, 'min length is 3');
    }
    if (validation.type === 'maxLength') {
      schema = schema.max(validation.value as number, 'max length is 10');
    }
    if (validation.type === 'email') {
      schema = schema.email('invalid email');
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yub.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                    key={name}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect
                    name={name}
                    placeholder={placeholder}
                    label={label}
                    key={name}
                  >
                    <option value=''> select and options</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error('Unknown type');
            })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
