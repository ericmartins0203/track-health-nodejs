import { MigrationInterface, QueryRunner } from "typeorm";

export class upgradeTables1650488150841 implements MigrationInterface {
  name = "upgradeTables1650488150841";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "diseases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "UQ_293ca0c5bba4f9950f3fb976d33" UNIQUE ("name"), CONSTRAINT "PK_79ddc936b1458d8a079b62dc210" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "UserDiseases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(250), "medication" character varying(250), "userId" uuid, "diseaseId" uuid, CONSTRAINT "UQ_098619902905894a214fe89f2b7" UNIQUE ("userId", "diseaseId"), CONSTRAINT "PK_8dbe1897811768e2f5b17e822d4" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "vaccine" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_3879829f8d2e396157ebffab918" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_vaccine" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "dose" integer, "vaccineId" uuid, "userId" uuid, CONSTRAINT "PK_29d686068f737824f9ce09da0ae" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "gender" character varying, "sex" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "allergies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "UQ_991993cf56ba0ec861aaf515da8" UNIQUE ("name"), CONSTRAINT "PK_f72e0cf363a832b8fa8cf657118" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "userAllergies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(350), "userId" uuid NOT NULL, "allergyId" uuid NOT NULL, CONSTRAINT "UQ_70439464cf351f1780b4e855f0f" UNIQUE ("userId", "allergyId"), CONSTRAINT "PK_1ed1340221ac0eaa9629c6f41ba" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "profileImage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "REL_5f1aea3730b5a2a4600bd7ff66" UNIQUE ("userId"), CONSTRAINT "PK_9d401e89e415fc9ae4313dcf7ff" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "UserDiseases" ADD CONSTRAINT "FK_47fd2b1a5aed5759cbda6b0f6b0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "UserDiseases" ADD CONSTRAINT "FK_c5306c28d972032b84309267399" FOREIGN KEY ("diseaseId") REFERENCES "diseases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_vaccine" ADD CONSTRAINT "FK_c17a8f2fdff7256c4165442201a" FOREIGN KEY ("vaccineId") REFERENCES "vaccine"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_vaccine" ADD CONSTRAINT "FK_44987c7db9c6c92fa2e8c310461" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "userAllergies" ADD CONSTRAINT "FK_5880801a70cbda1b56a04eb07fe" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "userAllergies" ADD CONSTRAINT "FK_de7a18a07034d48eb6b2d5cec26" FOREIGN KEY ("allergyId") REFERENCES "allergies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "profileImage" ADD CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "profileImage" DROP CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e"`
    );
    await queryRunner.query(
      `ALTER TABLE "userAllergies" DROP CONSTRAINT "FK_de7a18a07034d48eb6b2d5cec26"`
    );
    await queryRunner.query(
      `ALTER TABLE "userAllergies" DROP CONSTRAINT "FK_5880801a70cbda1b56a04eb07fe"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_vaccine" DROP CONSTRAINT "FK_44987c7db9c6c92fa2e8c310461"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_vaccine" DROP CONSTRAINT "FK_c17a8f2fdff7256c4165442201a"`
    );
    await queryRunner.query(
      `ALTER TABLE "UserDiseases" DROP CONSTRAINT "FK_c5306c28d972032b84309267399"`
    );
    await queryRunner.query(
      `ALTER TABLE "UserDiseases" DROP CONSTRAINT "FK_47fd2b1a5aed5759cbda6b0f6b0"`
    );
    await queryRunner.query(`DROP TABLE "profileImage"`);
    await queryRunner.query(`DROP TABLE "userAllergies"`);
    await queryRunner.query(`DROP TABLE "allergies"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "user_vaccine"`);
    await queryRunner.query(`DROP TABLE "vaccine"`);
    await queryRunner.query(`DROP TABLE "UserDiseases"`);
    await queryRunner.query(`DROP TABLE "diseases"`);
  }
}
