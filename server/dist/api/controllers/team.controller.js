"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _awesomeGraphqlClient = require("awesome-graphql-client");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _settings = _interopRequireDefault(require("../../config/settings"));

var getTeam = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var queryGetTeam, client, _yield$client$request, team;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryGetTeam = "\n  \n    query getUserByUsername($username: String!) {\n        authUser(where: { username: \"Miranda.Blanda\" }) {\n          id,\n          username,\n          email,\n          password\n        }\n      }\n  ";
            client = new _awesomeGraphqlClient.AwesomeGraphQLClient({
              endpoint: "".concat(_settings["default"].GRAPHCMS_CONTENT_API),
              fetch: _nodeFetch["default"],
              fetchOptions: {
                headers: {
                  Authorization: "Bearer ".concat(_settings["default"].GRAPHCMS_ACCESS_TOKEN)
                }
              }
            });
            _context.next = 4;
            return client.request(queryGetTeam);

          case 4:
            _yield$client$request = _context.sent;
            team = _yield$client$request.team;
            console.log(team);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTeam(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  getTeam: getTeam
};
exports["default"] = _default;
//# sourceMappingURL=team.controller.js.map