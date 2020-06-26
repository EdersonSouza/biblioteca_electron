"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _LivroController = require('./app/controllers/LivroController'); var _LivroController2 = _interopRequireDefault(_LivroController);

var _AutorController = require('./app/controllers/AutorController'); var _AutorController2 = _interopRequireDefault(_AutorController);

var _EditoraController = require('./app/controllers/EditoraController'); var _EditoraController2 = _interopRequireDefault(_EditoraController);

var _CategoriaController = require('./app/controllers/CategoriaController'); var _CategoriaController2 = _interopRequireDefault(_CategoriaController);

var _EmprestimoController = require('./app/controllers/EmprestimoController'); var _EmprestimoController2 = _interopRequireDefault(_EmprestimoController);

var _AlunoController = require('./app/controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);

const routes = _express.Router.call(void 0, );


/*Livros*/

routes.get("/livros", _LivroController2.default.index);
routes.get("/livro/:id", _LivroController2.default.show);
routes.post("/livro", _LivroController2.default.store);
routes.put("/livro/:id", _LivroController2.default.update);
routes.delete("/livro/:id", _LivroController2.default.destroy);

/*Autor*/

routes.get("/autores", _AutorController2.default.index);
routes.get("/autor/:id", _AutorController2.default.show);
routes.post("/autor", _AutorController2.default.store);
routes.put("/autor/:id", _AutorController2.default.update);
routes.delete("/autor/:id", _AutorController2.default.destroy);

/*Editoras*/

routes.get("/editoras", _EditoraController2.default.index);
routes.get("/editora/:id",_EditoraController2.default.show);
routes.post("/editora", _EditoraController2.default.store);
routes.put("/editora/:id", _EditoraController2.default.update);
routes.delete("/editora/:id", _EditoraController2.default.destroy);

/*Categorias*/

routes.get("/categorias", _CategoriaController2.default.index);
routes.get("/categoria/:id", _CategoriaController2.default.show);
routes.post("/categoria", _CategoriaController2.default.store);
routes.put("/categoria/:id", _CategoriaController2.default.update);
routes.delete("/categoria/:id", _CategoriaController2.default.destroy);


/*alunos*/

routes.get("/alunos", _AlunoController2.default.index);
routes.get("/aluno/:id", _AlunoController2.default.show);
routes.post("/aluno", _AlunoController2.default.store);
routes.put("/aluno/:id", _AlunoController2.default.update);
routes.delete("/aluno/:id", _AlunoController2.default.destroy);


/*emprestimos*/

routes.get("/emprestimos", _EmprestimoController2.default.index);
routes.get("/emprestimo/:id", _EmprestimoController2.default.show);
routes.post("/emprestimo", _EmprestimoController2.default.store);
routes.put("/emprestimo/:id", _EmprestimoController2.default.update);
routes.delete("/emprestimo/:id", _EmprestimoController2.default.destroy);
exports. default = routes;