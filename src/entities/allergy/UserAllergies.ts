import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { User } from "../user/User";
import { Allergies } from "./Allergies";

@Entity("userAllergies")
@Unique(["user", "allergy"])
export class UserAllergies {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.userAllergies, {
    nullable: false,
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Allergies, (allergies) => allergies, {
    eager: true,
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  allergy: Allergies;

  @Column({ type: "varchar", length: 350, nullable: true })
  description: string;
}
