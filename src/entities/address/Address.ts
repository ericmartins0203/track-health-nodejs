import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ type: "varchar", length: 250 })
  complement: string;

  @OneToMany(() => Doctors, (doctors) => doctors.address)
  doctors: Doctors[];

  // @OneToOne(() => Doctors, (doctor) => doctor.address)
  // doctor: Doctors;
}
