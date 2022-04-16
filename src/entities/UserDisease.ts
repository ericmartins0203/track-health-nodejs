import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Diseases } from "./Disease";
import { User } from "./User";

@Entity("UserDiseases")
export class UserDiseases {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 250, nullable: false, unique: true })
  description: string;

  @Column({ type: "varchar", length: 250, nullable: false, unique: true })
  medication: string;

  @ManyToOne((_type) => User, (_userDisease) => UserDiseases)
  user: User;

  @OneToOne((_type) => Diseases, (_userDisease) => UserDiseases)
  @JoinColumn()
  disease: Diseases;
}
