import Koa from 'koa';
import cors from '@koa/cors';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql';
import initDB from './database';

const app = new Koa();

app.use(cors({ origin: '*' }));

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  ),
);

initDB();

app.listen(process.env.PORT || 9000);

console.log('🚀 Wear your seat belt, server is up!');
