import logger from "../utils/logger";
import * as productService from "../service/user.service";

const operations = {
  list: (req, res) => {
    logger.info("调用用户查询接口");
    productService.findProduct("LCR（李长荣）").then((data) => {
      res.status(200).json(data);
      logger.info("调用用户查询接口结束");
    });
  },
};

export default operations;
