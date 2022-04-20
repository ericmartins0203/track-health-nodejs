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
exports.updateUserService = void 0;
const repositories_1 = require("../../repositories");
const updateUserService = (validate, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield new repositories_1.UserRepository().findById(userId);
        Object.assign(user, validate);
        return yield new repositories_1.UserRepository().updateUser(user);
    }
    catch (error) {
        throw new Error("error updateUser user");
    }
});
exports.updateUserService = updateUserService;
