import express from "./config/express";
import config from "./config/config.default";
import logger from "./app/utils/logger";

const app = express();

app.listenAsync(config.port).then((res) => {
  logger.info("Server started on port " + config.port);
});
