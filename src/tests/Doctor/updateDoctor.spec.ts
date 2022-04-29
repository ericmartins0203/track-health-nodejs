import { sign } from "jsonwebtoken";
import supertest from "supertest";

import { generateDoctor, generateUpdateDoctor } from ".";
import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

import config from "../../configs/config";
import { UserRepository } from "../../repositories";
import { generateAddress } from "../Address";

describe("Update Doctor", () => {
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

  it("will return status 200 and return the updated doctor as json response", async () => {
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

    const createDoctor = await supertest(app)
      .post("/doctor")
      .send(data)
      .set("Authorization", `Bearer ${token}`);

    const UpdateDoctorData = generateUpdateDoctor();

    const response = await supertest(app)
      .patch(`/doctor/${createDoctor.body.doctor.id}`)
      .send(UpdateDoctorData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.type).toStrictEqual(UpdateDoctorData.type);
    expect(response.body.message).toStrictEqual("Successfully updated doctor");
  });

  it("will return status 400 and return not found", async () => {
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

    const UpdateDoctorData = generateUpdateDoctor();

    const response = await supertest(app)
      .patch(`/doctor/wrongId`)
      .send(UpdateDoctorData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body.message).toStrictEqual("Doctor not found");
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

    const createDoctor = await supertest(app)
      .post("/doctor")
      .send(data)
      .set("Authorization", `Bearer ${token}`);

    const UpdateDoctorData = generateUpdateDoctor();

    const response = await supertest(app)
      .patch(`/doctor/${createDoctor.body.doctor.id}`)
      .send(UpdateDoctorData);

    expect(response.status).toBe(401);
    expect(response.body.message).toStrictEqual(
      "Missing authorization headers"
    );
  });
});
