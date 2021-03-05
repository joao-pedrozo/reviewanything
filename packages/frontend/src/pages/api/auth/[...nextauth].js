import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { commitMutation } from 'relay-hooks';

import axios from 'axios';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
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

        return {
          name: response.data.data.auth.user.name
        }
      }
    })
  ]
});