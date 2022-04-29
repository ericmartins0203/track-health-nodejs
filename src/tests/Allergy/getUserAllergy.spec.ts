import faker from "@faker-js/faker";
import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { ConnectionTestJest, generateUser } from "..";

import app from "../../app";
import config from "../../configs/config";
import { UserAllergiesRepository, UserRepository } from "../../repositories";

describe("Get user allergies", () => {
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
    const response = await supertest(app).get("/user/allergies");

    expect(response.status).toBe(401);
    expect(response.body).toStrictEqual({
      message: "Missing authorization headers",
    });
  });

  it("Should return status 200 and empty array as json response", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const response = await supertest(app)
      .get("/user/allergies")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([]);
  });

  it("Should return status 200 and a array of user allergies as json response", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const userAllergieToCreate1 = {
      user: { id },
      description: faker.random.words(6),
      allergy: { name: faker.word.adjective(10) },
    };

    const userAllergieToCreate2 = {
      user: { id },
      description: faker.random.words(6),
      allergy: { name: faker.word.adjective(10) },
    };

    const { user: userAllergy, ...allergy } =
      await new UserAllergiesRepository().saveUserAllergy(
        userAllergieToCreate1
      );

    const { user: userAllergy2, ...allergy2 } =
      await new UserAllergiesRepository().saveUserAllergy(
        userAllergieToCreate2
      );

    const response = await supertest(app)
      .get("/user/allergies")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toContainEqual(allergy);
    expect(response.body).toContainEqual(allergy2);
  });
});
