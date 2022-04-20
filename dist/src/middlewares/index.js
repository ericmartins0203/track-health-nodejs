"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthToken = exports.validateShape = void 0;
const validateAuthToken_1 = __importDefault(require("./validate/validateAuthToken"));
exports.validateAuthToken = validateAuthToken_1.default;
const validateShape_1 = require("./validate/validateShape");
Object.defineProperty(exports, "validateShape", { enumerable: true, get: function () { return validateShape_1.validateShape; } });
