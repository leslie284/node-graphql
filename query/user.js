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
const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => users.getAllUsers(),
  },
};

export default userQueries;
