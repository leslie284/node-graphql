
class Response {
  constructor() {
    this.StatusCode = null;
    this.Data = null;
    this.ErrorMessage = null;
  }
  Data(data) {
    return {
      Data: data,
      StatusCode: 200,
      ErrorMessage: this.ErrorMessage,
    };
  }
  Error(error) {
    return {
      Data: this.Data,
      StatusCode: 400,
      ErrorMessage: error,
    };
  }
  BadRequest() {
    return {
      Data: this.Data,
      StatusCode: 400,
      ErrorMessage: 'Bad Request',
    };
  }
  InternalServerError() {
    return {
      Data: this.Data,
      StatusCode: 500,
      ErrorMessage: null,
    };
  }
  UserDefinedError(errorMessage, statusCode) {
    return {
      Data: this.Data,
      StatusCode: statusCode,
      ErrorMessage: errorMessage,
    };
  }
}

export default Response;
