import { GraphQLString } from 'graphql';
import mongoose from 'mongoose';
import ReviewGraphQLType from '~/graphql/types/review';
import Review from '~/models/review';

const ReviewQuery = {
  type: ReviewGraphQLType,
  args: { id: { type: GraphQLString } },
  async resolve(parent, args, context) {
    console.log(context);
    const [
      {
        _id,
        title,
        text,
        overall,
        url,
        createdAt,
        byUser,
        user: [user],
        imageUrl,
      },
    ] = await Review.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(args.id) },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'byUser',
          foreignField: '_id',
          as: 'user',
        },
      },
    ]);
    const review = {
      _id,
      title,
      text,
      overall,
      url,
      createdAt,
      byUser,
      user,
      imageUrl,
    };

    return review;
  },
};

export default ReviewQuery;
