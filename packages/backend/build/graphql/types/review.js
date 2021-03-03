'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReviewType = new _graphql.GraphQLObjectType({
  name: 'Review',
  fields: function fields() {
    return {
      _id: { type: _graphql.GraphQLString },
      title: { type: _graphql.GraphQLString },
      text: { type: _graphql.GraphQLString },
      url: { type: _graphql.GraphQLString },
      byUser: { type: _graphql.GraphQLString },
      overall: { type: _graphql.GraphQLInt },
      imageUrl: { type: _graphql.GraphQLString },
      user: { type: _user2.default },
      createdAt: { type: _graphql.GraphQLString }
    };
  }
});

exports.default = ReviewType;