import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';
import Router from 'next/router';

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Campo obrigatório.')
    .matches(
      /^[A-Z0-9_]+$/i,
      'O nome de usuário não pode conter caractere especiais(incluindo espaço)',
    )
    .min(4, 'O nome de usuário deve conter no mínimo 4 digitos')
    .max(12, 'O nome de usuário deve conter no máximo 12 digitos'),
  email: Yup.string()
    .email('Endereço de e-mail inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 digitos')
    .required('Campo obrigatório'),
});

const SignUp = () => {
  const [mutate, { error }] = useMutation(graphql`
    mutation signUp_signUpMutation(
      $username: String
      $email: String
      $password: String
      $name: String
    ) {
      addUser(
        username: $username
        name: $name
        email: $email
        password: $password
      ) {
        _id
      }
    }
  `);
  return (
    <PageWrapper>
      <PageTopCicle />
      <PageBottomCicle />
      <ContentWrapper>
        <Logo>RA</Logo>

        <DisclaimerText>É rapidinho :)</DisclaimerText>

        <CreateAccountTitle>Crie uma conta</CreateAccountTitle>
        <FormSeparator>
          <hr />
          <hr />
        </FormSeparator>

        <Formik
          initialValues={{
            name: '', username: '', email: '', password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(params) => {
            mutate({
              variables: {
                name: params.name,
                email: params.email,
                password: params.password,
                username: params.username,
              },
            });
            Router.push('/');
          }}
        >
          {({ errors }) => (
            <Form>
              <FormFieldWrapper>
                <label htmlFor="username">Nome de usuário</label>
                <Field id="username" name="username" type="text" />
                {errors.username && <p>{errors.username}</p>}
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="name">Nome</label>
                <Field id="name" name="name" type="text" />
                {errors.name && <p>{errors.name}</p>}
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" type="email" />
                {errors.email && <p>{errors.email}</p>}
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="password">Senha</label>
                <Field id="password" name="password" type="password" />
                {errors.password && <p>{errors.password}</p>}
              </FormFieldWrapper>

              <FormSubmitButton type="submit">
                Finalizar cadastro
              </FormSubmitButton>
            </Form>
          )}
        </Formik>
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTopCicle = styled.div`
  width: 250px;
  height: 250px;
  background-color: #e74c3c;
  position: absolute;
  border-radius: 50%;
  right: -125px;
  top: -125px;
`;

const PageBottomCicle = styled.div`
  width: 250px;
  height: 250px;
  background-color: #e74c3c;
  position: absolute;
  border-radius: 50%;
  bottom: -125px;
  left: -125px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 55px;

  hr {
    width: 91px;
    padding: 0 5px;
  }
`;

const FormSeparator = styled.div`
  display: flex;
`;

const Logo = styled.p`
  color: #e74c3c;
  font-size: 44px;
  letter-spacing: -6px;
  margin-bottom: 62px;
  font-weight: bold;
`;

const DisclaimerText = styled.p`
  font-size: 16px;
`;

const CreateAccountTitle = styled.h2`
  font-size: 24px;
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

export default SignUp;
