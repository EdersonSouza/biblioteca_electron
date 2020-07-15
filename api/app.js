"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes/routes'); var _routes2 = _interopRequireDefault(_routes);
var _database = require('./config/database'); var _database2 = _interopRequireDefault(_database);

class App {
  constructor() {
    this.express = _express2.default.call(void 0, );
    this.bodyparser();
    this.cors();
    this.database();
    this.middlewares();
    this.routes();
    this.express.use(_express2.default.static(__dirname + '/vue'))
  }

  database() {
    _mongoose2.default.connect(_database2.default.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MondoDB conectado')
  }

  bodyparser(){
    this.express.use(_bodyparser2.default.json());
    this.express.use(_bodyparser2.default.urlencoded({extended: false}));
  }

  middlewares() {
    this.express.use(_express2.default.json());
  }
  
  cors() {
    this.express.use(_cors2.default.call(void 0, {
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization","x-access-token"],
      
    }));
  }

  routes() {
    this.express.use(_routes2.default);
  }
}

exports. default = new App().express;