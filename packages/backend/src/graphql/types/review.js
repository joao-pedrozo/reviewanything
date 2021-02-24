import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import UserGraphQLType from './user';

const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    url: { type: GraphQLString },
    byUser: { type: GraphQLString },
    overall: { type: GraphQLInt },
    imageUrl: { type: GraphQLString },
    user: { type: UserGraphQLType },
    createdAt: { type: GraphQLString },
  }),
});

export default ReviewType;
