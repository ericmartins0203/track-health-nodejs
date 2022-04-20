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
exports.firstCommit1650485247826 = void 0;
class firstCommit1650485247826 {
    constructor() {
        this.name = "firstCommit1650485247826";
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "gender" character varying, "sex" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "profileImage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "REL_5f1aea3730b5a2a4600bd7ff66" UNIQUE ("userId"), CONSTRAINT "PK_9d401e89e415fc9ae4313dcf7ff" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "profileImage" ADD CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "profileImage" DROP CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e"`);
            yield queryRunner.query(`DROP TABLE "profileImage"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.firstCommit1650485247826 = firstCommit1650485247826;
