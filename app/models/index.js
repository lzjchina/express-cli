import fs from 'fs'; //node文件系统模块
import path from 'path'; //node文件路径模块
import Sequelize from 'sequelize'; //三方
import config from '../../config/config.default';
import logger from '../utils/logger';

const db = {};
const con = config.db;
let sequelize; //连接数据库

try {
  //连接db
  sequelize = new Sequelize(con.database, con.username, con.password, con);
  logger.info('数据库连接成功');
} catch (e) {
  logger.error('数据库连接失败');
  throw e;
}

//找到数据模型文件, 排除index.js
fs.readdirSync(__dirname) //__dirname当前目录
  .filter((f) => {
    return f !== 'index.js';
  })
  .forEach((f) => {
    //通过sequelize将模型文件导入 f--绝对路径
    const model = sequelize.import(path.join(__dirname, f));
    db[model.name] = model;
  });

module.exports = db;
