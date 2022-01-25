const { ListPasswordsService } = require('../services/ListPasswordsService');

class ListPasswordController {
  async handle(req,res){

    const listPasswordsService = new ListPasswordsService();

    const list = await listPasswordsService.execute(req.params, req.query);
    
    return res.status(200).send({ list });
    
  }
};

module.exports = new ListPasswordController();