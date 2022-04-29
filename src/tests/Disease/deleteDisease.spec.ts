import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { generateDisease } from ".";
import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

import config from "../../configs/config";
import { UserRepository } from "../../repositories";

describe("Get Diseases", () => {
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

  it("will return status 200 and deleted message as json response", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const disease = generateDisease();

    const responseDisease = await supertest(app)
      .post("/disease")
      .send(disease)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app)
      .delete(`/disease/${responseDisease.body.disease.id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    // expect(response.body[0]).toHaveProperty("name");
  });

  it("will return status 401 and unautorazed", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const disease = generateDisease();

    const responseDisease = await supertest(app)
      .post("/disease")
      .send(disease)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app).delete(
      `/disease/${responseDisease.body.id}`
    );

    expect(response.status).toBe(401);
    expect(response.body.message).toStrictEqual(
      "Missing authorization headers"
    );
  });

  it("will return status 404 and not found", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const response = await supertest(app)
      .delete("/disease/wrongId")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body.message).toStrictEqual("Disease not found");
  });
});
