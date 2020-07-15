"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _LivroController = require('../app/controllers/LivroController'); var _LivroController2 = _interopRequireDefault(_LivroController);

var _AutorController = require('../app/controllers/AutorController'); var _AutorController2 = _interopRequireDefault(_AutorController);

var _EditoraController = require('../app/controllers/EditoraController'); var _EditoraController2 = _interopRequireDefault(_EditoraController);

var _CategoriaController = require('../app/controllers/CategoriaController'); var _CategoriaController2 = _interopRequireDefault(_CategoriaController);

var _EmprestimoController = require('../app/controllers/EmprestimoController'); var _EmprestimoController2 = _interopRequireDefault(_EmprestimoController);

var _AlunoController = require('../app/controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);

var _UserController = require('../app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _auth = require('../app/auth/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = _express.Router.call(void 0, );

// usuário
routes.route("/user/:id?")
    .get(_UserController2.default.index)
    .put(_UserController2.default.update)
    .delete(_UserController2.default.destroy)
    .post( _UserController2.default.store)
routes.post("/authenticate", _UserController2.default.authenticate)





/*Livros*/

routes.get("/livros",_auth2.default.authorize, _LivroController2.default.index);
routes.post("/livro", _LivroController2.default.store);
routes.route("/livro/:id")
    .get( _LivroController2.default.show)
    .put( _LivroController2.default.update)
    .delete( _LivroController2.default.destroy)

/*Autor*/

routes.get("/autores",_AutorController2.default.index);
routes.post("/autor", _AutorController2.default.store);
routes.route("/autor/:id")
    .get( _AutorController2.default.show)
    .put( _AutorController2.default.update)
    .delete( _AutorController2.default.destroy);

/*Editoras*/

routes.get("/editoras", _EditoraController2.default.index)
routes.post("/editora", _EditoraController2.default.store);
routes.route("/editora/:id")
    .get(_EditoraController2.default.show)
    .put( _EditoraController2.default.update)
    .delete( _EditoraController2.default.destroy);

/*Categorias*/

routes.get("/categorias", _CategoriaController2.default.index);
routes.post("/categoria", _CategoriaController2.default.store);
routes.route("/categoria/:id")
    .get(_CategoriaController2.default.show)
    .put(_CategoriaController2.default.update)
    .delete(_CategoriaController2.default.destroy);


/*alunos*/

routes.get("/alunos", _AlunoController2.default.index);
routes.post("/aluno", _AlunoController2.default.store);
routes.route("/aluno/:id")
    .get( _AlunoController2.default.show)
    .put( _AlunoController2.default.update)
    .delete( _AlunoController2.default.destroy);


/*emprestimos*/

routes.get("/emprestimos", _EmprestimoController2.default.index);
routes.post("/emprestimo", _EmprestimoController2.default.store);
routes.route("/emprestimo/:id")
    .get(_EmprestimoController2.default.show)
    .put( _EmprestimoController2.default.update)
    .delete( _EmprestimoController2.default.destroy);
exports. default = routes;