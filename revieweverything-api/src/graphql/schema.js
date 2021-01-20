import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import reviewType from './reviewType';
import Review from '../models/review';
import Mutations from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    review: {
      type: reviewType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Review.findById(args.id)
      }
    }
  }
})

export default new GraphQLSchema({ query: RootQuery, mutation: Mutations});