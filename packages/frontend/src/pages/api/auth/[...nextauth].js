import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import axios from 'axios';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize({ email, password }) {
        const query = `
          mutation fetch($email: String, $password: String){
            auth(email: $email, password: $password){
              token
              user{
                name
              }
            }
          }
        `;

        const response = await axios({
          url: process.env.NEXT_PUBLIC_API_URL,
          method: 'post',
          data: {
            query,
            variables: { email, password },
          },
        });

        console.log(response.data.errors[0].message);

        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        return {
          name: response.data.data.auth.user.name,
          token: response.data.data.auth.token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },

    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
