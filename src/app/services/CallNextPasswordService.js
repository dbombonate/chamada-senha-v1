const Password = require('../models/Password');

class CallNextPasswordService {
  async execute() {

    const filaSenhaPrioridade = await Password.findAll({ where: { 
      senha_status: false,
      senha_priority: true
    }});

    const filaSenhaNormal = await Password.findAll({ where: { 
      senha_status: false,
      senha_priority: false
    }});

    if(filaSenhaNormal.length === 0 && filaSenhaPrioridade.length === 0) {
      throw new Error('No password to call')
    }

    let proximaSenha = ((filaSenhaNormal.length - filaSenhaPrioridade.length) < 5) ? filaSenhaPrioridade[0] : filaSenhaNormal[0];

    proximaSenha = (filaSenhaPrioridade.length === 0) ? filaSenhaNormal[0] : proximaSenha;

    await Password.update({ senha_status: true},{
      where: {
        id: proximaSenha.dataValues.id
      }
    });

    return proximaSenha.dataValues.id;

  }
}

module.exports = { CallNextPasswordService };