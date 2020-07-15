"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class AlunoController {
  async index(req, res) {
    try{
      const alunos = await _Aluno2.default.find();

    return res.json(alunos)
    } catch (error){
      res.status(400).send({error:"Falha ao buscar alunos"})
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try{
      const aluno = await _Aluno2.default.findById(id);

    return res.json(aluno);
    } catch (error){
      res.status(400).send({error:"Falha ao buscar aluno"})}
  }

  async store(req, res) {
    const { body } = req;
    try{
        const aluno = await _Aluno2.default.create(body);

        return res.json(aluno)
    } catch (error){
      res.status(400).send({error:"falha ao cadastrar aluno"})
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    try{
          const aluno = await _Aluno2.default.findByIdAndUpdate(id, body, {
          new: true
        });
        return res.json(aluno);
    } catch (error){
      res.status(400).send({error:"Erro ao atualizar aluno"})
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try{
      await _Aluno2.default.findByIdAndDelete(id);

      return res.send("Aluno excluido com sucesso");
    } catch (error){
      res.status(400).send({error:"Não foi possível exlcuir aluno"})
    }

  }
}

exports. default = new AlunoController();