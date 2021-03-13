import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { GraphQLString } from 'graphql';
import AuthGraphQLType from '../../types/auth';

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

    const token = sign({ id: findUserWithEmail.id }, '$!@A61$@!A9D', {
      expiresIn: '3d',
    });

    findUserWithEmail.password = null;

    return {
      user: findUserWithEmail,
      token: `Bearer ${token}`,
    };
  },
};

export default Authmutation;
