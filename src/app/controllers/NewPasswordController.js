const { NewPasswordsService } = require('../services/NewPasswordsService');

class NewPasswordController {
  async handle(req,res){

    const { senha_priority = false } = req.body;

    const newPasswordsService = new NewPasswordsService();

    const password = await newPasswordsService.execute({ senha_priority });
    
    return res.status(201).send({ password });
    
  }
};

module.exports = new NewPasswordController();