"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const AutorSchema = new (0, _mongoose.Schema)({
  nome: {
    type: String,
    required: true
  },
  _livro:[{type: _mongoose.Schema.Types.ObjectId, ref: 'Livro'}],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

exports. default = _mongoose.model.call(void 0, "Autor", AutorSchema);