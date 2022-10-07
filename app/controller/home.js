'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '欢迎光临我的blog';
  }
}

module.exports = HomeController;
