import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { UserDiseases } from "./UserDisease";

@Entity("diseases")
export class Diseases {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  name: string;

  @OneToOne((_type) => UserDiseases, (_disease) => Diseases)
  userDisease: UserDiseases;
}
