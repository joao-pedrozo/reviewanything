'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var errorName = {
  WRONG_CREDENTIALS: 'WRONG_CREDENTIALS'
};

var errorType = {
  WRONG_CREDENTIALS: {
    message: 'Incorrect email/password combination.',
    statusCode: 401
  }
};

exports.errorName = errorName;
exports.errorType = errorType;