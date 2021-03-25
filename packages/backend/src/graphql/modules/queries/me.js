import UserGraphQLType from '../../types/user';

const MeQuery = {
  type: UserGraphQLType,
  async resolve(parent, args, context) {
    return context.user;
  },
};

export default MeQuery;
