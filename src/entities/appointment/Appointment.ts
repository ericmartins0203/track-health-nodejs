import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Doctors } from "../doctor/Doctor";
import { User } from "../user/User";

@Entity("appointments")
export class Appointments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  date: Date;

  @Column({ type: "varchar", length: 100 })
  description: string;

  @ManyToOne(() => Doctors, (doctor) => doctor, { eager: true })
  doctor: Doctors;

  @ManyToOne(() => User, (user) => user.appointment)
  user: User;
}
