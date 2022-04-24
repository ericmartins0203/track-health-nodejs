import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("profileImage")
export class ProfileImage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  key: string;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;
}
