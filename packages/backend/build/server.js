'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _cors = require('@koa/cors');

var _cors2 = _interopRequireDefault(_cors);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaGraphql = require('koa-graphql');

var _koaGraphql2 = _interopRequireDefault(_koaGraphql);

var _schema = require('./graphql/schema');

var _schema2 = _interopRequireDefault(_schema);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.listen(process.env.PORT || 9000, process.env.URL || '127.0.0.1');

(0, _database2.default)();

app.on('error', function (err) {
  return console.log(err);
});

var options = {
  origin: '*'
};

app.use((0, _cors2.default)(options));

app.use((0, _koaMount2.default)('/graphql', (0, _koaGraphql2.default)({
  schema: _schema2.default,
  graphiql: true
})));