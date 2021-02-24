import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';
import mongoose from 'mongoose';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import ReviewGraphQLType from './types/review';
import AuthGraphQLType from './types/auth';
import ValidateAuthGraphqlType from './types/validateAuth';

import User from '../models/users';
import Review from '../models/review';
import Mutations from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    review: {
      type: ReviewGraphQLType,
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        const [
          {
            _id,
            title,
            text,
            overall,
            url,
            createdAt,
            byUser,
            user: [user],
            imageUrl,
          },
        ] = await Review.aggregate([
          {
            $match: { _id: mongoose.Types.ObjectId(args.id) },
          },
          {
            $lookup: {
              from: 'users',
              localField: 'byUser',
              foreignField: '_id',
              as: 'user',
            },
          },
        ]);
        const review = {
          _id,
          title,
          text,
          overall,
          url,
          createdAt,
          byUser,
          user,
          imageUrl,
        };

        return review;
      },
    },

    reviews: {
      type: new GraphQLList(ReviewGraphQLType),
      async resolve() {
        const reviews = await Review.aggregate([
          {
            $lookup: {
              from: 'users',
              localField: 'byUser',
              foreignField: '_id',
              as: 'user',
            },
          },
        ]);

        const returnableReviews = reviews.map(
          ({
            _id,
            title,
            text,
            overall,
            url,
            createdAt,
            byUser,
            user: [user],
            imageUrl,
          }) => ({
            _id,
            title,
            text,
            overall,
            url,
            createdAt,
            byUser,
            user,
            imageUrl,
          }),
        );
        return returnableReviews;
      },
    },

    auth: {
      type: AuthGraphQLType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const findUserWithEmail = await User.findOne({ email: args.email }).select('+password');

        if (!findUserWithEmail) {
          throw new Error('Combinação de e-mail e senha incorreta.');
        }

        const passwordMatched = await compare(args.password, findUserWithEmail.password);

        if (!passwordMatched) {
          throw new Error('Combinação de e-mail e senha incorreta.');
        }

        const token = sign({ id: findUserWithEmail.id }, '$!@A61$@!A9D', { expiresIn: '3d' });

        findUserWithEmail.password = null;

        return {
          user: findUserWithEmail,
          token,
        };
      },
    },

    verifyAuth: {
      type: ValidateAuthGraphqlType,
      args: {
        token: { type: GraphQLString },
      },
      resolve(parent, args) {
        let id;

        const parts = args.token.split(' ');

        if (parts.length !== 2) {
          throw new Error('Erro de token.');
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
          throw new Error('Token mal formatado.');
        }

        verify(token, '$!@A61$@!A9D', (error, decoded) => {
          if (error) {
            throw new Error('Token inválido.');
          }

          id = decoded.id;
        });

        return {
          id,
        };
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery, mutation: Mutations });
