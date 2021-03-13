import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

const ValidateAuth = new GraphQLObjectType({
  name: 'ValidateAuth',
  fields: () => ({
    isValidToken: { type: GraphQLBoolean },
  }),
});

export default ValidateAuth;
