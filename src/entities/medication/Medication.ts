import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserMedications } from "./UserMedication";

@Entity("medications")
export class Medications {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  name: string;

  @OneToMany(
    () => UserMedications,
    (userMedications) => userMedications.medication
  )
  userAllergies: UserMedications;
}
