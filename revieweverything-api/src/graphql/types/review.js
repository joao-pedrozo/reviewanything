import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import UserGraphQLType from './user';

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        _id: { type: GraphQLString },
        title: { type: GraphQLString },
        text: { type: GraphQLString },
        url: { type: GraphQLString },
        by_user: { type: GraphQLString },
        overall: { type: GraphQLInt },
        user: { type: UserGraphQLType }
    })
});

export default ReviewType;