import Model from '../models';
import Response from '../type/Response';

const User = Model.User;

module.exports = {
  create: ({ username, password }) => {
    try {
      return User
        .create({ username, password })
        .then(user => user)
        .catch(error => Response.Error(error));
    } catch (e) {
      return Response.InternalServerError();
    }
  },

  getAllUsers() {
    return User
      .all()
      .then(users => users)
      .catch(error => Response.Error(error));
  },

  getMessagesByUserID({ userId }) {
    try {
      return User
        .findAll({
          where: { id: userId },
        })
        .then(users => users)
        .catch(error => Response.Error(error));
    } catch (e) {
      return Response.InternalServerError();
    }
  },
};
