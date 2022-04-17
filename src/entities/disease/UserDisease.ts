import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { User } from "../user/User";
import { Diseases } from "./Disease";

@Entity("UserDiseases")
@Unique(["user", "disease"])
export class UserDiseases {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 250, nullable: true })
  description: string;

  @Column({ type: "varchar", length: 250, nullable: true })
  medication: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Diseases, (userDisease) => userDisease.id)
  disease: Diseases;
}
