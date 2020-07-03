import Model from '../models';
import Response from '../type/Response';

const res = new Response();

const Message = Model.Message;

module.exports = {
  create: ({ content, userId }) => {
    try {
      return Message
        .create({ content, userId })
        .then(message => message)
        .catch(error => Response.Error(error));
    } catch (e) {
      return Response.InternalServerError();
    }
  },

  getMessagesByUserID: (req) => {
    const { userId } = req;
    try {
      return Message.findAll({
        where: { userId },
      })
        .then(messages => messages)
        .catch(error => Response.Error(error));
    } catch (e) {
      return Response.InternalServerError();
    }
  },
};
