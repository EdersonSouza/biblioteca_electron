"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }'use strict';
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
const secret ='2514301ec89fbed758da35d85a27f042'

exports.sign = payload => _jsonwebtoken2.default.sign(payload, secret, {expiresIn:86400});

exports.decodeToken = async (token) => {
    var data = await _jsonwebtoken2.default.verify(token,secret);
    return data;
};

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        _jsonwebtoken2.default.verify(token, secret, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                req.data = decoded
                next();
            }
        });
    }
};

exports.validateSession = function (req, res, next) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

    if (!token) {
      res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
      return
    }

    _jsonwebtoken2.default.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
      }

      req.data = decoded

      next()
    })
  }