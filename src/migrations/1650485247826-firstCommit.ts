import { MigrationInterface, QueryRunner } from "typeorm";

export class firstCommit1650485247826 implements MigrationInterface {
  name = "firstCommit1650485247826";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "gender" character varying, "sex" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "profileImage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "REL_5f1aea3730b5a2a4600bd7ff66" UNIQUE ("userId"), CONSTRAINT "PK_9d401e89e415fc9ae4313dcf7ff" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "profileImage" ADD CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "profileImage" DROP CONSTRAINT "FK_5f1aea3730b5a2a4600bd7ff66e"`
    );
    await queryRunner.query(`DROP TABLE "profileImage"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
