import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema';
import initDB from './database';


const app = new Koa();

app.listen(9000);

initDB();

app.on('error', (err) => {
    console.log(err)
});

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  })));

