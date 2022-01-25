const Senha = require('../models/Senha');

class ListPasswordsService {
  
  async execute(param, query){ 

    let list;

    if (param.option === 'lastCalled' && query.priority) {
      list = await Senha.findAll({
        where: {
          senha_status: true,
          senha_priority: true
        }
      });
      return list;
    }

    list = await Senha.findAll({
      where: {
        senha_status: true,
      }
    });

    if (!list) {
      throw new Error("Something is wrong when consulting Database.");
    }

    return list;
  }
}

module.exports = { ListPasswordsService };