import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const ReviewType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
});

export default ReviewType;