import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { User } from "../user/User";
import { Medications } from "./Medication";

@Entity("userMedications")
@Unique(["user", "medication"])
export class UserMedications {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.userMedications, {
    nullable: false,
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Medications, (medications) => medications.name, {
    eager: true,
    cascade: ["insert"],
    nullable: false,
  })
  @JoinColumn()
  medication: Medications;

  @Column({ type: "varchar", length: 350, nullable: true })
  description: string;
}
