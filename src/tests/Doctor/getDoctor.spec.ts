import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { generateDoctor } from ".";
import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

import config from "../../configs/config";
import { UserRepository } from "../../repositories";
import { generateAddress } from "../Address";

describe("Get Doctor", () => {
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

  it("will return status 200 and all doctors as json response", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const address = generateAddress();

    const doctor = generateDoctor();

    const createAddress = await supertest(app)
      .post("/address")
      .send(address)
      .set("Authorization", `Bearer ${token}`);

    const data = { ...doctor, addressId: createAddress.body.address.id };

    await supertest(app)
      .post("/doctor")
      .send(data)
      .set("Authorization", `Bearer ${token}`);

    const response = await supertest(app)
      .get("/doctor")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty("id");
    expect(response.body.data[0]).toHaveProperty("email");
    expect(response.body.message).toStrictEqual(
      "Successfully retrieved all doctors"
    );
  });

  it("will return status 401 and unautorazed", async () => {
    const { secret, expiresIn } = config;
    const user = generateUser();

    const { id, email } = await new UserRepository().createUser(user);
    const token = sign({ userId: id, email }, secret, { expiresIn });

    const address = generateAddress();

    const doctor = generateDoctor();

    const createAddress = await supertest(app)
      .post("/address")
      .send(address)
      .set("Authorization", `Bearer ${token}`);

    const data = { ...doctor, addressId: createAddress.body.address.id };

    const response = await supertest(app).post("/doctor").send(data);

    expect(response.status).toBe(401);
    expect(response.body.message).toStrictEqual(
      "Missing authorization headers"
    );
  });
});
