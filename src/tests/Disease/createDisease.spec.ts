import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { generateDisease } from ".";
import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

import config from "../../configs/config";
import { UserRepository } from "../../repositories";

describe("Create Disease", () => {
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

  it("will return status 201 and disease as json response", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const disease = generateDisease();

    const response = await supertest(app)
      .post("/disease")
      .send(disease)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body.disease).toHaveProperty("id");
    expect(response.body.disease).toHaveProperty("name");
  });

  it("will return status 400", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const disease = generateDisease();

    await supertest(app)
      .post("/disease")
      .send(disease)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app)
      .post("/disease")
      .send(disease)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual("Unexpected error");
  });

  it("will return status 401 and unautorazed", async () => {
    const disease = generateDisease();

    const response = await supertest(app).post("/disease").send(disease);

    expect(response.status).toBe(401);
    expect(response.body.message).toStrictEqual(
      "Missing authorization headers"
    );
  });
});
