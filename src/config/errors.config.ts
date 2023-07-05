const errors = {
  internalErrorExample: {
    error: true,
    serverTime: new Date(),
    message: 'this is a custom error message - InternalServerErrorException',
  },
  simpleErrorExample: {
    error: true,
    serverTime: new Date(),
    message: 'this is a simple error',
  },
  httpErrorExample: {
    error: true,
    serverTime: new Date(),
    message: 'this is a custom error message',
  },
};

export default errors;
