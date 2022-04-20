"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const devConfig = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.*"],
    migrations: ["src/migrations/**/*.*"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
    },
};
const prodConfig = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: false,
    ssl: { rejectUnauthorized: false },
    entities: ["./dist/src/entities/**/*.*"],
    migrations: ["./dist/src/migrations/**/*.*"],
    cli: {
        entitiesDir: "./dist/src/entities",
        migrationsDir: "./dist/src/migrations",
    },
};
exports.default = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
