const Atricle = require("../models/atricle.js");

class AtricleController {
  static async insertAtricle(ctx) {
    let result;
    let a = new Atricle({
      title: '测试',
      content: '测试测试测试测试',
      author: 'bob'
    })
    result = await a.save();
    ctx.success({
      msg: '插入文章成功！',
      code: '0000',
    });
  }

  static async getAtricle(ctx) {
    let result;
    result = await Atricle.find()
    ctx.success({
      msg: '查询文章成功！',
      data: result,
    });
  }
}

exports = module.exports = AtricleController;
