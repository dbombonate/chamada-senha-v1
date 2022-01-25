const Password = require('../models/Password');

class NewPasswordsService {
  
  async execute({ senha_priority }){

    const password = await Password.create({ senha_priority });

    if(!password){
      throw new Error('Something went wrong during saving on Database');
    }
    
    return password.id;

  }
}

module.exports = { NewPasswordsService };