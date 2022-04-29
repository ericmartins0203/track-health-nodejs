import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { generateAddress } from ".";
import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

import config from "../../configs/config";
import { UserRepository } from "../../repositories";

describe("Get Address", () => {
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

  it("will return status 200 and all address as response", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const address = generateAddress();

    await supertest(app)
      .post("/address")
      .send(address)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app)
      .get("/address")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty("id");
    expect(response.body.data[0]).toHaveProperty("street");
    expect(response.body.message).toStrictEqual(
      "Successfully retrieved all addresses"
    );
  });

  it("will return status 401 and unautorazed", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const address = generateAddress();

    await supertest(app)
      .post("/address")
      .send(address)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app).get("/address");

    expect(response.status).toBe(401);
    expect(response.body.message).toStrictEqual(
      "Missing authorization headers"
    );
  });
});
