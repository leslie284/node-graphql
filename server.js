import express from 'express';
import graphqlHTTP from 'express-graphql';
import logger from 'morgan';

import schema from './schema';

const app = express();
const dev = process.env.NODE_ENV === 'development';

app.use(logger('dev'));
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: dev,
}));

app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!');
});

const server = app.listen(3000, () => {
  const { port } = server.address();
  console.info(`\n\nExpress listen at http://localhost:${port} \n`);
});
