import express from 'express';
import { schema } from './graphql/schema';
import { createHandler } from 'graphql-http/lib/use/express';

const app = express();

app.all('/graphql', createHandler({ schema }));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
