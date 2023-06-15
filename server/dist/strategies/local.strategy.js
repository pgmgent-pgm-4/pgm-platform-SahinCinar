"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _awesomeGraphqlClient = require("awesome-graphql-client");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _settings = _interopRequireDefault(require("../config/settings"));

var _utils = require("../utils");

var localStrategy = function localStrategy() {
  var queryGetUserByUsername = "\n    query getUserByUsername($username: String!) {\n      authUser(where: { username: $username }) {\n        id,\n        username,\n        email,\n        password\n      }\n    }\n  ";
  var client = new _awesomeGraphqlClient.AwesomeGraphQLClient({
    endpoint: "".concat(_settings["default"].GRAPHCMS_CONTENT_API),
    fetch: _nodeFetch["default"],
    fetchOptions: {
      headers: {
        Authorization: "Bearer ".concat(_settings["default"].GRAPHCMS_ACCESS_TOKEN)
      }
    }
  });

  _passport["default"].use('login', new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password'
  }, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password, done) {
      var _yield$client$request, authUser;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return client.request(queryGetUserByUsername, {
                username: username
              });

            case 3:
              _yield$client$request = _context.sent;
              authUser = _yield$client$request.authUser;

              if (authUser) {
                _context.next = 7;
                break;
              }

              throw new _utils.HTTPError('User does no exists', 404);

            case 7:
              if (!(password !== authUser.password)) {
                _context.next = 9;
                break;
              }

              throw new _utils.HTTPError('Incorrect Credentials', 404);

            case 9:
              done(null, authUser);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              done(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()));
};

var _default = localStrategy;
exports["default"] = _default;
//# sourceMappingURL=local.strategy.js.map