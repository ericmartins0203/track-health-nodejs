import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserAllergies } from "../allergy/UserAllergies";
import { UserVaccine } from "../vaccine/userVaccine";

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

  @OneToMany(() => UserAllergies, (userAllergies) => userAllergies.user)
  userAllergies: UserAllergies[];

  @OneToMany(() => UserVaccine, (userVaccine) => userVaccine.vaccine)
  userVaccines: UserVaccine[];
}