"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const EmprestimoSchema = new (0, _mongoose.Schema)({
 
  aluno:{type: _mongoose.Schema.Types.ObjectId, ref: 'Aluno' },
  livro:{type: _mongoose.Schema.Types.ObjectId, ref: 'Livro' },
  ativo:{type:Boolean, default:true},
  devolucao: {
    type:Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

exports. default = _mongoose.model.call(void 0, "Emprestimo", EmprestimoSchema);