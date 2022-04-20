"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
exports.default = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: false,
    entities: [path_1.default.join(__dirname, "../entities/**/*.*")],
    migrations: [path_1.default.join(__dirname, "../migrations/**/*.*")],
    cli: {
        entitiesDir: path_1.default.join(__dirname, "../entities"),
        migrationsDir: path_1.default.join(__dirname, "../migrations"),
    },
};
