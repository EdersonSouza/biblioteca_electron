"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Livro = require('../models/Livro'); var _Livro2 = _interopRequireDefault(_Livro);
var _CategoriaController = require('./CategoriaController'); var _CategoriaController2 = _interopRequireDefault(_CategoriaController);
var _AutorController = require('./AutorController'); var _AutorController2 = _interopRequireDefault(_AutorController);
var _EditoraController = require('./EditoraController'); var _EditoraController2 = _interopRequireDefault(_EditoraController);

class LivroController {
  async index(req, res) {
    const livros = await _Livro2.default.find().populate('categoria');

    return res.json(livros);
  }

  async show(req, res) {
    const { id } = req.params;
    const livro = await _Livro2.default.findById(id);

    return res.json(livro);
  }

  async store(req, res) {
    const { body } = req;
    const livro = await _Livro2.default.create(body);
    livro._autor.map(el => {
      const autor = {
        id:el,
        _livro: livro._id

      }
      _AutorController2.default.addLivros(autor)
    })
    livro.categoria.map(el => {
      const categoria = {
        id:el,
        _livro: livro._id

      }
      _CategoriaController2.default.addLivros(categoria)
    })
    if(livro._Editora!=null){
      const editora = {
        id:livro._Editora,
        livros:livro._id
      }
      _EditoraController2.default.addLivros(editora)
    }
    
    return res.json(livro);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req; 
    const li = await _Livro2.default.findById(id);
    li.categoria=body.categoria;
    console.log(li.categoria)
    const livro = await _Livro2.default.findByIdAndUpdate(id, li, {
      new: true
    });

    return res.json(livro);
  }


  async destroy(req, res) {
    const { id } = req.params;

    await _Livro2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new LivroController();