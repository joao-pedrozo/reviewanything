import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import reviewGraphQLType from './types/review';
import Review from '../models/review';

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
                url: { type: GraphQLString }
            },
            resolve(parent, args){
                const currentDate = new Date();

                const newReview = new Review({
                    title: args.title,
                    text: args.text,
                    byUser: args.byUser,
                    overall: args.overall,
                    url: args.url,
                    created_at: currentDate.toDateString(),
                });
                return newReview.save();
            }
        }
    }
});

export default Mutation;

