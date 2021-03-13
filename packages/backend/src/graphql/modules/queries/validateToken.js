import { GraphQLString } from 'graphql';
import ValidateTokenGraphQLType from '../../types/validateToken';
import { verifyToken } from '../../../utils';

const VerifyAuthQuery = {
  type: ValidateTokenGraphQLType,
  args: { token: { type: GraphQLString } },
  async resolve(parent, args) {
    const isValidToken = verifyToken(args.token);
    return {
      isValidToken,
    };
  },
};

export default VerifyAuthQuery;
