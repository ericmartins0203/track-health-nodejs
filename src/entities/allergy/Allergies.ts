import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserAllergies } from "./UserAllergies";

@Entity("allergies")
export class Allergies {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  name: string;

  @OneToMany(() => UserAllergies, (userAllergies) => userAllergies.allergy)
  userAllergies: UserAllergies;
}
