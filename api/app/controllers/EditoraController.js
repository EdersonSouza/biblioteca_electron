"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Editora = require('../models/Editora'); var _Editora2 = _interopRequireDefault(_Editora);

class EditoraController {
  async index(req, res) {
    const editoras = await _Editora2.default.find();

    return res.json(editoras);
  }

  async show(req, res) {
    const { id } = req.params;
    const editora = await _Editora2.default.findById(id);

    return res.json(editora);
  }

  async store(req, res) {
    const { body } = req;
    const editora = await _Editora2.default.create(body);

    return res.json(editora);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const editora = await _Editora2.default.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(editora);
  }

  async addLivros(body) {
    let id = body.id
    console.log(' estou aqui '+ id)
    const editora = await _Editora2.default.findById(id);
    editora.livros.push(body.livros);
    const at = await _Editora2.default.findByIdAndUpdate(id, editora, {
      new: true
    });
    console.log(at)
   
  }

  async destroy(req, res) {
    const { id } = req.params;

    await _Editora2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new EditoraController();