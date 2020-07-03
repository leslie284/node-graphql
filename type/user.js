import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export default UserType;

