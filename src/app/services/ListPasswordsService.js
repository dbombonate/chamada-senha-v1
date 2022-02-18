const Password = require('../models/Password');

class ListPasswordsService {
  
  async execute(param, query){ 

    let list;
    let option = param.option;
    let type = query.type;
    
    let options = ['listAll', 'listLast'];
    let types = ['priority', 'normal', 'all'];
    
    if (options.indexOf(option) < 0){
      if (type) {
        if (types.indexOf(type) < 0) {
          throw new Error("Bad Address");
        }
      } 
      throw new Error("Bad Address");
    }

    if (option === 'listAll' && type === 'priority') {
      list = await Password.findAll({
        where: {
          senha_status: true,
          senha_priority: true
        }
      });

      return list;
    }

    if (option === 'listAll' && type === 'normal') {
      list = await Password.findAll({
        where: {
          senha_status: true,
          senha_priority: false
        }
      });

      return list;
    }

    if (option === 'listLast') {
      list = await Password.findOne({
        where: {
          senha_status: true
        },
        order: [[ 'updatedAt', 'DESC']]
      });

      return list;
    }

    if (option === 'listAll' && type === 'all') {
      list = await Password.findAll({
        where: {
          senha_status: true,
        },
        order: [[ 'updatedAt', 'ASC']]
      });
      
      return list;
    }

    if (!list) {
      throw new Error("Something is wrong when consulting Database.");
    }
  }
}

module.exports = { ListPasswordsService };