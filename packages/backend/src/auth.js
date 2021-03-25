import jwt from 'jsonwebtoken';
import User from './models/user';
import { jwtSecret } from './config';

export async function getUser(token) {
  if (!token) return { user: null };

  try {
    const parts = token.split(' ');

    if (parts.length !== 2) {
      return { user: null };
    }

    const [scheme, splittedToken] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return false;
    }

    const { user } = jwt.verify(splittedToken, jwtSecret);

    delete user.password;

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}
