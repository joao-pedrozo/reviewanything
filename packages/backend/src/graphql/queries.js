import { GraphQLObjectType } from 'graphql';

import { review, reviews } from './modules/queries';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    review,
    reviews,
  },
});

export default Queries;
