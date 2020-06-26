"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const CategoriaSchema = new (0, _mongoose.Schema)({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  livros:[{type: _mongoose.Schema.Types.ObjectId, ref: 'Livro' }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

exports. default = _mongoose.model.call(void 0, "Categoria", CategoriaSchema);