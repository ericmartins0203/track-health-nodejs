/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";
import { existsSync } from "fs";
import { unlink } from "fs/promises";
import path from "path";
import { createConnection, getConnection } from "typeorm";

import dbOptions from "../database/ormconfig";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";

const generateUser = (): IUserInterface => {
  const name = faker.name.firstName().toLowerCase();
  const email = faker.internet.email(name).toLowerCase();
  const birthDate = faker.date.past();
  const password = faker.random.alpha(5);
  const sex = faker.random.word().toLocaleLowerCase();
  const gender = faker.random.word().toLocaleLowerCase();

  return {
    name,
    email,
    birthDate,
    password,
    sex,
    gender,
  };
};

class ConnectionTestJest {
  dbPath: string;

  constructor() {
    this.dbPath = path.join(__dirname, "../../dbTest.sqlLite");
  }

  create = async () => {
    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }

    await createConnection(dbOptions);
  };

  close = async () => {
    await getConnection(dbOptions.name).close();

    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }
  };

  clear = async () => {
    const connection = getConnection(dbOptions.name);
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  };
}

export { ConnectionTestJest, generateUser };
