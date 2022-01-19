const { CallNextPasswordService } = require('../services/CallNextPasswordService');


class CallNextPasswordController {
  async handle(req, res){
    
    const callNextPasswordService = new CallNextPasswordService();

    const nextPassword = await callNextPasswordService.execute();

    return res.status(200).send({ "password": nextPassword});

  }
}

module.exports = new CallNextPasswordController();