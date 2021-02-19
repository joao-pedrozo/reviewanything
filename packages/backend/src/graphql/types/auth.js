import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

const AuthType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    auth: { type: GraphQLBoolean },
    token: { type: GraphQLString },
  }),
});

export default AuthType;
