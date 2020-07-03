import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import Resolver from '../resolver';
import Types from '../type';

const { messages } = Resolver;
const { MessageType } = Types;

const messageMutations = {
  createMessage: {
    type: MessageType,
    args: {
      userId: {
        type: new GraphQLNonNull(GraphQLString),
      },
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (rootValue, { userId, content }) => messages.create({ userId, content }),
  },
};

export default messageMutations;

