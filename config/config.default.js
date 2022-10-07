/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1662645038257_1595';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3305',
      // username
      user: 'root',
      // password
      password: 'gotofuture',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };

  config.cors = {
    //后面部署之后，申请域名后，需要把域名配置到这里，这样CORS的安全机制才有效（*有安全隐患）
    origin: 'http://localhost:3000',
    credentials: true,
    allowMethods: 'GRT,POST,DELETE,PUT,HEAD,PATCH,OPTIONS',
  };

  return {
    ...config,
    ...userConfig,
  };
};
