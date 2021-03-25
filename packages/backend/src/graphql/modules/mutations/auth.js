import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { GraphQLString } from 'graphql';
import AuthGraphQLType from '../../types/auth';

import { jwtSecret } from '../../../config';

import User from '../../../models/user';

const Authmutation = {
  type: AuthGraphQLType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const findUserWithEmail = await User.findOne({
      email: args.email,
    }).select('+password');

    if (!findUserWithEmail) {
      throw new Error('Combinação de e-mail e senha incorreta.');
    }

    const passwordMatched = await compare(
      args.password,
      findUserWithEmail.password,
    );

    if (!passwordMatched) {
      throw new Error('Combinação de e-mail e senha incorreta.');
    }

    delete findUserWithEmail.password;

    const token = sign({ user: findUserWithEmail }, jwtSecret, {
      expiresIn: '3d',
    });

    return {
      user: findUserWithEmail,
      token: `Bearer ${token}`,
    };
  },
};

export default Authmutation;
