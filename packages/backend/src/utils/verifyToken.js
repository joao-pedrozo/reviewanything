import { verify } from 'jsonwebtoken';

const verifyToken = (token) => {
  const parts = token.split(' ');

  if (parts.length !== 2) {
    throw new Error('Erro de token.');
  }
  const [scheme, splittedToken] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new Error('Token mal formatado.');
  }

  verify(splittedToken, '$!@A61$@!A9D', (error) => {
    if (error) {
      throw new Error('Token inválido.');
    }
  });

  return true;
};

export default verifyToken;
