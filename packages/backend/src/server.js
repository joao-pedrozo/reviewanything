import Koa from 'koa';
import cors from '@koa/cors';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql';
import initDB from './database';

import { getUser } from './auth';

const app = new Koa();

app.use(cors({ origin: '*' }));

// app.use(
//   mount(
//     '/graphql',
//     graphqlHTTP({
//       schema,
//       graphiql: true,
//     }),
//   ),
// );

app.use(
  mount(
    '/graphql',
    graphqlHTTP(async (req) => {
      const { user } = await getUser(req.header.authorization);
      return {
        schema,
        graphiql: true,
        context: {
          user,
        },
      };
    }),
  ),
);

initDB();

app.listen(process.env.PORT || 9000);

console.log('🚀 Wear your seat belt, server is up!');
