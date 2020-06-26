"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Autor = require('../models/Autor'); var _Autor2 = _interopRequireDefault(_Autor);

class AutorController {
  async index(req, res) {
    const autores = await _Autor2.default.find();

    return res.json(autores);
  }

  async show(req, res) {
    const { id } = req.params;
    const autor = await _Autor2.default.findById(id);

    return res.json(autor);
  }

  async store(req, res) {
    const { body } = req;
    const autor = await _Autor2.default.create(body);

    return res.json(autor);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req; 
    const li = await _Autor2.default.findById(id);
    li._livro.push(body._livro);
    console.log(li._livro)
    const autor = await _Autor2.default.findOneAndUpdate(id, li, {
      new: true
    });

    return res.json(autor);
  }

  async addLivros(body) {
    let id = body.id
    console.log(' estou aqui '+ id)
    const autor = await _Autor2.default.findById(id);
    autor._livro.push(body._livro);
    const at = await _Autor2.default.findByIdAndUpdate(id, autor, {
      new: true
    });
    console.log(at)
   
  }


  async destroy(req, res) {
    const { id } = req.params;

    await _Autor2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new AutorController();