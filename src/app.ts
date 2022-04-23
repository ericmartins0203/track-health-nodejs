import cors from "cors";
import express from "express";
import swaggerUI from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

routes(app);

export default app;
