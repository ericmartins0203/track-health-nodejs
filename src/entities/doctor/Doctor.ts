import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
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

  @Column({ type: "varchar", length: 50, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 50 })
  phone: string;

  @Column({ type: "varchar", length: 50 })
  sex: string;

  @OneToMany(() => Appointments, (appointment) => appointment.doctor)
  appointment: Appointments[];

  @OneToOne(() => Address, (address) => address)
  address: Address;
}
