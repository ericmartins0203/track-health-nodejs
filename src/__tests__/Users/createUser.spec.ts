import { verify } from "jsonwebtoken";
import supertest from "supertest";

import app from "../../app";
import config from "../../configs/config";
import { UserRepository } from "../../repositories";

import { ConnectionTestJest } from "..";

// @ts-ignore
describe("Create User", () => {
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

  it("will return status 200 and user token as json response", async () => {
    // const { email, password } = await new UserRepository().createUser({
    //   name: "test",
    //   email: "test@mail.com",
    //   birthDate: new Date(),
    //   password: "123456",
    // });

    const user = await supertest(app).post("/user/register").send({
      name: "test",
      email: "test@mail.com",
      birthDate: new Date(),
      password: "123456",
    });

    const response = await supertest(app)
      .post("/login")
      .send({ email: "test@mail.com", password: "123456" });

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");

    expect(verify(response.body.token, config.secret)).toBeTruthy();
    expect(verify(response.body.token, config.secret)).toEqual(
      expect.objectContaining({ email: "test@mail.com" })
    );
  });
  // beforeEach(() => {
  //   const user = CreateUserService({
  //     name: "test",
  //     email: "test@mail.com",
  //     birthDate: new Date(),
  //     password: "123456",
  //   });
  //   console.log(user);
  //   expect(user).toHaveProperty("id");
  // });
});
