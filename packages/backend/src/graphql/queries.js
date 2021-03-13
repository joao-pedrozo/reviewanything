import { GraphQLObjectType } from 'graphql';

import { review, reviews, validateToken } from './modules/queries';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    review,
    reviews,
    validateToken,
  },
});

export default Queries;
