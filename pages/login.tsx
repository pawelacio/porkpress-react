import React from 'react';
import { Layout } from '../components/layout/layout.component';
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FormikProps,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Input } from '../components/ui/inputs/input/input.component';

import { 
  GridContainer,
  GridElement,
} from '../components/layout/grid/grid.styled';

import { Head1 } from '../components/styles/headers';
import { Card } from '../components/layout/card/card.styled';

import { 
  ButtonTypes,
  ButtonSizes,
  SolidButton,
  GhostButton,
  RoundButton,
} from '../components/ui/button/button.styled';

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
  username: Yup.string()
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
      <GridContainer center fullHeight>
        <GridElement width={ 4 }>
        <Card center>
          <GridElement>
            <Head1>Log In</Head1>
          </GridElement>
          <Formik
            initialValues={ initialValues }
            validationSchema={ LoginSchema }
            onSubmit={ onFormSubmit }
          >
            {({ errors, touched }: FormikProps<LoginValues>) => (
              <GridElement margin>
                <Form>
                  <Field name="username">
                    {({ field }: FieldProps<LoginValues>) => (
                      <GridElement margin>
                        <Input
                          type="text"
                          placeholder="Username"
                          error={errors[(field.name as keyof LoginValues)]}
                          isTouched={touched[(field.name as keyof LoginValues)]}
                          {...field}
                        />
                      </GridElement>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }: FieldProps<LoginValues>) => (
                      <GridElement margin>
                        <Input
                          type="password"
                          placeholder="Password"
                          error={errors[(field.name as keyof LoginValues)]}
                          isTouched={touched[(field.name as keyof LoginValues)]}
                          {...field}
                        />
                      </GridElement>
                    )}
                  </Field>
                  <GridElement margin>
                    <SolidButton 
                      type="submit"
                      size={ ButtonSizes.MEDIUM }
                    >
                      Log In
                    </SolidButton>
                  </GridElement>
                </Form>
              </GridElement>
            )}
          </Formik>
        </Card>
        </GridElement>
      </GridContainer>
    </Layout>
  )
}

export default Login;