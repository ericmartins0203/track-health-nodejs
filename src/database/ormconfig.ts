import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config();

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
} as ConnectionOptions;

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
} as ConnectionOptions;

export default process.env.NODE_ENV === "production" ? prodConfig : devConfig;
