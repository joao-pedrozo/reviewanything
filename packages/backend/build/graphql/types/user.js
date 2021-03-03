'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: function fields() {
    return {
      _id: { type: _graphql.GraphQLString },
      username: { type: _graphql.GraphQLString },
      name: { type: _graphql.GraphQLString },
      email: { type: _graphql.GraphQLString },
      password: { type: _graphql.GraphQLString },
      createdAt: { type: _graphql.GraphQLString },
      imageUrl: { type: _graphql.GraphQLString }
    };
  }
});

exports.default = UserType;