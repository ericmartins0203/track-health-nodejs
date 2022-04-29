import faker from "@faker-js/faker";
import { hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { ConnectionTestJest, generateUser } from "..";

import app from "../../app";
import config from "../../configs/config";
import { UserRepository } from "../../repositories";

describe("Create user allergies", () => {
  beforeAll(async () => {
    await new ConnectionTestJest().create();
  });

  afterAll(async () => {
    await new ConnectionTestJest().clear();
    await new ConnectionTestJest().close();
  });

  beforeEach(async () => {
    await new ConnectionTestJest().clear();
  });

  it("Should return status 400 and missing authorization headers as json response", async () => {
    const allergy = {
      name: faker.word.adjective().startsWith("Sick"),
      description: faker.random.words(6),
    };

    const response = await supertest(app).post("/user/allergy").send(allergy);

    expect(response.status).toBe(401);
    expect(response.body).toStrictEqual({
      message: "Missing authorization headers",
    });
  });

  it("Should return status 400 and name is a required field as json response", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const allergy = {
      description: faker.random.words(6),
    };

    const response = await supertest(app)
      .post("/user/allergy")
      .send(allergy)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({
      error: ["name is a required field"],
    });
  });

  it("Should return status 201 and user allergy as json response", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const allergy = {
      name: faker.word.adjective(10),
      description: faker.random.words(6),
    };

    const response = await supertest(app)
      .post("/user/allergy")
      .send(allergy)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("description");
    expect(response.body.allergy).toHaveProperty("name");
  });
});
