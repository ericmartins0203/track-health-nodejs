import faker from "@faker-js/faker";
import { hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { ConnectionTestJest, generateUser } from "..";

import app from "../../app";
import config from "../../configs/config";
import { UserAllergiesRepository, UserRepository } from "../../repositories";

describe("Delete user allergies", () => {
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

  it("Should return status 401 and missing authorization headers as json response", async () => {
    const response = await supertest(app).delete(
      `/user/allergy/${faker.random.alphaNumeric(16)}`
    );

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

    const response = await supertest(app)
      .delete(`/user/allergy/${faker.random.alphaNumeric(16)}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({
      message: "Allergy not found",
    });
  });

  it("Should return status 200 and a success message as json response, to delete", async () => {
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);

    const { secret, expiresIn } = config;

    const token = sign({ userId: id, email }, secret, { expiresIn });

    const userAllergieToCreate1 = {
      user: { id },
      description: faker.random.words(6),
      allergy: { name: faker.word.adjective(10) },
    };

    const { id: idAllergy } =
      await new UserAllergiesRepository().saveUserAllergy(
        userAllergieToCreate1
      );

    const response = await supertest(app)
      .delete(`/user/allergy/${idAllergy}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      message: "success",
    });
  });
});
