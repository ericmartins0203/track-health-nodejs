"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    secret: process.env.SECRET_KEY || "Secret key",
    expiresIn: process.env.EXPIRES_IN || "1h",
};
exports.default = config;
