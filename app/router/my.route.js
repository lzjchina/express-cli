import express from "express";
import useCtrl from "../controller/user.ctrl";

const router = express.Router(); //使用express框架自带的路由 类比vue-router

export default function (app) {
  //控制器接口--需要路由  接口请求方式(get post)
  //接口定义请求方式： get post delete put
  //用户        路由地址     请求方式   控制器接口
  router.route("/user/list").get(useCtrl.list);

  //把路由配置在myexpress实例上
  app.use("/api", router);
}
