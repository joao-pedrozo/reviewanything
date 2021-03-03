'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  There is no ID. That's because Mongoose will assign
  an ID by default to all schemas.
*/

var UserSchema = new _mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  createdAt: Date,
  imageUrl: String
});

exports.default = _mongoose2.default.model('User', UserSchema);