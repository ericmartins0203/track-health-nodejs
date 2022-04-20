"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("./app"));
const ormconfig_1 = __importDefault(require("./database/ormconfig"));
const PORT = process.env.PORT || "3000";
(0, typeorm_1.createConnection)(ormconfig_1.default)
    .then(() => {
    console.log("Database connected");
    app_1.default.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
    });
})
    .catch((error) => console.log(error));
