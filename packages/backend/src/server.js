import Koa from 'koa';
import cors from '@koa/cors';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema';
import initDB from './database';

const app = new Koa();

app.listen(9000);

initDB();

app.on('error', (err) => {
  console.log(err);
});

app.use(cors());

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  ),
);
