'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthType = new _graphql.GraphQLObjectType({
  name: 'Auth',
  fields: function fields() {
    return {
      user: { type: _user2.default },
      token: { type: _graphql.GraphQLString }
    };
  }
});

exports.default = AuthType;