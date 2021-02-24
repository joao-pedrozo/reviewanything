const errorName = {
  WRONG_CREDENTIALS: 'WRONG_CREDENTIALS',
};

const errorType = {
  WRONG_CREDENTIALS: {
    message: 'Incorrect email/password combination.',
    statusCode: 401,
  },
};

export { errorName, errorType };
