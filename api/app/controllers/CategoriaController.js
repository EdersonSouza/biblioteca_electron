"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Categoria = require('../models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);

class CategoriaController {
  async index(req, res) {
    const categorias = await _Categoria2.default.find();

    return res.json(categorias);
  }

  async show(req, res) {
    const { id } = req.params;
    const categoria = await _Categoria2.default.findById(id);

    return res.json(categoria);
  }

  async store(req, res) {
    const { body } = req;
    const categoria = await _Categoria2.default.create(body);

    return res.json(categoria);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const categoria = await _Categoria2.default.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(categoria);
  }

  async addLivros(body) {
    let id = body.id
    console.log(' estou aqui '+ id)
    const categoria = await _Categoria2.default.findById(id);
    categoria.livros.push(body._livro);
    const at = await _Categoria2.default.findByIdAndUpdate(id, categoria, {
      new: true
    });
    console.log(at)
   
  }

  async destroy(req, res) {
    const { id } = req.params;

    await _Categoria2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new CategoriaController();