import { formatDateTime } from "./filter";
import path from "path";
require('winston-daily-rotate-file');

const { createLogger, format, transports } = require("winston"); //记录日志

//自定义日志格式  添加时间
const myFormat = format.printf((log) => {
  return `${formatDateTime(log.timestamp, "YYYY-MM-DD hh:mm:ss")} ${
    log.level
  }: ${log.message}`;
});

//日志级别： info普通 warn error
const logger = createLogger({
  //创建日志记录对象
  level: "info", //指定输出日志级别
  // format: winston.format.simple(), //指定输出日志格式
  format: format.combine(
    //使用组合的方式 给日志加时间
    format.timestamp(), //时间
    myFormat
  ),
  transports: [
    new transports.Console(), //把日志输出在控制台
    //指定保存的文件  .当前目录
    new transports.DailyRotateFile({
      filename: path.join(__dirname, "../../", "logs", `%DATE%.log`),
      datePattern: "YYYY-MM-DD",
      prepend: true,
      json: false,
    }),
  ],
});

export default logger;
