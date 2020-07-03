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
const messageQueries = {
  message: {
    type: new GraphQLList(MessageType),
    args: {
      userId: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (rootValue, { userId }) => messages.getMessagesByUserID({ userId }),
  },
};

export default messageQueries;
