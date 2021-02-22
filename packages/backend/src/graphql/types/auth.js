import { GraphQLObjectType, GraphQLString } from 'graphql';

import UserGraphQLType from './user';

const AuthType = new GraphQLObjectType({
  name: 'Auth',
  fields: () => ({
    user: { type: UserGraphQLType },
    token: { type: GraphQLString },
  }),
});

export default AuthType;
