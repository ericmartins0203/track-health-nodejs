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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
const services_1 = require("../../services");
const updateUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, services_1.updateUserService)(request.validate, request.decoded.userId);
        return response.status(200).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
        return response.status(500).json({ Error: "Unexpected error." });
    }
});
exports.updateUserController = updateUserController;
