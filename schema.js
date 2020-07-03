import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import Query from './query';
import Mutation from './mutation';

const { userQueries, messageQueries } = Query;
const { userMutations, messageMutations } = Mutation;

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
      ...messageQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
      ...messageMutations,
    }),
  }),
});
