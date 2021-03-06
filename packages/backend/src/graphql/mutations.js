import { GraphQLObjectType } from 'graphql';

import { addReview, addUser } from './modules/mutations';

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addReview,
    addUser,
  },
});

export default Mutations;
