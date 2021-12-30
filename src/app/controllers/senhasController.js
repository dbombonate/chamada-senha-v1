const { Op } = require('sequelize');
const Senha = require('../models/Senha');

class SenhaController {

  async novaSenha(req,res) {
    try {
      const novaSenha = await Senha.create(req.body);
      return res.status(200).send({ senha: novaSenha.id });
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: error.message });
    }
  };

  async chamaSenhaDigitada(req,res) {
    try {
      const id = req.body.id;
      const data = await Senha.findByPk(id);
      if(data === null) return res.status(200).send({ message: 'ID do not exists.'});
      //Busca por senha prioridade pendente
      const senhaPrioridadePendente = await Senha.findAll({ where: { 
        senha_status: false,
        senha_priority: true,
      }});
      //Busca por senha normal pendente
      const senhaNormalPendente = await Senha.findAll({ where: { 
        senha_status: false,
        id: {
          [Op.lt]: id
        }
      }});
      if(senhaNormalPendente || senhaPrioridadePendente) return res.status(403).send({ message: 'There are other pass to call before'});
      return res.status(200).send({ senha: data.dataValues.id});
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: error.message });
    }
  }

  async chamaNovaSenha(req,res) {
    try {
      const filaSenhas = await Senha.findAll({ where: { senha_status: false}});
      let proximaSenha = filaSenhas[0];
      return res.status(200).send({ senha: proximaSenha.dataValues.id });
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: error.message });
    }
  }
};

module.exports = new SenhaController();