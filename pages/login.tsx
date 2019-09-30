import React from 'react';
import { Layout } from '../components/layout/layout.component';
import { Formik, Form, Field, FieldProps, FormikProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from '../components/ui/inputs/input/input.component';

interface LoginValues {
  username: string,
  password: string,
}

const initialValues: LoginValues = {
  username: '',
  password: '',
}

const errorMessages = {
  username: 'Username is required. Please insert a valid one.',
  password: 'Please type a valid password'
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required(errorMessages.username),
  password: Yup.string()
    .required(errorMessages.password),
});


const Login = () => {

  const onFormSubmit = (values: LoginValues) => {
    console.log(values);
  }

  return (
    <Layout>
      Login template
      <Formik
        initialValues={ initialValues }
        validationSchema={ LoginSchema }
        onSubmit={ onFormSubmit }
      >
         {({ errors, touched }: FormikProps<LoginValues>) => (
          <Form>
            <Field name="username">
              {({ field }: FieldProps<LoginValues>) => (
                <Input
                  type="text"
                  placeholder="Username"
                  error={errors[(field.name as keyof LoginValues)]}
                  isTouched={touched[(field.name as keyof LoginValues)]}
                  {...field}
                />
              )}
            </Field>
            <Field name="password">
              {({ field }: FieldProps<LoginValues>) => (
                <Input
                  type="password"
                  placeholder="Password"
                  error={errors[(field.name as keyof LoginValues)]}
                  isTouched={touched[(field.name as keyof LoginValues)]}
                  {...field}
                />
              )}
            </Field>
            <button type="submit">
              Submit!
            </button>
          </Form>
         )}
      </Formik>


    </Layout>
  )
}

export default Login;