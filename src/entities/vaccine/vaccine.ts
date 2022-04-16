import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserVaccine } from "./userVaccine";

@Entity("vaccine")
export class Vaccine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @OneToMany(() => UserVaccine, (userVaccine) => userVaccine.vaccine)
  userVaccines: UserVaccine[];
}
