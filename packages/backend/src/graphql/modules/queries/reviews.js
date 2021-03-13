import { GraphQLList } from 'graphql';
import ReviewGraphQLType from '~/graphql/types/review';
import Review from '~/models/review';

const ReviewsQuery = {
  type: new GraphQLList(ReviewGraphQLType),
  async resolve() {
    const reviews = await Review.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'byUser',
          foreignField: '_id',
          as: 'user',
        },
      },
    ]);

    const returnableReviews = reviews.map(
      ({
        _id,
        title,
        text,
        overall,
        url,
        createdAt,
        byUser,
        user: [user],
        imageUrl,
      }) => ({
        _id,
        title,
        text,
        overall,
        url,
        createdAt,
        byUser,
        user,
        imageUrl,
      }),
    );
    return returnableReviews;
  },
};

export default ReviewsQuery;
