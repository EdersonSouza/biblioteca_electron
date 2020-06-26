"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.find();

    return res.json(alunos);
  }

  async show(req, res) {
    const { id } = req.params;
    const aluno = await _Aluno2.default.findById(id);

    return res.json(aluno);
  }

  async store(req, res) {
    const { body } = req;
    const aluno = await _Aluno2.default.create(body);

    return res.json(aluno);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const aluno = await _Aluno2.default.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(aluno);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await _Aluno2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new AlunoController();