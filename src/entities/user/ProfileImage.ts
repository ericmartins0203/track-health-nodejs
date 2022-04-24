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

  @Column({ nullable: true })
  url: string;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;
}
