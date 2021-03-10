import { GraphQLObjectType } from 'graphql';

import { addReview, addUser, auth } from './modules/mutations';

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addReview,
    addUser,
    auth,
  },
});

export default Mutations;
