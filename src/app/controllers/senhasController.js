const Senha = require('../models/Senha');

class SenhaController {

  async novaSenha(req,res) { // Cria uma senha quando cliente aciona o APP
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
      //Retornar em tela a senha informada no dispositivo
      const id = req.body.id;
      const data = await Senha.findByPk(id);
      if(data === null) return res.status(200).send({ message: 'ID do not exists.'});
      return res.status(200).send({ id: data.dataValues.id});
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: error.message });
    }
  }

  async chamaNovaSenha(req,res) {
    try {
      //Retornar a próxima senha a ser chamada
      const filaSenhas = await Senha.findAll({ where: { senha_status: false}});
      let proximaSenha = filaSenhas[0];
      return res.status(200).send({ id: proximaSenha.dataValues.id });
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: error.message });
    }
  }
};

module.exports = new SenhaController();