"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nunjucks = _interopRequireDefault(require("nunjucks"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _passport = _interopRequireDefault(require("./config/passport"));

var _routes = _interopRequireDefault(require("./routes"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _authController = _interopRequireDefault(require("./api/controllers/auth.controller.js"));

var _teamController = _interopRequireDefault(require("./api/controllers/team.controller.js"));

var _awesomeGraphqlClient = require("awesome-graphql-client");

var _settings = _interopRequireDefault(require("./config/settings"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Read .env settings
_dotenv["default"].config();
/*
Fast, unopinionated, minimalist web framework for node.
https://www.npmjs.com/package/express

Initalize the express application
*/


var app = (0, _express["default"])();
/*
Node.js body parsing middleware

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
https://www.npmjs.com/package/body-parser
*/
// Parse application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // Parse application/json

app.use(_bodyParser["default"].json()); // Set default view engine

_nunjucks["default"].configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'html'); // Serve static content

app.use(_express["default"]["static"](_path["default"].join(process.cwd(), '..', 'client', 'build')));
/*
Passport
*/

(0, _passport["default"])(app);
/*
Cors parsing middleware

cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
https://www.npmjs.com/package/cors
*/

var corsOptions = {};
app.use((0, _cors["default"])(corsOptions));
/*
Add all routers to Express app

All routes (paths) are registered
*/

app.use('/', _routes["default"]);
/*

Not Found routes
*/

app.get('*', function (req, res, next) {
  var err = new Error("".concat(req.ip, " tried to access ").concat(req.originalUrl));
  err.statusCode = 301;
  next(err);
});
/*
Login Route
*/

app.post('/api/login', _authController["default"].login);
app.get('/api/getTeam', _teamController["default"].getTeam);
app.post('/graphql', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var client, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = new _awesomeGraphqlClient.AwesomeGraphQLClient({
              endpoint: "".concat(_settings["default"].GRAPHCMS_CONTENT_API),
              fetch: _nodeFetch["default"],
              fetchOptions: {
                headers: {
                  Authorization: "Bearer ".concat(_settings["default"].GRAPHCMS_ACCESS_TOKEN)
                }
              }
            });
            _context.next = 3;
            return client.request(req.body.query, req.body.variables);

          case 3:
            query = _context.sent;
            return _context.abrupt("return", res.json({
              "data": _objectSpread({}, query)
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
/* 
Fetch Team
*/

/*
Not Found routes
*/

app.get('*', function (req, res, next) {
  var err = new Error("".concat(req.ip, " tried to access ").concat(req.originalUrl));
  err.statusCode = 301;
  next(err);
});
/*
Error Handler
*/

app.use(function (err, req, res, next) {
  var error = err;
  error.statusCode = error.statusCode || 500;
  res.status(error.statusCode);
  var body = {
    url: req.url,
    error: {
      message: error.message,
      statusCode: error.statusCode
    }
  };

  if (req.accepts('html')) {
    res.render('error', body);
  } else if (req.accepts('json')) {
    res.json(body);
  } else {
    res.send('You have to accept application/json or text/html!');
  }

  next();
}); // Set the port used by the server

var PORT = process.env.PORT || 8080; // Set the Node environment

var NODE_ENV = process.env.NODE_ENV || 'development'; // Express js listen method to run project on http://localhost:3000

app.listen(PORT, function () {
  console.log("Application is running in ".concat(NODE_ENV, " mode on port ").concat(PORT));
});
//# sourceMappingURL=app.js.map