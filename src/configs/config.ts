import dotenv from "dotenv";

import IConfig from "../@types/configInterface";

dotenv.config();

const config: IConfig = {
  secret: process.env.SECRET_KEY || "Secret key",
  expiresIn: process.env.EXPIRES_IN || "1h",
};

export default config;
