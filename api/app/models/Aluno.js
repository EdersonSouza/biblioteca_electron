"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const AlunoSchema = new (0, _mongoose.Schema)({
  nome: {
    type: String,
    required: true
  },
  codigoSgde: {
    type: Number,
    required: true,
    unique:true

  },
  fones: [],
  endereco:{
    rua: { type: String },
			numero: { type: Number },
			bairro: { type: String },
			cep: { type: String },
			cidade: { type: String },
			uf: { type: String },
  },
  emprestimo:{type: _mongoose.Schema.Types.ObjectId, ref: 'Emprestimo'},
  devolvidos:[{type: _mongoose.Schema.Types.ObjectId, ref: 'Emprestimo'}],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

exports. default = _mongoose.model.call(void 0, "Aluno", AlunoSchema);