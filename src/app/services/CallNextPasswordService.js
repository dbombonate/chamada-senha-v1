const Senha = require('../models/Senha');

class CallNextPasswordService {
  async execute() {

    const filaSenhaPrioridade = await Senha.findAll({ where: { 
      senha_status: false,
      senha_priority: true
    }});

    const filaSenhaNormal = await Senha.findAll({ where: { 
      senha_status: false,
      senha_priority: false
    }});

    if(filaSenhaNormal.length === 0 && filaSenhaPrioridade.length === 0) {
      throw new Error('No password to call')
    }

    let proximaSenha = ((filaSenhaNormal.length - filaSenhaPrioridade.length) < 5) ? filaSenhaPrioridade[0] : filaSenhaNormal[0];

    proximaSenha = (filaSenhaPrioridade.length === 0) ? filaSenhaNormal[0] : proximaSenha;

    await Senha.update({ senha_status: true},{
      where: {
        id: proximaSenha.dataValues.id
      }
    });

    return proximaSenha.dataValues.id;

  }
}

module.exports = { CallNextPasswordService };