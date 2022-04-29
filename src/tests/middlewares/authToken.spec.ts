import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";

import { generateUser } from "..";

import config from "../../configs/config";
import { validateAuthToken } from "../../middlewares";

describe("unit test for validateToken middleware", () => {
  const mockReq: Partial<Request> = {};
  const mockRes: Partial<Response> = {};
  const mockNext: Partial<NextFunction> = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it("will return error message if missing token. Status 401 | Missing authorization headers ", () => {
    mockReq.headers = {
      authorization: undefined,
    };
    validateAuthToken(
      mockReq as Request,
      mockRes as Response,
      mockNext as NextFunction
    );

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(401);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      message: "Missing authorization headers",
    });
  });

  it("will return error message if token is malformed. Status 401 | jwt malformed", () => {
    mockReq.headers = {
      authorization: "Bearer invalidToken",
    };
    validateAuthToken(
      mockReq as Request,
      mockRes as Response,
      mockNext as NextFunction
    );

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(401);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      error: "jwt malformed",
    });
  });

  it("will return error message if token is invalid. Status 401 | Invalid token", () => {
    const invalidToken = sign({ ...generateUser() }, "fakeSecret");
    mockReq.headers = {
      authorization: `Bearer ${invalidToken}`,
    };
    validateAuthToken(
      mockReq as Request,
      mockRes as Response,
      mockNext as NextFunction
    );

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(401);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      error: "invalid signature",
    });
  });

  it("will call next function and key decoded on mockReq object", () => {
    const { secret, expiresIn } = config;
    const user = generateUser();
    const token = sign({ ...user }, secret, { expiresIn });

    mockReq.headers = {
      authorization: `Bearer ${token}`,
    };
    validateAuthToken(
      mockReq as Request,
      mockRes as Response,
      mockNext as NextFunction
    );

    expect(mockNext).toBeCalled();
    expect(mockNext).toBeCalledTimes(1);

    expect(mockReq).toHaveProperty("decoded");
  });
});
