'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('blog_content');
    this.ctx.body = 'api接口......';
  }

  async getArticleList() {
    //注意sql语句，没打逗号的语句一定要空格
    let sql =
      'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      'article.addTime as addTime ,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM react_blog.article LEFT JOIN react_blog.type ON article.type_id=type.id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
    //获取url参数id并处理
    let id = this.ctx.params.id;
    id = id[id.length - 1];

    let sql =
      'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      'article.article_content as article_content ,' +
      'article.addTime as addTime ,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM react_blog.article LEFT JOIN react_blog.type ON article.type_id=type.id ' +
      `WHERE react_blog.article.id=${id}`;

    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = HomeController;
