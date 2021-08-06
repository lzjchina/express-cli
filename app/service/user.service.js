import models from "../models";
import { Op } from "sequelize";

const product = models.ty_product;

export function findProduct(brandName) {
  return product.findAll({
    where: {
      brand_name: {
        [Op.like]: "%l%",
      },
    },
  }); //findOne--User模型自带的
}
