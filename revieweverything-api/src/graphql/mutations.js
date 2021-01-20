import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import reviewGraphQLType from './reviewType';
import Review from '../models/review';

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addReview: {
            type: reviewGraphQLType,
            args: {
                title: { type: GraphQLString },
                text: { type: GraphQLString },
                by_user: { type: GraphQLString },
                overall: { type: GraphQLInt },
            },
            resolve(parent, args){
                const newReview = new Review({
                    title: args.title,
                    text: args.text,
                    by_user: args.by_user,
                    overall: args.overall,
                });
                return newReview.save();
            }
        }
    }
});

export default Mutation;

