"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _auth = require('../auth/auth'); var jwt = _interopRequireWildcard(_auth);

class UserController {
  async index(req, res) {
      const {id} = req.params
      let user = null
      if(id){
        try{
            user = await _User2.default.findById(id);
        } catch (error){
            res.status(400).send({error:"usuario informado não existe"})
        }
         
        
      }else{
        try{
            user = await _User2.default.find();
        } catch (error) {
            res.status(400).send({error:"Falha ao buscar usuários"})
        }
         

        
      }
      return res.json(user);
  }
  async authenticate(req,res){
      const {nomeUser,password} = req.body
      try {
          const user = await _User2.default.findOne({nomeUser});
          if(!user)
            return  res.status(400).send({error: "Usuário não encontrado"});
          if(!await _bcryptjs2.default.compare(password, user.password))
            return res.status(400).send({error:"senha inválida"})
          
          const token = await jwt.sign({
            user: user
             
          });
          return res.send({user,token})
      } catch (error) {
        return res.status(400).send({error:"Algo deu errado na sua autenticação"})
        
      }
  }
  

  async store(req, res) {
    const {nomeUser} = req.body
    
    try {
      if(await _User2.default.findOne({nomeUser}))
        return res.status(400).send({error:'Já existe um usuário com esse nome, favor tente outro nome'})
      
      const user = await _User2.default.create(req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).send({error:"não foi possível cadastrar usuário"})
      
    }

    
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    if(id){
        try{
            const user = await _User2.default.findByIdAndUpdate(id, body, {
                new: true
              });
          
              return res.json(user);
        } catch (error){
            res.status(400).send({error:"falha ao atualizar usuário"})
        }
        
    }else {
        res.status(400).send({error:"iforme um id"})
    }

    
  }

  async destroy(req, res) {
    const { id } = req.params;
    if(id){
        try{
            await _User2.default.findByIdAndDelete(id);

            return res.status(200).send({sucess:"Usuário Excluído com sucesso"});
        }catch (error){
            res.status(400).send({error:"não foi possível excluir usuário"})
        }
    } else {
        res.status(400).send({error:"nenhum usuário foi informado"})
    }

    
  }
}

exports. default = new UserController();