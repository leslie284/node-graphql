import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export default MessageType;

