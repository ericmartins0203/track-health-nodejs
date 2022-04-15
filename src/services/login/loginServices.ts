import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../../configs/config";
import { UserRepository } from "../../repositories/user/userRepository";

const loginServices = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await new UserRepository().findOne(email);
  if (!user) {
    throw new Error("User not found");
  }
  const match = await bcrypt.compareSync(password, user.password);
  if (!match) {
    throw new Error("Password does not match");
  }
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    config.secret,
    {
      expiresIn: config.expiresIn,
    }
  );
  return token;
};

export { loginServices };
