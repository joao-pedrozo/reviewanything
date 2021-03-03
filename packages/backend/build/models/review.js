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

var ReviewSchema = new _mongoose.Schema({
  title: String,
  text: String,
  byUser: String,
  url: String,
  overall: Number,
  createdAt: Date,
  imageUrl: String
});

exports.default = _mongoose2.default.model('Review', ReviewSchema);