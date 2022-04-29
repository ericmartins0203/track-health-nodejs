import faker from "@faker-js/faker";
import { hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { ConnectionTestJest, generateUser } from "..";

import app from "../../app";
import config from "../../configs/config";
import { UserAllergiesRepository, UserRepository } from "../../repositories";

describe("Update user allergies", () => {
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

    const response = await supertest(app)
      .patch(`/user/allergy/${faker.random.alphaNumeric(16)}`)
      .send(allergy);

    expect(response.status).toBe(401);
    expect(response.body).toStrictEqual({
      message: "Missing authorization headers",
    });
  });

  it("Should return status 400 and allergy not found as json response", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const allergy = {
      description: faker.random.alpha(15),
    };

    const response = await supertest(app)
      .patch(`/user/allergy/${faker.random.alphaNumeric(16)}`)
      .send(allergy)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({
      error: "Allergy not found",
    });
  });

  it("Should return status 200 and user allergy updated as json response", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const userAllergieToCreate = {
      user: { id },
      description: faker.random.words(6),
      allergy: { name: faker.word.adjective(10) },
    };

    const allergy = await new UserAllergiesRepository().saveUserAllergy(
      userAllergieToCreate
    );

    const newDescription = faker.random.words(6);

    const response = await supertest(app)
      .patch(`/user/allergy/${allergy.id}`)
      .send({ description: newDescription })
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.description).toStrictEqual(newDescription);
  });
});
