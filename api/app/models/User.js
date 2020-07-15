"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
const UserSchema = new (0, _mongoose.Schema)({
  nomeUser: {
    type: String,
    required: true,
    unique: true
    
  },
  password: {
    type: String,
    required:true
    
  },
  
});

UserSchema.pre('save', async function(next){
  this.password = await _bcryptjs2.default.hash(this.password,10)
  next()
})

exports. default = _mongoose.model.call(void 0, "User",  UserSchema);
