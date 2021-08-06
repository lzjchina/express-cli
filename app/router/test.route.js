import express from "express";
import logger from "../utils/logger";

const router = express.Router(); //使用express框架自带的路由 类比vue-router

export default function (app) {
  //控制器接口--需要路由  接口请求方式(get post)
  //接口定义请求方式： get post delete put
  //用户        路由地址     请求方式   控制器接口
  router.route("/testRR").get((req, res) => {
    logger.info("调用用户查询接口");
    let users = [{ name: "测试路由添加" }];
    //给浏览器返回数据
    // res.status(200).send(users)
    res.status(200).json(users);
    logger.info("调用用户查询接口结束");
  });

  //权限

  //合同

  //把路由配置在myexpress实例上
  app.use("/api", router);
}
