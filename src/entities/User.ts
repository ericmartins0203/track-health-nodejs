import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserDiseases } from "./disease/UserDisease";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 150, nullable: false, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  birthDate: Date;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  sex: string;

  @OneToMany(() => UserDiseases, (userDisease) => userDisease.disease, {
    eager: true,
  })
  userDiseases: UserDiseases[];
}
