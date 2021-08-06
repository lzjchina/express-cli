import util from 'util';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import logger from '../app/utils/logger';

export default () => {
  const app = express();
  
  //跨域处理
  var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  };
  app.use(allowCrossDomain);
  
  app.use(bodyParser.json()); //解析前端发送的json数据
  app.use(bodyParser.urlencoded({ extended: true })); //解析前端发表单数据
  
  //process.cwd() 当前工程目录
  // console.log(process.cwd());
  //把user.route.js关联到app实例上
  fs.readdirSync(process.cwd() + '/app/router/').forEach((file) => {
    logger.info(process.cwd() + '/app/router/' + file);
    require(process.cwd() + '/app/router/' + file)(app);
  });
  
  //启动服务
  //app.listen(3000, function(){console.log("Server started on port 3000.")});
  // 使用promise方式将app.listen导出到外边
  app.listenAsync = util.promisify(app.listen); //node8.x提供的
  
  return app; //返回promise
};
