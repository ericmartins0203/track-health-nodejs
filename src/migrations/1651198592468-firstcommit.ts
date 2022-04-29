import {MigrationInterface, QueryRunner} from "typeorm";

export class firstcommit1651198592468 implements MigrationInterface {
    name = 'firstcommit1651198592468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "allergies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "UQ_991993cf56ba0ec861aaf515da8" UNIQUE ("name"), CONSTRAINT "PK_f72e0cf363a832b8fa8cf657118" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userAllergies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(350), "userId" uuid NOT NULL, "allergyId" uuid NOT NULL, CONSTRAINT "UQ_70439464cf351f1780b4e855f0f" UNIQUE ("userId", "allergyId"), CONSTRAINT "PK_1ed1340221ac0eaa9629c6f41ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diseases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "UQ_293ca0c5bba4f9950f3fb976d33" UNIQUE ("name"), CONSTRAINT "PK_79ddc936b1458d8a079b62dc210" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UserDiseases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(250), "medication" character varying(250), "userId" uuid, "diseaseId" uuid, CONSTRAINT "UQ_098619902905894a214fe89f2b7" UNIQUE ("userId", "diseaseId"), CONSTRAINT "PK_8dbe1897811768e2f5b17e822d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "UQ_4c71a8a6de0a811702d1ef8d73f" UNIQUE ("name"), CONSTRAINT "PK_cdee49fe7cd79db13340150d356" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userMedications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(350), "userId" uuid NOT NULL, "medicationId" uuid NOT NULL, CONSTRAINT "UQ_70761d2c0bbd96c7ae9dc2b9cbc" UNIQUE ("userId", "medicationId"), CONSTRAINT "PK_0e43ad1544c8364c4ef9fde1c8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "surgery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_2e963fc0e35d07a36e15f331754" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_surgery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "date" TIMESTAMP NOT NULL, "surgery_id" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "UQ_142ca675cea1a426abac7ba2376" UNIQUE ("userId", "surgery_id"), CONSTRAINT "PK_22b006faf519e8b4bfca4d412d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vaccine" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_3879829f8d2e396157ebffab918" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_vaccine" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "date" TIMESTAMP NOT NULL, "dose" integer, "vaccine_id" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "UQ_14914d9ad00a11315bfe9dbf1c5" UNIQUE ("userId", "vaccine_id"), CONSTRAINT "PK_29d686068f737824f9ce09da0ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "anamnesis" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "diseases" boolean NOT NULL, "allergy" boolean NOT NULL, "continuousMedication" boolean NOT NULL, "surgery" boolean NOT NULL, "alcoholic" boolean NOT NULL, "drugUser" boolean NOT NULL, "smoker" boolean NOT NULL, "physicalActivity" boolean NOT NULL, "diabetes" boolean NOT NULL, "hipertension" boolean NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "REL_c5b75666b93238b503aba9fcf3" UNIQUE ("userId"), CONSTRAINT "PK_79cb889b1e52a5656e0db13929e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profileImage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, "key" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "REL_5f1aea3730b5a2a4600bd7ff66" UNIQUE ("userId"), CONSTRAINT "PK_9d401e89e415fc9ae4313dcf7ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "gender" character varying, "sex" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "description" character varying(100) NOT NULL, "doctorId" uuid, "userId" uuid, CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "type" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "phone" character varying(50) NOT NULL, "sex" character varying(50) NOT NULL, "addressId" uuid, CONSTRAINT "UQ_62069f52ebba471c91de5d59d61" UNIQUE ("email"), CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(250), "number" integer, "district" character varying(250), "city" character varying(250), "complement" character varying(250) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "userAllergies" ADD CONSTRAINT "FK_5880801a70cbda1b56a04eb07fe" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userAllergies" ADD CONSTRAINT "FK_de7a18a07034d48eb6b2d5cec26" FOREIGN KEY ("allergyId") REFERENCES "allergies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserDiseases" ADD CONSTRAINT "FK_47fd2b1a5aed5759cbda6b0f6b0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserDiseases" ADD CONSTRAINT "FK_c5306c28d972032b84309267399" FOREIGN KEY ("diseaseId") REFERENCES "diseases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userMedications" ADD CONSTRAINT "FK_cfaf05e2b6d8b08d2f9e5ef1802" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userMedications" ADD CONSTRAINT "FK_bdaff5385ad51bcc1af4848a5ed" FOREIGN KEY ("medicationId") REFERENCES "medications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_surgery" ADD CONSTRAINT "FK_512b1bdb900e45a758e2dbb49df" FOREIGN KEY ("surgery_id") REFERENCES "surgery"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_surgery" ADD CONSTRAINT "FK_5f7f92a4446c70b2a7ce84994b0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_vaccine" ADD CONSTRAINT "FK_cc3e88ea2a405280a5b6d09caba" FOREIGN KEY ("vaccine_id") REFERENCES "vaccine"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_vaccine" ADD CONSTRAINT "FK_44987c7db9c6c92fa2e8c310461" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anamnesis" ADD CONSTRAINT "FK_c5b75666b93238b503aba9fcf32" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profileImage" ADD CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_0c1af27b469cb8dca420c160d65" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_01733651151c8a1d6d980135cc4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_ad816aa66aa42fad408b1b7d762" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_ad816aa66aa42fad408b1b7d762"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_01733651151c8a1d6d980135cc4"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_0c1af27b469cb8dca420c160d65"`);
        await queryRunner.query(`ALTER TABLE "profileImage" DROP CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e"`);
        await queryRunner.query(`ALTER TABLE "anamnesis" DROP CONSTRAINT "FK_c5b75666b93238b503aba9fcf32"`);
        await queryRunner.query(`ALTER TABLE "user_vaccine" DROP CONSTRAINT "FK_44987c7db9c6c92fa2e8c310461"`);
        await queryRunner.query(`ALTER TABLE "user_vaccine" DROP CONSTRAINT "FK_cc3e88ea2a405280a5b6d09caba"`);
        await queryRunner.query(`ALTER TABLE "user_surgery" DROP CONSTRAINT "FK_5f7f92a4446c70b2a7ce84994b0"`);
        await queryRunner.query(`ALTER TABLE "user_surgery" DROP CONSTRAINT "FK_512b1bdb900e45a758e2dbb49df"`);
        await queryRunner.query(`ALTER TABLE "userMedications" DROP CONSTRAINT "FK_bdaff5385ad51bcc1af4848a5ed"`);
        await queryRunner.query(`ALTER TABLE "userMedications" DROP CONSTRAINT "FK_cfaf05e2b6d8b08d2f9e5ef1802"`);
        await queryRunner.query(`ALTER TABLE "UserDiseases" DROP CONSTRAINT "FK_c5306c28d972032b84309267399"`);
        await queryRunner.query(`ALTER TABLE "UserDiseases" DROP CONSTRAINT "FK_47fd2b1a5aed5759cbda6b0f6b0"`);
        await queryRunner.query(`ALTER TABLE "userAllergies" DROP CONSTRAINT "FK_de7a18a07034d48eb6b2d5cec26"`);
        await queryRunner.query(`ALTER TABLE "userAllergies" DROP CONSTRAINT "FK_5880801a70cbda1b56a04eb07fe"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "profileImage"`);
        await queryRunner.query(`DROP TABLE "anamnesis"`);
        await queryRunner.query(`DROP TABLE "user_vaccine"`);
        await queryRunner.query(`DROP TABLE "vaccine"`);
        await queryRunner.query(`DROP TABLE "user_surgery"`);
        await queryRunner.query(`DROP TABLE "surgery"`);
        await queryRunner.query(`DROP TABLE "userMedications"`);
        await queryRunner.query(`DROP TABLE "medications"`);
        await queryRunner.query(`DROP TABLE "UserDiseases"`);
        await queryRunner.query(`DROP TABLE "diseases"`);
        await queryRunner.query(`DROP TABLE "userAllergies"`);
        await queryRunner.query(`DROP TABLE "allergies"`);
    }

}
