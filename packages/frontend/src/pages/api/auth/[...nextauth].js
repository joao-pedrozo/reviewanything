import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { useRelayEnvironment } from 'react-relay';

import { commitMutation } from 'relay-hooks';

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

        const variables = { email, password };

        const teste = await fetch(`${process.env.API_URL}/graphql`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ query, variables }),
        });

        console.log(teste);
      }
    })
  ]
})