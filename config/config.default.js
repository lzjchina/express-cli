//配置文件

const config = {
  //配置环境变量 若有环境变量则使用 否则使用默认的
  port: process.env.PORT || 3000,
  //数据库配置
  db: {
    database: "ty_shop_pre",
    username: "dev1",
    password: "123456",
    host: "127.0.0.1",
    port: 3306,
    timezone: "+08:00", //时区
    dialect: "mysql", //方言
    define: {
      timestamps: false,
    },
  },
};

export default config;
