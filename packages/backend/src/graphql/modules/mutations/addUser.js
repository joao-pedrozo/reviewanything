import { hash } from 'bcryptjs';
import { GraphQLString } from 'graphql';
import userGraphQLType from '../../types/user';
import User from '../../../models/user';

const AddUserMutation = {
  type: userGraphQLType,
  args: {
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const checkUsernameExists = await User.find({
      username: args.username,
    });

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
};

export default AddUserMutation;
