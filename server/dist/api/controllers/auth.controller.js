"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _settings = _interopRequireDefault(require("../../config/settings"));

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var login = function login(req, res, next) {
  _passport["default"].authenticate('login', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, user, info) {
      var userPayload, token, authenticated;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(err || !user)) {
                _context.next = 3;
                break;
              }

              throw err;

            case 3:
              userPayload = {
                id: user.id,
                username: user.username,
                email: user.email
              };
              token = _jsonwebtoken["default"].sign({
                user: userPayload
              }, _settings["default"].JWT_SECRET, {
                expiresIn: _settings["default"].JWT_EXPIRE
              });
              authenticated = _objectSpread(_objectSpread({}, userPayload), {}, {
                token: token
              });
              return _context.abrupt("return", res.status(200).json(authenticated));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              return _context.abrupt("return", (0, _utils.handleHTTPError)(_context.t0, next));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }())(req, res, next);
};

var logout = function logout(req, res, next) {
  try {
    req.logout();
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } // destroy session data


      req.session = null;
    });
  } catch (error) {
    (0, _utils.handleHTTPError)(error, next);
  }
};

var _default = {
  login: login,
  logout: logout
};
exports["default"] = _default;
//# sourceMappingURL=auth.controller.js.map