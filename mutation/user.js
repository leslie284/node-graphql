import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import Resolver from '../resolver';
import Types from '../type';

const { users } = Resolver;
const { UserType } = Types;

const userMutations = {
  createUser: {
    type: UserType,
    args: {
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (rootValue, { username, password }) => users.create({ username, password }),
  },
};

export default userMutations;

