import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { useMutation } from 'relay-hooks';

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
        password: {  label: "Password", type: "password" }
      },
      async authorize(teste) {
        console.log(teste);
        try {
          const [mutate, { error, data }] = useMutation(graphql`
          mutation auth_signInMutation($email: String, $password: String) {
              auth(email: $email, password: $password) {
                  token
              }
          }
        `)
        } catch(err) {
          console.log(err);
        }
        console.log('aqqdasdsa')
      }
    })
  ]
  })