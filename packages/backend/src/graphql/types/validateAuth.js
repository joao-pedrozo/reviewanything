import { GraphQLObjectType, GraphQLString } from 'graphql';

const VerifyAuth = new GraphQLObjectType({
  name: 'VerifyAuth',
  fields: () => ({
    id: { type: GraphQLString },
  }),
});

export default VerifyAuth;
