import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Address } from "../address/Address";
import { Appointments } from "../appointment/Appointment";

@Entity("doctors")
export class Doctors {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  type: string;

  @Column({ type: "varchar", length: 50, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 50 })
  phone: string;

  @Column({ type: "varchar", length: 50 })
  sex: string;

  @OneToMany(() => Appointments, (appointments) => appointments.doctor)
  appointment: Appointments[];

  @ManyToOne(() => Address, (address) => address.doctors, { eager: true })
  address: Address;
}
