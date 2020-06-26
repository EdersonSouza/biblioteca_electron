"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const LivroSchema = new (0, _mongoose.Schema)({
  titulo: {
    type: String,
    required: true
  },
  subtitulo: {
    type: String,
    
  },
  descricao: {
    type: String,
    required: true
  },

  total: {
    type: Number
  },

  emprestados: {
    type: Number
  },

  disponíveis: {
    type: Number
  },
  edicao:{
    type: String
  },
  volume: {
    type: Number
  },

  categoria: [{type: _mongoose.Schema.Types.ObjectId, ref: 'Categoria'}],
  
  _autor: [{type: _mongoose.Schema.Types.ObjectId, ref: 'Autor'}],
  _Editora: {type: _mongoose.Schema.Types.ObjectId, ref: 'Editora' },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

exports. default = _mongoose.model.call(void 0, "Livro", LivroSchema);