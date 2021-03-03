'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var VerifyAuth = new _graphql.GraphQLObjectType({
  name: 'VerifyAuth',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString }
    };
  }
});

exports.default = VerifyAuth;