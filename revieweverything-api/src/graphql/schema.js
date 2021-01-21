import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import ReviewGraphQLType from './types/review';
import Review from '../models/review';
import Mutations from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    review: {
      type: ReviewGraphQLType,
      args: { id: { type: GraphQLString }},
       async resolve(parent, args) {
        const [{ _id, title, text, overall, url, created_at, by_user, user: [user] }] = await Review.aggregate([{
           $match : { _id : mongoose.Types.ObjectId(args.id) } }, { 
           $lookup: { from: 'users', localField: 'by_user', foreignField: '_id', as: 'user'  } 
          }
        ]
      )
      const review = {
        _id,
        title,
        text,
        overall,
        url,
        created_at,
        by_user,
        user,
      }

      return review;
      }
    },
    
    reviews: {
      type: new GraphQLList(ReviewGraphQLType),
      async resolve(parent, args){
        const reviews = await Review.aggregate([{
          $lookup: {
            from: 'users',
            localField: 'by_user',
            foreignField: '_id',
            as: 'user'
          }
        }
      ]);

      const returnableReviews = reviews.map(({ _id, title, text, overall, url, created_at, by_user, user: [user] }) => {
        return {
          _id,
          title,
          text,
          overall,
          url,
          created_at,
          by_user,
          user
        }
      });
      return returnableReviews;
      }
    }
  }
})

export default new GraphQLSchema({ query: RootQuery, mutation: Mutations});