import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}
