import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { commitMutation } from 'relay-hooks';

import axios from 'axios';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize({ email, password }) {
        const query = `
          mutation fetch($email: String, $password: String){
            auth(email: $email, password: $password){
              user{
                name
              }
            }
          }
        `
        const response = await axios({
          url: 'http://localhost:9000/graphql',
          method: 'post',
          data: {
            query,
            variables: { email, password }
          }
        });

        if (!response.data.data.auth) {
          throw new Error('Usuário não encontrado, verifique as credenciais.')
        }

        return {
          name: response.data.data.auth.user.name
        }
      }
    })
  ]
});