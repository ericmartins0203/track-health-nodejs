"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../configs/config"));
const userRepository_1 = require("../../repositories/user/userRepository");
const loginServices = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new userRepository_1.UserRepository().findOne(email);
    if (!user) {
        throw new Error("User not found");
    }
    const match = yield bcrypt_1.default.compareSync(password, user.password);
    if (!match) {
        throw new Error("Password does not match");
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, config_1.default.secret, {
        expiresIn: config_1.default.expiresIn,
    });
    return token;
});
exports.loginServices = loginServices;
