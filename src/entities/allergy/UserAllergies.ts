import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "../user/User";
import { Allergies } from "./Allergies";

@Entity("userAllergies")
export class UserAllergies {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.userAllergies, {
    nullable: false,
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Allergies, (allergies) => allergies.userAllergies, {
    eager: true,
    cascade: true,
  })
  allergies: Allergies[];

  @Column({ type: "varchar", length: 350, nullable: true })
  description: string;
}
