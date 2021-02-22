import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { hash } from 'bcryptjs';

import reviewGraphQLType from './types/review';
import userGraphQLType from './types/user';

import Review from '../models/review';
import User from '../models/users';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addReview: {
      type: reviewGraphQLType,
      args: {
        title: { type: GraphQLString },
        text: { type: GraphQLString },
        byUser: { type: GraphQLString },
        overall: { type: GraphQLInt },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        const currentDate = new Date();

        const newReview = new Review({
          title: args.title,
          text: args.text,
          byUser: args.byUser,
          overall: args.overall,
          url: args.url,
          createdAt: currentDate.toDateString(),
        });
        return newReview.save();
      },
    },

    addUser: {
      type: userGraphQLType,
      args: {
        username: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const checkUsernameExists = await User.find({ username: args.username });

        if (checkUsernameExists.length) {
          throw new Error('Nome de usuário já existente.');
        }

        const checkEmailAlreayExists = await User.find({ email: args.email });

        if (checkEmailAlreayExists.length) {
          throw new Error('Endereço de e-mail já existente.');
        }

        const hashedPassword = await hash(args.password, 8);

        const currentDate = new Date();

        const newUser = new User({
          username: args.username,
          name: args.name,
          email: args.email,
          password: hashedPassword,
          imageUrl: args.imageUrl,
          createdAt: currentDate.toDateString(),
        });

        return newUser.save();
      },
    },
  },
});

export default Mutation;
