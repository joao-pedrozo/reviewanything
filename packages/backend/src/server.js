import Koa from 'koa';
import cors from '@koa/cors';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql/schema';
import initDB from './database';

const app = new Koa();

app.listen(process.env.PORT || 9000, process.env.URL || '127.0.0.1');

initDB();

app.on('error', (err) => console.log(err));

const options = {
  origin: '*',
};

app.use(cors(options));

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  ),
);
