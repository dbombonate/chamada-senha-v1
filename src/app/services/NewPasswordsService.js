const Senha = require('../models/Senha');

class NewPasswordsService {
  
  async execute({ senha_priority }){

    const password = await Senha.create({ senha_priority });
    
    return password.id;

  }
}

module.exports = { NewPasswordsService };