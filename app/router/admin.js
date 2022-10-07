'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //创建中间件
  let adminauth = app.middleware.adminauth;
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.post(
    '/admin/getTypeInfo',
    adminauth,
    controller.admin.main.getTypeInfo
  );
};
