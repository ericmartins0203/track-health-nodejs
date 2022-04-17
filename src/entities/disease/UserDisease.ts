import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "../User";
import { Diseases } from "./Disease";

@Entity("UserDiseases")
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
  @JoinColumn()
  disease: Diseases;
}
