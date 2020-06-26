"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Emprestimos = require('../models/Emprestimos'); var _Emprestimos2 = _interopRequireDefault(_Emprestimos);

class EmprestimoController {
  async index(req, res) {
    const emprestimos = await _Emprestimos2.default.find()
    .populate('Aluno')
    .populate('Livro');

    return res.json(autores);
  }

  async show(req, res) {
    const { id } = req.params;
    const emprestimo = await _Emprestimos2.default.findById(id);

    return res.json(emprestimo);
  }

  async store(req, res) {
    const { body } = req;
    const emprestimo = await _Emprestimos2.default.create(body);

    return res.json(emprestimo);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const emprestimo = await _Emprestimos2.default.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(emprestimo);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await _Emprestimos2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new EmprestimoController();