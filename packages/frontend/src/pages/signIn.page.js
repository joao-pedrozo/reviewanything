import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/client';
import Router from 'next/router';

const validationSchema = Yup.object({
  email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Campo obrigatório'),
});

const Signin = () => {
  return (
    <PageWrapper>
      <PageContent>
        <Logo>RA</Logo>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async ({ email, password }) => {
            const signInResult = await signIn('credentials', {
              email,
              password,
              redirect: false,
            });

            if (!signInResult.error) {
              Router.push('/');
            }
          }}
        >
          {({ errors }) => (
            <Form>
              <FormFieldWrapper>
                <label htmlFor="email">E-mail</label>
                <Field id="email" name="email" type="email" />
                {errors.email && <p>{errors.email}</p>}
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="passowrd">Senha</label>
                <Field id="password" name="password" type="password" />
                {errors.password && <p>{errors.password}</p>}
              </FormFieldWrapper>
              <FormSubmitButton type="submit">Entrar</FormSubmitButton>
            </Form>
          )}
        </Formik>
      </PageContent>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 200px;
`;

const Logo = styled.p`
  color: #e74c3c;
  font-size: 44px;
  letter-spacing: -6px;
  margin-bottom: 62px;
  font-weight: bold;
`;

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;

  p {
    max-width: 100%;
  }
`;

const FormSubmitButton = styled.button`
  margin-top: 5px;
`;

export default Signin;
