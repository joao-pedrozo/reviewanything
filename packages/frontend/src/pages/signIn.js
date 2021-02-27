import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from "formik";
import { useMutation } from 'relay-hooks';
import * as Yup from "yup"
import graphql from 'babel-plugin-relay/macro';

const validationSchema = Yup.object({
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Campo obrigatório')
})

const Signin = () => {
    const [mutate, { error, data }] = useMutation(graphql`
        mutation signIn_signInMutation($email: String, $password: String) {
            auth(email: $email, password: $password) {
                token
            }
        }
    `)

   return (
    <PageWrapper>
        <PageContent>
            <Logo>
                RA
            </Logo>

            <Formik 
                initialValues={{ email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={async (values) => {               
                 const test = await mutate({ variables: { email: values.email, password: values.password }});
                 console.log(test);
                }}
            >
               {({ errors }) => (
                   <Form>
                       <FormFieldWrapper>
                            <label htmlFor="email">E-mail</label>
                            <Field id="email" name="email" type="email"/>
                            {errors.email && <p>{errors.email}</p>}
                       </FormFieldWrapper>
                       <FormFieldWrapper>
                            <label htmlFor="passowrd">Senha</label>
                            <Field id="password" name="password" type="password"/>
                            {errors.password && <p>{errors.password}</p>}
                       </FormFieldWrapper>
                       <FormSubmitButton type="submit">
                           Entrar
                       </FormSubmitButton>
                    </Form>
               )}
           </Formik>
        </PageContent>
    </PageWrapper>
   )
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