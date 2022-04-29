import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { generateAddress } from ".";
import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

import config from "../../configs/config";
import { UserRepository } from "../../repositories";

describe("Delete Address", () => {
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

  it("will return status 200 and address as json response", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const address = generateAddress();

    const createAddress = await supertest(app)
      .post("/address")
      .send(address)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app)
      .delete(`/address/${createAddress.body.address.id}`)
      .set("Authorization", `Bearer ${token}`);

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data).toHaveProperty("street");
    expect(response.body.message).toStrictEqual("Successfully deleted address");
  });

  it("will return status 400 and Address not found", async () => {
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
      .delete("/address/wrongId")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body.message).toStrictEqual("Address not found");
  });

  it("will return status 401 and unautorazed", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const address = generateAddress();

    const createAddress = await supertest(app)
      .post("/address")
      .send(address)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app).delete(
      `/address/${createAddress.body.address.id}`
    );

    expect(response.status).toBe(401);
    expect(response.body.message).toStrictEqual(
      "Missing authorization headers"
    );
  });
});
