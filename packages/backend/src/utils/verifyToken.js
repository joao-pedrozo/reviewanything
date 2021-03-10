import { verify } from 'jsonwebtoken';

const verifyToken = (token) => {
  const parts = token.split(' ');

  if (parts.length !== 2) {
    return false;
  }
  const [scheme, splittedToken] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return false;
  }

  verify(splittedToken, '$!@A61$@!A9D', (error) => {
    if (error) {
      return false;
    }
    return true;
  });
};

export default verifyToken;
