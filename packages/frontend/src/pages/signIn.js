import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useMutation } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

const authMutation = graphql`
  mutation signInMutation($email: String, $password: String) {
    auth(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

const Signin = () => {
  const [mutate, { loading, error, data }] = useMutation(authMutation, {
    onCompleted: ({ auth }) => {
      toast.success(`Logado com sucesso ${auth.user.name}.`);
      localStorage.setItem('authToken', auth.token);
      Router.push('/');
    },
    onError: (err) => {
      toast.error(
        `Combinação email/senha incorreta, verifique as credenciais.`,
      );
    },
  });

  const validationSchema = Yup.object({
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Campo obrigatório'),
  });

  return (
    <PageWrapper>
      <PageContent>
        <Logo>RA</Logo>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async ({ email, password }) => {
            mutate({
              variables: {
                email,
                password,
              },
            });
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
