import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "../user/User";
import { Vaccine } from "./vaccine";

@Entity("user_vaccine")
export class UserVaccine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ nullable: true })
  dose: number;

  @ManyToOne(() => Vaccine, (vaccine) => vaccine.userVaccines)
  vaccine: Vaccine;

  @ManyToOne(() => User, (user) => user.userVaccines)
  user: User;
}
