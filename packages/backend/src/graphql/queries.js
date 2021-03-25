import { GraphQLObjectType } from 'graphql';

import { review, reviews, me } from './modules/queries';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    review,
    reviews,
    me,
  },
});

export default Queries;
