import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Doctors } from "../doctor/Doctor";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 250, nullable: true })
  street: string;

  @Column({ type: "integer", nullable: true })
  number: number;

  @Column({ type: "varchar", length: 250, nullable: true })
  district: string;

  @Column({ type: "varchar", length: 250, nullable: true })
  city: string;

  @OneToOne(() => Doctors, (doctor) => doctor.name)
  doctor: Doctors;
}
