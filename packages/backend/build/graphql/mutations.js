'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _bcryptjs = require('bcryptjs');

var _review = require('./types/review');

var _review2 = _interopRequireDefault(_review);

var _user = require('./types/user');

var _user2 = _interopRequireDefault(_user);

var _auth = require('./types/auth');

var _auth2 = _interopRequireDefault(_auth);

var _jsonwebtoken = require('jsonwebtoken');

var _review3 = require('../models/review');

var _review4 = _interopRequireDefault(_review3);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mutation = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addReview: {
      type: _review2.default,
      args: {
        title: { type: _graphql.GraphQLString },
        text: { type: _graphql.GraphQLString },
        byUser: { type: _graphql.GraphQLString },
        overall: { type: _graphql.GraphQLInt },
        url: { type: _graphql.GraphQLString }
      },
      resolve: function resolve(parent, args) {
        var currentDate = new Date();

        var newReview = new _review4.default({
          title: args.title,
          text: args.text,
          byUser: args.byUser,
          overall: args.overall,
          url: args.url,
          createdAt: currentDate.toDateString()
        });
        return newReview.save();
      }
    },

    addUser: {
      type: _user2.default,
      args: {
        username: { type: _graphql.GraphQLString },
        name: { type: _graphql.GraphQLString },
        email: { type: _graphql.GraphQLString },
        password: { type: _graphql.GraphQLString },
        imageUrl: { type: _graphql.GraphQLString }
      },
      resolve: async function resolve(parent, args) {
        var checkUsernameExists = await _users2.default.find({ username: args.username });

        if (checkUsernameExists.length) {
          throw new Error('Nome de usuário já existente.');
        }

        var checkEmailAlreayExists = await _users2.default.find({ email: args.email });

        if (checkEmailAlreayExists.length) {
          throw new Error('Endereço de e-mail já existente.');
        }

        var hashedPassword = await (0, _bcryptjs.hash)(args.password, 8);

        var currentDate = new Date();

        var newUser = new _users2.default({
          username: args.username,
          name: args.name,
          email: args.email,
          password: hashedPassword,
          imageUrl: args.imageUrl,
          createdAt: currentDate.toDateString()
        });

        return newUser.save();
      }
    },

    auth: {
      type: _auth2.default,
      args: {
        email: { type: _graphql.GraphQLString },
        password: { type: _graphql.GraphQLString }
      },
      resolve: async function resolve(parent, args) {
        var findUserWithEmail = await _users2.default.findOne({ email: args.email }).select('+password');

        if (!findUserWithEmail) {
          throw new Error('Combinação de e-mail e senha incorreta.');
        }

        var passwordMatched = await (0, _bcryptjs.compare)(args.password, findUserWithEmail.password);

        if (!passwordMatched) {
          throw new Error('Combinação de e-mail e senha incorreta.');
        }

        var token = (0, _jsonwebtoken.sign)({ id: findUserWithEmail.id }, '$!@A61$@!A9D', { expiresIn: '3d' });

        findUserWithEmail.password = null;

        return {
          user: findUserWithEmail,
          token: token
        };
      }
    }
  }
});

exports.default = Mutation;