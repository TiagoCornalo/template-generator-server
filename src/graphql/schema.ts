import { GraphQLSchema } from 'graphql';
import { RootQuery } from './rootQuery';

export const schema = new GraphQLSchema({
  query: RootQuery
});
