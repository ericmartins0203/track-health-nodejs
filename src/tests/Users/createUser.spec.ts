import supertest from "supertest";

import app from "../../app";

import { ConnectionTestJest, generateUser } from "..";

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

  it("will return status 200 and user as json response", async () => {
    const response = await supertest(app)
      .post("/user/register")
      .send(generateUser());

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("gender");
  });

  it("will return status 400 and missing fields as json response, to create user", async () => {
    const newUser = generateUser();
    const { birthDate, ...user } = newUser;

    const response = await supertest(app).post("/user/register").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({
      error: ["birthDate is a required field"],
    });
  });
});
