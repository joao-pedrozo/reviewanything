'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _graphql = require('graphql');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = require('jsonwebtoken');

var _review = require('./types/review');

var _review2 = _interopRequireDefault(_review);

var _validateAuth = require('./types/validateAuth');

var _validateAuth2 = _interopRequireDefault(_validateAuth);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _review3 = require('../models/review');

var _review4 = _interopRequireDefault(_review3);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootQuery = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    review: {
      type: _review2.default,
      args: { id: { type: _graphql.GraphQLString } },
      resolve: async function resolve(parent, args) {
        var _ref = await _review4.default.aggregate([{
          $match: { _id: _mongoose2.default.Types.ObjectId(args.id) }
        }, {
          $lookup: {
            from: 'users',
            localField: 'byUser',
            foreignField: '_id',
            as: 'user'
          }
        }]),
            _ref2 = _slicedToArray(_ref, 1),
            _ref2$ = _ref2[0],
            _id = _ref2$._id,
            title = _ref2$.title,
            text = _ref2$.text,
            overall = _ref2$.overall,
            url = _ref2$.url,
            createdAt = _ref2$.createdAt,
            byUser = _ref2$.byUser,
            _ref2$$user = _slicedToArray(_ref2$.user, 1),
            user = _ref2$$user[0],
            imageUrl = _ref2$.imageUrl;

        var review = {
          _id: _id,
          title: title,
          text: text,
          overall: overall,
          url: url,
          createdAt: createdAt,
          byUser: byUser,
          user: user,
          imageUrl: imageUrl
        };

        return review;
      }
    },

    reviews: {
      type: new _graphql.GraphQLList(_review2.default),
      resolve: async function resolve() {
        var reviews = await _review4.default.aggregate([{
          $lookup: {
            from: 'users',
            localField: 'byUser',
            foreignField: '_id',
            as: 'user'
          }
        }]);

        var returnableReviews = reviews.map(function (_ref3) {
          var _id = _ref3._id,
              title = _ref3.title,
              text = _ref3.text,
              overall = _ref3.overall,
              url = _ref3.url,
              createdAt = _ref3.createdAt,
              byUser = _ref3.byUser,
              _ref3$user = _slicedToArray(_ref3.user, 1),
              user = _ref3$user[0],
              imageUrl = _ref3.imageUrl;

          return {
            _id: _id,
            title: title,
            text: text,
            overall: overall,
            url: url,
            createdAt: createdAt,
            byUser: byUser,
            user: user,
            imageUrl: imageUrl
          };
        });
        return returnableReviews;
      }
    },

    verifyAuth: {
      type: _validateAuth2.default,
      args: {
        token: { type: _graphql.GraphQLString }
      },
      resolve: function resolve(parent, args) {
        var id = void 0;

        var parts = args.token.split(' ');

        if (parts.length !== 2) {
          throw new Error('Erro de token.');
        }

        var _parts = _slicedToArray(parts, 2),
            scheme = _parts[0],
            token = _parts[1];

        if (!/^Bearer$/i.test(scheme)) {
          throw new Error('Token mal formatado.');
        }

        (0, _jsonwebtoken.verify)(token, '$!@A61$@!A9D', function (error, decoded) {
          if (error) {
            throw new Error('Token inválido.');
          }

          id = decoded.id;
        });

        return {
          id: id
        };
      }
    }
  }
});

exports.default = new _graphql.GraphQLSchema({ query: RootQuery, mutation: _mutations2.default });