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
exports.UserRepository = void 0;
/* eslint-disable no-return-await */
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/user/User");
class UserRepository {
    constructor() {
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () { return this.ormRepository.save(user); });
        this.findOne = (email) => __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository
                .createQueryBuilder("user")
                .where("user.email = :email", { email })
                .leftJoinAndSelect("user.userAllergies", "userAllergies")
                .leftJoinAndSelect("userAllergies.allergy", "allergy")
                .leftJoinAndSelect("user.userDiseases", "userDiseases")
                .leftJoinAndSelect("userDiseases.disease", "diseases")
                .select([
                "user",
                "userDiseases",
                "diseases.name",
                "userAllergies",
                "allergy.name",
            ])
                .getOne();
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository
                .createQueryBuilder("user")
                .addSelect("user.password")
                .where("user.id = :id", { id })
                .getOne();
        });
        this.updateUser = (user) => __awaiter(this, void 0, void 0, function* () { return this.ormRepository.save(user); });
        this.ormRepository = (0, typeorm_1.getRepository)(User_1.User);
    }
}
exports.UserRepository = UserRepository;
