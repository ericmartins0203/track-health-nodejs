import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { User } from "../user/User";
import { Vaccine } from "./vaccine";

@Entity("user_vaccine")
@Unique(["user", "vaccine"])
export class UserVaccine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: true })
  dose: number;

  @ManyToOne(() => Vaccine, (vaccine) => vaccine, {
    eager: true,
    cascade: ["insert"],
    nullable: false,
  })
  @JoinColumn({ name: "vaccine_id" })
  vaccine: Vaccine;

  @ManyToOne(() => User, (user) => user.userVaccines, { nullable: false })
  @JoinColumn()
  user: User;
}
