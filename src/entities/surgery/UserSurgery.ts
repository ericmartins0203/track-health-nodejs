import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { User } from "../user/User";
import { Surgery } from "./Surgery";

@Entity("user_surgery")
@Unique(["user", "surgery"])
export class UserSurgery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ nullable: false })
  date: Date;

  @ManyToOne(() => Surgery, (surgery) => surgery, {
    eager: true,
    cascade: ["insert"],
    nullable: false,
  })
  @JoinColumn({ name: "surgery_id" })
  surgery: Surgery;

  @ManyToOne(() => User, (user) => user.userSurgery, { nullable: false })
  @JoinColumn()
  user: User;
}
