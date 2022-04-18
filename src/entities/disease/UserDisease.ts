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

  @ManyToOne(() => User, (user) => user.userDiseases)
  user: User;

  @ManyToOne(() => Diseases, (diseases) => diseases.name, { eager: true })
  disease: Diseases;
}
