// import React, { useState, useEffect, createContext } from 'react';
// import Router from 'next/router';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const AuthContext = createContext();

// const AuthProvider = (props) => {
//   const [user, setUser] = useState({ user: null });
//   const [loggedIn, setLoggedIn] = useState(false);

//   const logIn = async (email, password) => {
//     const query = `
//       mutation AuthContextMutation($email: String, $password: String) {
//         auth(email: $email, password: $password) {
//           token
//           user {
//             name
//           }
//         }
//       }
//   `;

//     const response = await axios({
//       url: process.env.NEXT_PUBLIC_API_URL,
//       method: 'post',
//       data: {
//         query,
//         variables: { email, password },
//       },
//     });

//     if (!response.data.errors) {
//       const data = response.data.data.auth;

//       setUser(data.user);
//       setLoggedIn(true);

//       localStorage.setItem('USER_TOKEN', data.token);
//       toast.success('Logado com sucesso!');

//       Router.push('/');
//     } else {
//       toast.error(
//         'Combinação de email/senha incorreta, verifique as credenciais.',
//       );
//     }
//   };

//   const isLoggedIn = async () => {
//     const userToken = localStorage.getItem('authToken');

//     if (!userToken) {
//       setLoggedIn(false);
//     }

//     const query = `
//       query AuthContextQuery($token: String) {
//         validateToken(token: $token) {
//           isValidToken
//         }
//       }
//     `;

//     const response = await axios({
//       url: process.env.NEXT_PUBLIC_API_URL,
//       method: 'post',
//       data: {
//         query,
//         variables: { token: userToken },
//       },
//     });

//     setLoggedIn(response.data.data.validateToken.isValidToken);
//   };

//   const contextValue = {
//     user,
//     logIn,
//     isLoggedIn,
//   };

//   return <AuthContext.Provider value={contextValue} {...props} />;
// };

// const useAuth = () => React.useContext(AuthContext);

// export { AuthProvider, useAuth };
