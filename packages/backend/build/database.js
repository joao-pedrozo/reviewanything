'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initDB = function initDB() {
  _mongoose2.default.connect('mongodb+srv://root:pass@cluster0.mygcu.mongodb.net/mongocrud?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });

  _mongoose2.default.connection.once('open', function () {
    console.log('🚀 Wear your seat belt, server is up!');
  });
};

exports.default = initDB;