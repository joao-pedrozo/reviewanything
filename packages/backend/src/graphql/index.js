import { GraphQLSchema } from 'graphql';

import Mutations from './mutations';
import Queries from './queries';

export default new GraphQLSchema({ query: Queries, mutation: Mutations });
